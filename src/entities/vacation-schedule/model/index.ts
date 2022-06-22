import { vacationScheduleApi } from '@api'
import { VacationSchedule } from '@api/model/vacation-schedule'

import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'

type VacationScheduleStore = {
    data: VacationSchedule[] | null
    error: string | null
}
const DEFAULT_STORE: VacationScheduleStore = {
    data: null,
    error: null,
}

const getVacationScheduleFx = createEffect(async (): Promise<VacationSchedule[]> => {
    try {
        return await vacationScheduleApi.get()
    } catch (error) {
        throw new Error('Возникла ошибка с получением графика отпусков!')
    }
})

const $vacationSchedule = createStore<VacationScheduleStore>(DEFAULT_STORE)
    .on(getVacationScheduleFx.doneData, (_, data) => ({
        data,
        error: null,
    }))
    .on(getVacationScheduleFx.failData, (oldState, error) => ({
        ...oldState,
        error: error.message,
    }))

const useVacationShedule = () => {
    return {
        data: useStore($vacationSchedule).data,
        loading: useStore(getVacationScheduleFx.pending),
        error: useStore($vacationSchedule)?.error,
    }
}

export const selectors = {
    useVacationShedule,
}

export const events = {}

export const effects = {
    getVacationScheduleFx,
}
