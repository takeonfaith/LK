import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferWorkTransfer, BufferWorkTransferForm, BufferWorkTransferHistories } from '../types'

const loadBufferWorkTransfer = createEvent()
const sendBufferWorkTransfer = createEvent<BufferWorkTransferForm>()

const loadBufferWorkTransferFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferWorkTransfer>(
        `Weekend.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data.employeeHistories
})
sample({ clock: loadBufferWorkTransfer, target: loadBufferWorkTransferFx })

const sendBufferWorkTransferFx = createEffect(async (data: BufferWorkTransferForm) => {
    const result = await $hrApi.post<BufferWorkTransfer>('Weekend.AddWeekend', data)

    return result.data
})

sample({ clock: sendBufferWorkTransfer, target: sendBufferWorkTransferFx })

const $bufferWorkTransferOrders = createStore<BufferWorkTransferHistories[]>([])
const $bufferWorkTransferLoading = sendBufferWorkTransferFx.pending

sample({ clock: loadBufferWorkTransferFx.doneData, target: $bufferWorkTransferOrders })
sample({
    clock: sendBufferWorkTransferFx.doneData,
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
//     clock: sendBufferWorkTransferFx.doneData,
//     source: $bufferWorkTransfer,
//     fn: (source, clock) => {
//         return [...source, clock]
//     },
//     target: $bufferWorkTransfer,
// })
sample({
    clock: sendBufferWorkTransferFx.fail,
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
    loadBufferWorkTransfer,
    sendBufferWorkTransfer,
}

export const effects = {
    sendBufferWorkTransferFx,
}
export const selectors = {
    useBufferWorkTransfer: () => ({
        data: useStore($bufferWorkTransferOrders),
        loading: useStore($bufferWorkTransferLoading),
    }),
}
