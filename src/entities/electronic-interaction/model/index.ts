import { pepApi } from '@api'
import { ElectronicInteraction } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { popUpMessageModel } from '@entities/pop-up-message'

interface ElectronicInteractionStore {
    electronicInteraction: ElectronicInteraction | null
    error: string | null
    completed: boolean
    done: boolean
}

const DEFAULT_STORE = {
    electronicInteraction: null,
    error: null,
    completed: false,
    done: false,
}

const postElectronicInteraction = createEvent()
const changeDone = createEvent<boolean>()
const changeCompleted = createEvent<boolean>()

const postElectronicInteractionFx = createEffect(async (): Promise<void> => {
    try {
        const response = await pepApi.set()
        const preparedData = response[0]

        if (preparedData?.result !== 'ok')
            popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось подписать', type: 'failure' })
        else {
            changeDone(true)
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Согласие успешно подписано',
                type: 'success',
            })
        }
    } catch (error) {
        throw new Error('Возникла ошибка. Попробуйте позже')
    }
})

const getElectronicInteractionFx = createEffect(async (): Promise<ElectronicInteraction> => {
    try {
        const response = await pepApi.get()

        return response[0]
    } catch (error) {
        throw new Error(error as string)
    }
})

sample({ clock: postElectronicInteraction, target: postElectronicInteractionFx })

const useData = () => {
    const { completed, done, electronicInteraction, error } = useStore($electronicInteractionStore)
    return {
        data: { completed, done, electronicInteraction },
        loading: useStore(getElectronicInteractionFx.pending),
        workerLoading: useStore(postElectronicInteractionFx.pending),
        error: error,
    }
}

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
    .on(changeCompleted, (oldData, completed) => ({
        ...oldData,
        completed,
    }))
    .on(changeDone, (oldData, done) => ({
        ...oldData,
        done,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useData,
}

export const effects = {
    getElectronicInteractionFx,
}

export const events = {
    postElectronicInteraction,
    changeCompleted,
    clearStore,
}
