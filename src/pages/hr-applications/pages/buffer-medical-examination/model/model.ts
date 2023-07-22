import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { setAgeMed } from '../../medical-examination/lib/age-med'
import { setIsTutor } from '../../medical-examination/lib/is-tutor'
import { BufferMedicalExamination, BufferMedicalExaminationForm, BufferMedicalExaminationOrder } from '../types'

const loadBufferMedicalExamination = createEvent()
const sendBufferMedicalExamination = createEvent<BufferMedicalExaminationForm>()

const loadBufferMedicalExaminationFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferMedicalExamination>(
        `MedicalExamination.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )

    setAgeMed(data.age)
    setIsTutor(data.employeeMedicalExaminations.map(({ employeeGuid, tutor }) => ({ employeeGuid, tutor })))
    // const empGuidIsTutor = data.employeeMedicalExaminations.map(({ employeeGuid, tutor }) => ({ employeeGuid, tutor }));
    // console.log(empGuidIsTutor)
    return data.employeeMedicalExaminations
})
sample({ clock: loadBufferMedicalExamination, target: loadBufferMedicalExaminationFx })

const sendBufferMedicalExaminationFx = createEffect(async (data: BufferMedicalExaminationForm) => {
    const result = await $hrApi.post<BufferMedicalExamination>('MedicalExamination.AddMedicalExamination', data)

    return result.data
})

sample({ clock: sendBufferMedicalExamination, target: sendBufferMedicalExaminationFx })

const $bufferMedicalExaminationOrders = createStore<BufferMedicalExaminationOrder[]>([])
const $bufferMedicalExaminationLoading = sendBufferMedicalExaminationFx.pending

sample({ clock: loadBufferMedicalExaminationFx.doneData, target: $bufferMedicalExaminationOrders })
sample({
    clock: sendBufferMedicalExaminationFx.doneData,
    fn: (response) => {
        const result = response
        if (result.isError) {
            return { message: result.error, type: 'hrFailure' as MessageType, time: 300000 }
        }

        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 0,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})
// sample({
//     clock: sendBufferMedicalExaminationFx.doneData,
//     source: $bufferMedicalExamination,
//     fn: (source, clock) => {
//         return [...source, clock]
//     },
//     target: $bufferMedicalExamination,
// })
sample({
    clock: sendBufferMedicalExaminationFx.fail,
    fn: () => {
        return {
            message: 'Не удалось отправить форму.',
            type: 'hrFailure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})
export const events = {
    loadBufferMedicalExamination,
    sendBufferMedicalExamination,
}

export const effects = {
    sendBufferMedicalExaminationFx,
}
export const selectors = {
    useBufferMedicalExamination: () => ({
        data: useStore($bufferMedicalExaminationOrders),
        loading: useStore($bufferMedicalExaminationLoading),
    }),
}
