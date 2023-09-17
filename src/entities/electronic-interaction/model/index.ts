import { pepApi } from '@api'
import { ElectronicInteraction } from '@api/model'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { popUpMessageModel } from '@entities/pop-up-message'
import { MessageType } from '@shared/ui/types'

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

const postElectronicInteractionFx = createEffect(async () => {
    return await pepApi.set()
})

sample({
    clock: postElectronicInteractionFx.doneData,
    fn: (response) => {
        const preparedData = response[0]
        if (preparedData?.result !== 'ok') return { message: 'Не удалось подписать', type: 'failure' as MessageType }

        changeDone(true)
        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 0,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: postElectronicInteractionFx.failData,
    fn: () => {
        return { message: 'Не удалось подписать', type: 'failure' as MessageType }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
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
