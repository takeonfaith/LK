import { IFullSchedule, ISchedule, User } from '@api/model'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'
import { View } from '../consts'
import getSchedule from '../lib/get-schedule'

const DEFAULT_STORE: ISchedule = {
    schedule: null,
    externalSchedule: null,
    teachers: [],
    view: View.day,
    error: null,
}

const useSchedule = () => {
    return { data: useStore($schedule), loading: useStore(getScheduleFx.pending), error: useStore($schedule).error }
}

type GetScheduleProps = { user: User | null; group?: string }

const getScheduleFx = createEffect(
    async ({ user, group }: GetScheduleProps): Promise<{ schedule: IFullSchedule; teachers: string[] }> => {
        try {
            const { schedule, teachers } = await getSchedule(user, group)
            return { schedule, teachers }
        } catch (error) {
            throw new Error('Не удалось загрузить расписание')
        }
    },
)

const changeCurrentModule = createEvent<{ currentModule: keyof IFullSchedule }>()
const changeView = createEvent<View>()
const changeCurrentChosenDay = createEvent<{ day: number }>()
const clearStore = createEvent()

const $schedule = createStore<ISchedule>(DEFAULT_STORE)
    .on(getScheduleFx, (oldData) => ({
        ...oldData,
        schedule: null,
        error: null,
    }))
    .on(getScheduleFx.doneData, (oldData, newData) => ({
        ...oldData,
        schedule: newData.schedule,
        teachers: newData.teachers,
        //calcNextExamTime(newData.semestr)
    }))
    .on(getScheduleFx.failData, (oldData, error) => ({
        ...oldData,
        error: `${error.cause}, ${error.message}, ${error.stack}, ${error.name}`,
    }))
    .on(changeView, (oldState, view) => ({
        ...oldState,
        view,
    }))
    .on(changeCurrentChosenDay, (oldState, newState) => ({
        ...oldState,
        currentChosenDay: newState.day,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useSchedule,
}

export const events = {
    changeCurrentModule,
    changeView,
    changeCurrentChosenDay,
    clearStore,
}

export const effects = {
    getScheduleFx,
}
