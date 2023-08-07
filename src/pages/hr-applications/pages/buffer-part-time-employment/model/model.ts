import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferPartTimeEmployment, BufferPartTimeEmploymentForm, BufferPartTimeEmploymentOrder } from '../types'

const loadBufferPartTimeEmployment = createEvent()
const sendBufferPartTimeEmployment = createEvent<BufferPartTimeEmploymentForm>()

const loadBufferPartTimeEmploymentFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferPartTimeEmployment>(
        `InternalPartTime.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data.orders
})
sample({ clock: loadBufferPartTimeEmployment, target: loadBufferPartTimeEmploymentFx })

const sendBufferPartTimeEmploymentFx = createEffect(async (data: BufferPartTimeEmploymentForm) => {
    const result = await $hrApi.post<BufferPartTimeEmployment>('Weekend.AddWeekend', data)

    return result.data
})

sample({ clock: sendBufferPartTimeEmployment, target: sendBufferPartTimeEmploymentFx })

const $bufferPartTimeEmploymentOrders = createStore<BufferPartTimeEmploymentOrder[]>([])
const $bufferPartTimeEmploymentLoading = sendBufferPartTimeEmploymentFx.pending

sample({ clock: loadBufferPartTimeEmploymentFx.doneData, target: $bufferPartTimeEmploymentOrders })
sample({
    clock: sendBufferPartTimeEmploymentFx.doneData,
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
//     clock: sendBufferPartTimeEmploymentFx.doneData,
//     source: $bufferPartTimeEmployment,
//     fn: (source, clock) => {
//         return [...source, clock]
//     },
//     target: $bufferPartTimeEmployment,
// })
sample({
    clock: sendBufferPartTimeEmploymentFx.fail,
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
    loadBufferPartTimeEmployment,
    sendBufferPartTimeEmployment,
}

export const effects = {
    sendBufferPartTimeEmploymentFx,
}
export const selectors = {
    useBufferPartTimeEmployment: () => ({
        data: useStore($bufferPartTimeEmploymentOrders),
        loading: useStore($bufferPartTimeEmploymentLoading),
    }),
}
