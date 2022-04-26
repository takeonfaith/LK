import { AxiosResponse } from 'axios'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'
import { forward } from 'effector/effector.mjs'

interface IStore<DataType> {
    data: DataType | null
    completed: boolean
    error: string | null
    loading: boolean
}

interface APIType<DataType, PostDataType> {
    get: () => Promise<AxiosResponse<DataType>>
    post: (postData: PostDataType) => Promise<AxiosResponse<any, any>>
    put?: () => void
}

export const createFormStore = <DataType, PostDataType>(
    defaultStore: IStore<DataType>,
    api: APIType<DataType, PostDataType>,
) => {
    const DEFAULT_STORE = defaultStore

    const useForm = () => {
        // eslint-disable-next-line no-console
        console.log(useStore($formStore))

        return {
            data: useStore($formStore).data,
            loading: useStore(getFormFx.pending),
            error: useStore($formStore).error,
            completed: useStore($formStore).completed,
        }
    }

    const postForm = createEvent<PostDataType>()
    const changeCompleted = createEvent<{ completed: boolean }>()

    const postFormFx = createEffect(async (postData: PostDataType): Promise<void> => {
        try {
            const response = await api.post(postData)

            return response.data
        } catch (error) {
            throw new Error('Не удалось загрузить раздел')
        }
    })

    forward({ from: postForm, to: postFormFx })

    const getFormFx = createEffect(async (): Promise<DataType> => {
        try {
            const response = await api.get()

            return response.data
        } catch (error) {
            throw new Error(error as string)
        }
    })

    const clearStore = createEvent()

    const $formStore = createStore<IStore<DataType>>(DEFAULT_STORE)
        .on(getFormFx, (oldData) => ({
            ...oldData,
            error: null,
        }))
        .on(getFormFx.doneData, (oldData, newData) => ({
            ...oldData,
            data: newData,
        }))
        .on(getFormFx.failData, (oldData, newData) => ({
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

    return {
        selectors: {
            useForm,
        },
        effects: {
            getFormFx,
        },
        events: {
            postForm,
            changeCompleted,
            clearStore,
        },
    }
}
