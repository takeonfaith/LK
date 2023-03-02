import { Effect, Event } from 'effector'

export interface TemplateStore<DataType> {
    data: DataType | null
    error: string | null
    loading: boolean
}

export interface TemplateStoreOutput<DataType, APIGetArgs> {
    selectors: {
        useData: () => TemplateStore<DataType>
    }
    effects: {
        getFx: Effect<APIGetArgs, DataType, Error>
    }
    events: {
        clearStore: Event<void>
    }
}

interface APIType<APIGetArgs, DataType> {
    get: (args: APIGetArgs) => Promise<DataType>
}

export interface Args<APIDataType, OutputDataType, APIGetArgs> {
    /**
     * Изначальное значение стора. Если не прокинуть, вставит дефольные значения
     */
    initialStore?: TemplateStore<TypeChoice<OutputDataType, APIDataType>>
    /**
     * Get-запрос
     */
    api: APIType<APIGetArgs, APIDataType>
    /**
     *
     * @param apiData Формат данных, приходящих в апи
     * @returns Препарированные данные
     */
    prepareData?: (apiData: APIDataType) => TypeChoice<OutputDataType, APIDataType>
    errorMessage?: (error: Error) => string
}
