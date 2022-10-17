import { AxiosResponse } from 'axios'
import { Effect, Event } from 'effector'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'

export interface TemplateFormStore<DataType> {
    data: DataType | null
    completed: boolean
    error: string | null
    loading: boolean
}

export interface TemplateFormStoreOutput<DataType, PostDataType> {
    selectors: {
        useForm: () => TemplateFormStore<DataType>
    }
    effects: {
        getFormFx: Effect<void, DataType, Error>
        postFormFx: Effect<PostDataType, void, Error>
    }
    events: {
        changeCompleted: Event<{
            completed: boolean
        }>
        clearStore: Event<void>
    }
}

interface APIType<DataType, PostDataType> {
    get: () => Promise<AxiosResponse<DataType>>
    post: (postData: PostDataType, formId?: string) => Promise<AxiosResponse<any, any>>
    put?: () => void
}

interface Args<DataType, PostDataType> {
    defaultStore: TemplateFormStore<DataType>
    api: APIType<DataType, PostDataType>
}

export const createFormStore = <DataType, PostDataType>({
    defaultStore,
    api,
}: Args<DataType, PostDataType>): TemplateFormStoreOutput<DataType, PostDataType> => {
    const DEFAULT_STORE = defaultStore

    const useForm = () => {
        return {
            data: useStore($formStore).data,
            loading: useStore(getFormFx.pending),
            error: useStore($formStore).error,
            completed: useStore($formStore).completed,
        }
    }

    const changeCompleted = createEvent<{ completed: boolean }>()

    const postFormFx = createEffect(async (postData: PostDataType): Promise<void> => {
        try {
            const response = await api.post(postData)

            return response.data
        } catch (error) {
            throw new Error('Не удалось отправить данные. Проверьте интернет соединение и попробуйте снова')
        }
    })

    const getFormFx = createEffect(async (): Promise<DataType> => {
        try {
            const response = await api.get()

            return { ...response.data }
        } catch (error) {
            throw new Error(error as string)
        }
    })

    const clearStore = createEvent()

    const $formStore = createStore<TemplateFormStore<DataType>>(DEFAULT_STORE)
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
            postFormFx,
        },
        events: {
            changeCompleted,
            clearStore,
        },
    }
}
