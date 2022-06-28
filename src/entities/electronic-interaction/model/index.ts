import { pepApi } from '@api'
import { ElectronicInteraction } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'

interface ElectronicInteractionStore {
    electronicInteraction: ElectronicInteraction | null
    error: string | null
    completed: boolean
}

const DEFAULT_STORE = {
    electronicInteraction: null,
    error: null,
    completed: false,
}

const useElectronicInteraction = () => {
    return {
        data: useStore($electronicInteractionStore).electronicInteraction,
        loading: useStore(getElectronicInteractionFx.pending),
        error: useStore($electronicInteractionStore).error,
        completed: useStore($electronicInteractionStore).completed,
    }
}

const postElectronicInteraction = createEvent<ElectronicInteraction>()
const changeCompleted = createEvent<{ completed: boolean }>()

const postElectronicInteractionFx = createEffect(async (): Promise<void> => {
    try {
        const response = await pepApi.set()

        return response.data
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

const getElectronicInteractionFx = createEffect(async (): Promise<ElectronicInteraction> => {
    try {
        const response = await pepApi.get()

        return response.data[0]
    } catch (error) {
        throw new Error(error as string)
    }
})

const clearStore = createEvent()

const $electronicInteractionStore = createStore<ElectronicInteractionStore>(DEFAULT_STORE)
    .on(getElectronicInteractionFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getElectronicInteractionFx.doneData, (oldData, newData) => ({
        ...oldData,
        electronicInteraction: newData,
    }))
    .on(getElectronicInteractionFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useElectronicInteraction,
}

export const effects = {
    getElectronicInteractionFx,
    postElectronicInteractionFx,
}
export const events = {
    postElectronicInteraction,
    changeCompleted,
    clearStore,
}
