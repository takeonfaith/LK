import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayWork, BufferHolidayWorkForm } from '../types'

const loadBufferHolidayWork = createEvent()
const sendBufferHolidayWork = createEvent<BufferHolidayWorkForm>()

const loadBufferHolidayWorkFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayWork[]>('Weekend.GetAllHistory')

    return data
})
sample({ clock: loadBufferHolidayWork, target: loadBufferHolidayWorkFx })

const sendBufferHolidayWorkFx = createEffect(async (data: BufferHolidayWorkForm) => {
    const result = await $hrApi.post<BufferHolidayWork>('Weekend.AddWeekend', data)

    return result.data
})

sample({ clock: sendBufferHolidayWork, target: sendBufferHolidayWorkFx })

const $bufferHolidayWork = createStore<BufferHolidayWork[]>([])
const $bufferHolidayWorkLoading = sendBufferHolidayWorkFx.pending

sample({ clock: loadBufferHolidayWorkFx.doneData, target: $bufferHolidayWork })
sample({
    clock: sendBufferHolidayWorkFx.doneData,
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
//     clock: sendBufferHolidayWorkFx.doneData,
//     source: $bufferHolidayWork,
//     fn: (source, clock) => {
//         return [...source, clock]
//     },
//     target: $bufferHolidayWork,
// })
sample({
    clock: sendBufferHolidayWorkFx.fail,
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
    loadBufferHolidayWork,
    sendBufferHolidayWork,
}

export const effects = {
    sendBufferHolidayWorkFx,
}
export const selectors = {
    useBufferHolidayWork: () => ({
        data: useStore($bufferHolidayWork),
        loading: useStore($bufferHolidayWorkLoading),
    }),
}
