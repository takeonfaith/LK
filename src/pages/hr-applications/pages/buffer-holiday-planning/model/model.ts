import { $hrApi } from '@shared/api/config'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'
import { BufferHolidayPlanning, BufferHolidayPlanningForm } from '../types'

const loadBufferHolidayPlanning = createEvent()
const sendBufferHolidayPlanning = createEvent<BufferHolidayPlanningForm>()

const loadBufferHolidayPlanningFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHolidayPlanning[]>('Vacation.GetAllHistory')

    console.log(data)

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
    source: $bufferHolidayPlanning,
    fn: (source, clock) => {
        return [...source, clock]
    },
    target: $bufferHolidayPlanning,
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
