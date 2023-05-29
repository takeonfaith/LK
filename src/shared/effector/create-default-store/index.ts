import { DEFAULT_API_LOAD_ERROR_MESSAGE } from '@shared/constants/consts'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'
import { Args, TemplateStore, TemplateStoreOutput } from './types'

const DEFAULT_STORE = {
    data: null,
    loading: false,
    error: null,
}

export const createDefaultStore = <APIDataType, OutputDataType = void, APIGetArgs = void>({
    initialStore,
    api,
    prepareData,
    errorMessage = () => DEFAULT_API_LOAD_ERROR_MESSAGE,
}: Args<APIDataType, OutputDataType, APIGetArgs>): TemplateStoreOutput<
    TypeChoice<OutputDataType, APIDataType>,
    APIGetArgs
> => {
    const defaultStore = initialStore ?? DEFAULT_STORE

    const useData = () => {
        return {
            data: useStore($store).data,
            loading: useStore(getFx.pending),
            error: useStore($store).error,
        }
    }

    const getFx = createEffect(async (args: APIGetArgs): Promise<TypeChoice<OutputDataType, APIDataType>> => {
        try {
            const response = await api.get(args)

            return (prepareData ? prepareData(response) : response) as TypeChoice<OutputDataType, APIDataType>
        } catch (error) {
            throw new Error(errorMessage(error as Error))
        }
    })

    const clearStore = createEvent()

    const $store = createStore<TemplateStore<TypeChoice<OutputDataType, APIDataType>>>(defaultStore)
        .on(getFx, (oldData) => ({
            ...oldData,
            error: null,
        }))
        .on(getFx.doneData, (oldData, newData) => ({
            ...oldData,
            data: newData,
        }))
        .on(getFx.failData, (oldData, newData) => ({
            ...oldData,
            error: newData.message,
        }))
        .on(clearStore, () => ({
            ...DEFAULT_STORE,
        }))

    return {
        selectors: {
            useData,
        },
        effects: {
            getFx,
        },
        events: {
            clearStore,
        },
    }
}
