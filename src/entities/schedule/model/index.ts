import { IFullSchedule, ISchedule } from '@api/model'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import { View } from '../consts'
import { getGroupSchedule } from '../lib/get-group-schedule'
import { getTeacherSchedule } from '../lib/get-teacher-schedule'

const DEFAULT_STORE: ISchedule = {
    data: {
        schedule: null,
        externalSchedule: null,
        teachers: [],
        view: View.day,
        filter: '',
        searchValue: '',
    },
    loading: false,
    error: null,
}

const useSchedule = () => {
    return useStore($schedule)
}

const getScheduleFx = createEffect(async ({ group, fullName }: { fullName?: string; group?: string | undefined }) => {
    try {
        if (fullName) return await getTeacherSchedule(fullName)
        if (group) return await getGroupSchedule(group)

        throw new Error('Невозможно получить расписание, так как не указан ни один из параметров')
    } catch (error) {
        throw new Error((error as Error).message)
    }
})

const getGroupScheduleFx = createEffect(async ({ group }: { group: string | undefined }) => {
    try {
        return await getGroupSchedule(group)
    } catch (error) {
        throw new Error((error as Error).message)
    }
})

const getTeacherScheduleFx = createEffect(async ({ fullName }: { fullName: string | undefined }) => {
    try {
        return await getTeacherSchedule(fullName)
    } catch (error) {
        throw new Error((error as Error).message + 'ЭВФЫВФ')
    }
})

const changeCurrentModule = createEvent<{ currentModule: keyof IFullSchedule }>()
const changeView = createEvent<View>()
const changeCurrentChosenDay = createEvent<{ day: number }>()
const clearStore = createEvent()
const setFilter = createEvent<string>()
const setSearchValue = createEvent<string>()
const resetExternalSchedule = createEvent()
// const getSchedule = createEvent<{ group: string }>()
// const getExternalGroupSchedule = createEvent<{ group: string }>()

const $schedule = createStore(DEFAULT_STORE)
    .on(getScheduleFx, (oldData) => ({
        ...oldData,
        data: { ...oldData.data, schedule: null },
        error: null,
    }))
    .on(getScheduleFx.failData, (oldData, error) => ({
        ...oldData,
        error: `${error.cause}, ${error.message}, ${error.stack}, ${error.name}`,
    }))
    .on(changeView, (oldState, view) => ({
        ...oldState,
        data: { ...oldState.data, view },
    }))
    .on(changeCurrentChosenDay, (oldState, newState) => ({
        ...oldState,
        currentChosenDay: newState.day,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

sample({
    clock: getScheduleFx.doneData,
    source: $schedule,
    fn: (store, schedule) => ({ ...store, data: { ...store.data, schedule } }),
    target: $schedule,
})

sample({
    clock: setFilter,
    source: $schedule,
    fn: (store, filter) => ({ ...store, data: { ...store.data, filter } }),
    target: $schedule,
})

sample({
    clock: setSearchValue,
    source: $schedule,
    fn: (store, searchValue) => ({ ...store, data: { ...store.data, searchValue } }),
    target: $schedule,
})

sample({
    clock: getTeacherScheduleFx.doneData,
    source: $schedule,
    fn: (store, externalSchedule) => ({ ...store, data: { ...store.data, externalSchedule } }),
    target: $schedule,
})

sample({
    clock: getGroupScheduleFx.doneData,
    source: $schedule,
    fn: (store, externalSchedule) => ({ ...store, data: { ...store.data, externalSchedule } }),
    target: $schedule,
})

sample({
    clock: [getGroupScheduleFx, getTeacherScheduleFx, getScheduleFx],
    source: $schedule,
    fn: (store) => ({ ...store, loading: true }),
    target: $schedule,
})

sample({
    clock: [getGroupScheduleFx, getTeacherScheduleFx],
    source: $schedule,
    fn: (store) => ({ ...store, data: { ...store.data, externalSchedule: null } }),
    target: $schedule,
})

sample({
    clock: [getGroupScheduleFx.doneData, getTeacherScheduleFx.doneData, getScheduleFx.doneData],
    source: $schedule,
    fn: (store) => ({ error: null, loading: false, data: { ...store.data } }),
    target: $schedule,
})

sample({
    clock: [getGroupScheduleFx.failData, getTeacherScheduleFx.failData, getScheduleFx.failData],
    source: $schedule,
    fn: (store, error) => ({ ...store, error: error.message, loading: false }),
    target: $schedule,
})

sample({
    clock: resetExternalSchedule,
    source: $schedule,
    fn: (store) => ({ ...store, data: { ...store.data, externalSchedule: null } }),
    target: $schedule,
})

export const selectors = {
    useSchedule,
}

export const events = {
    changeCurrentModule,
    changeView,
    changeCurrentChosenDay,
    clearStore,
    resetExternalSchedule,
    setSearchValue,
    setFilter,
}

export const effects = {
    getScheduleFx,
    getGroupScheduleFx,
    getTeacherScheduleFx,
}
