import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayPlanning, BufferHolidayPlanningForm } from '../types'

const loadBufferHolidayPlanning = createEvent()
const sendBufferHolidayPlanning = createEvent<BufferHolidayPlanningForm>()

const loadBufferHolidayPlanningFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayPlanning[]>('Vacation.GetAllHistory')

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
    fn: (response) => {
        const result = response
        if (result.isError) {
            return { message: result.error, type: 'hrFailure' as MessageType, time: 300000 }
        }

        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 30000,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})
// sample({
//     clock: sendBufferHolidayPlanningFx.doneData,
//     source: $bufferHolidayPlanning,
//     fn: (source, clock) => {
//         return [...source, clock]
//     },
//     target: $bufferHolidayPlanning,
// })

sample({
    clock: sendBufferHolidayPlanningFx.fail,
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
