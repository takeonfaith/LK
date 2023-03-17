import { popUpMessageModel } from '@entities/pop-up-message'
import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi, isAxiosError } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayPlanning, BufferHolidayPlanningForm } from '../types'

const loadBufferHolidayPlanning = createEvent()
const sendBufferHolidayPlanning = createEvent<BufferHolidayPlanningForm>()

const loadBufferHolidayPlanningFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayPlanning[]>(
        `Vacation.GetAllHistory?employeeGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data
})

sample({ clock: loadBufferHolidayPlanning, target: loadBufferHolidayPlanningFx })

const sendBufferHolidayPlanningFx = createEffect(async (data: BufferHolidayPlanningForm) => {
    const result = await $hrApi.post<BufferHolidayPlanning>('Vacation.AddVacation', data)

    return result.data
})

sample({ clock: sendBufferHolidayPlanning, target: sendBufferHolidayPlanningFx })

const $bufferHolidayPlanning = createStore<BufferHolidayPlanning[]>([])
const $bufferHolidayPlanningLoading = sendBufferHolidayPlanningFx.pending

sample({ clock: loadBufferHolidayPlanningFx.doneData, target: $bufferHolidayPlanning })

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    fn: (result) => {
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

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    source: $bufferHolidayPlanning,
    fn: (source, clock) => {
        return [...source, clock]
    },
    target: $bufferHolidayPlanning,
})

sample({
    clock: loadBufferHolidayPlanningFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? response.response?.data.error : 'Не удалось загрузить данные'

        return {
            message,
            type: 'failure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? response.response?.data.error : 'Не удалось отправить данные'

        return {
            message,
            type: 'hrFailure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})

export const events = {
    loadBufferHolidayPlanning,
    sendBufferHolidayPlanning,
}

export const effects = {
    sendBufferHolidayPlanningFx,
}
export const selectors = {
    useBufferHolidayPlanning: () => ({
        data: useStore($bufferHolidayPlanning),
        loading: useStore($bufferHolidayPlanningLoading),
    }),
}
