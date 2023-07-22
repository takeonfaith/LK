import { DEFAULT_API_LOAD_ERROR_MESSAGE } from '@shared/consts'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react/compat'
import { Args, EffectReturnType, TemplateStore, TemplateStoreOutput } from './types'

const DEFAULT_STORE = {
    data: null,
    preparedData: null,
    loading: false,
    error: null,
}

export const createDefaultStore = <APIDataType, OutputDataType = void, APIGetArgs = void, APIPostArgs = void>({
    initialStore,
    api,
    prepareData,
    errorMessage = () => DEFAULT_API_LOAD_ERROR_MESSAGE,
}: Args<APIDataType, OutputDataType, APIGetArgs, APIPostArgs>): TemplateStoreOutput<
    APIDataType,
    TypeChoice<OutputDataType, APIDataType>,
    APIGetArgs,
    APIPostArgs
> => {
    type PreparedDataType = TypeChoice<OutputDataType, APIDataType>
    type Store = TemplateStore<APIDataType, PreparedDataType>

    const defaultStore = initialStore ?? DEFAULT_STORE

    const useData = (): Store => {
        return {
            data: useStore($store).data,
            preparedData: useStore($store).preparedData,
            loading: useStore(getFx.pending),
            error: useStore($store).error,
        }
    }

    const getFx = createEffect(async (args: APIGetArgs): Promise<EffectReturnType<APIDataType, PreparedDataType>> => {
        try {
            const response = await api.get(args)

            return {
                data: response,
                preparedData: (prepareData ? prepareData(response) : response) as PreparedDataType,
            }
        } catch (error) {
            throw new Error(errorMessage(error as Error))
        }
    })

    const postFx = createEffect(async (args: APIPostArgs): Promise<any> => {
        try {
            await api.post?.(args)
        } catch (error) {
            throw new Error(errorMessage(error as Error))
        }
    })

    const clearStore = createEvent()

    const $store = createStore<Store>(defaultStore)
        .on(getFx, (oldData) => ({
            ...oldData,
            error: null,
        }))
        .on(postFx.pending, (oldData) => ({ ...oldData, loading: true }))
        .on(postFx.failData, (oldData, { message }) => ({ ...oldData, error: message, loading: false }))
        .on(postFx.doneData, (oldData) => ({ ...oldData, error: null, loading: false }))
        .on(getFx.doneData, (oldData, { data, preparedData }) => ({
            ...oldData,
            data,
            preparedData,
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
            postFx,
        },
        events: {
            clearStore,
        },
    }
}
