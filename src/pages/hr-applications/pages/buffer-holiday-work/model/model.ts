import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayWork, BufferHolidayWorkForm, BufferHolidayWorkOrder } from '../types'

const loadBufferHolidayWork = createEvent()
const sendBufferHolidayWork = createEvent<BufferHolidayWorkForm>()

const loadBufferHolidayWorkFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayWork>(
        `Weekend.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data.orders
})
sample({ clock: loadBufferHolidayWork, target: loadBufferHolidayWorkFx })

const sendBufferHolidayWorkFx = createEffect(async (data: BufferHolidayWorkForm) => {
    const result = await $hrApi.post<BufferHolidayWork>('Weekend.AddWeekend', data)

    return result.data
})

sample({ clock: sendBufferHolidayWork, target: sendBufferHolidayWorkFx })

const $bufferHolidayWorkOrders = createStore<BufferHolidayWorkOrder[]>([])
const $bufferHolidayWorkLoading = sendBufferHolidayWorkFx.pending

sample({ clock: loadBufferHolidayWorkFx.doneData, target: $bufferHolidayWorkOrders })
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
            time: 0,
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
        data: useStore($bufferHolidayWorkOrders),
        loading: useStore($bufferHolidayWorkLoading),
    }),
}
