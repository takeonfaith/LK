import { Effect, Event } from 'effector'

export interface TemplateStore<DataType, PreparedDataType> {
    data: DataType | null
    preparedData: PreparedDataType | null
    error: string | null
    loading: boolean
}

export type EffectReturnType<DataType, PreparedDataType> = {
    data: DataType
    preparedData: PreparedDataType
}

export interface TemplateStoreOutput<DataType, PreparedDataType, APIGetArgs, APIPostArgs = void> {
    selectors: {
        useData: () => TemplateStore<DataType, PreparedDataType>
    }
    effects: {
        getFx: Effect<APIGetArgs, EffectReturnType<DataType, PreparedDataType>, Error>
        postFx: Effect<APIPostArgs, any, Error>
    }
    events: {
        clearStore: Event<void>
    }
}

interface APIType<APIGetArgs, DataType, APIPostArgs> {
    get: (args: APIGetArgs) => Promise<DataType>
    post?: (args: APIPostArgs) => Promise<any>
}

export interface Args<APIDataType, OutputDataType, APIGetArgs, APIPostArgs> {
    /**
     * Изначальное значение стора. Если не прокинуть, вставит дефольные значения
     */
    initialStore?: TemplateStore<APIDataType, TypeChoice<OutputDataType, APIDataType>>
    /**
     * Запросы
     */
    api: APIType<APIGetArgs, APIDataType, APIPostArgs>
    /**
     *
     * @param apiData Формат данных, приходящих в апи
     * @returns Препарированные данные
     */
    prepareData?: (apiData: APIDataType) => TypeChoice<OutputDataType, APIDataType>
    errorMessage?: (error: Error) => string
}
