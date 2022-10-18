import { acadPerformanceApi } from '@api'
import { AcadPerformance } from '@api/model/acad-performance'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react/compat'
import { prepare } from '../lib/prepare'
import { createEvent } from 'effector'

interface AcadPerformanceStore {
    data: NormalizedData | null
    error: string | null
}

const DEFAULT_STORE: AcadPerformanceStore = {
    data: null,
    error: null,
}

const clearStore = createEvent()

const useAcadPerformance = () => {
    return {
        data: useStore($acadPerformance).data,
        error: useStore($acadPerformance).error,
        loading: useStore(getAcadPerformanceFx.pending),
    }
}

interface FetchData {
    semestr: string
}

interface NormalizedData {
    [key: string]: AcadPerformance[]
}

const getAcadPerformanceFx = createEffect(async ({ semestr }: FetchData): Promise<NormalizedData> => {
    try {
        const data = (await acadPerformanceApi.get(semestr)).data

        return prepare(data.academicPerformance)
    } catch (_) {
        throw new Error('Ошибка загрузки данных')
    }
})

const $acadPerformance = createStore<AcadPerformanceStore>(DEFAULT_STORE)
    .on(getAcadPerformanceFx.doneData, (_, data) => ({
        data,
        error: null,
    }))
    .on(getAcadPerformanceFx.failData, (_, newData) => ({
        error: newData?.message,
        data: null,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useAcadPerformance,
}

export const effects = {
    getAcadPerformanceFx,
}

export const events = {
    clearStore,
}
