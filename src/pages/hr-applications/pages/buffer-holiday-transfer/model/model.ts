import { popUpMessageModel } from '@entities/pop-up-message'
import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi, isAxiosError } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayTransfer, BufferHolidayTransferForm } from '../types'

const loadBufferHolidayTransfer = createEvent()
const sendBufferHolidayTransfer = createEvent<BufferHolidayTransferForm>()

const loadBufferHolidayTransferFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayTransfer>(
        `CarryForwardVacation.GetAllHistory?personalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data
})

sample({ clock: loadBufferHolidayTransfer, target: loadBufferHolidayTransferFx })

const sendBufferHolidayTransferFx = createEffect(async (data: BufferHolidayTransferForm) => {
    const result = await $hrApi.post<BufferHolidayTransfer>('CarryForwardVacation.AddCarryForwardVacation', data)

    return result.data
})

sample({ clock: sendBufferHolidayTransfer, target: sendBufferHolidayTransferFx })

const $bufferHolidayTransfer = createStore<BufferHolidayTransfer['employeeVacations']>([])
const $bufferHolidayTransferLoading = sendBufferHolidayTransferFx.pending

sample({
    clock: loadBufferHolidayTransferFx.doneData,
    fn: ({ employeeVacations }) => employeeVacations,
    target: $bufferHolidayTransfer,
})

sample({
    clock: sendBufferHolidayTransferFx.doneData,
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
    clock: sendBufferHolidayTransferFx.doneData,
    source: $bufferHolidayTransfer,
    fn: (source, { employeeVacations }) => {
        return [...source, ...employeeVacations]
    },
    target: $bufferHolidayTransfer,
})

sample({
    clock: loadBufferHolidayTransferFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? (response.response?.data as any).error : 'Не удалось загрузить данные'

        return {
            message,
            type: 'failure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayTransferFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? (response.response?.data as any).error : 'Не удалось отправить данные'

        return {
            message,
            type: 'hrFailure' as MessageType,
            time: 300000,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})

export const events = {
    loadBufferHolidayTransfer,
    sendBufferHolidayTransfer,
}

export const effects = {
    sendBufferHolidayTransferFx,
}
export const selectors = {
    useBufferHolidayTransfer: () => ({
        data: useStore($bufferHolidayTransfer),
        loading: useStore($bufferHolidayTransferLoading),
    }),
}
