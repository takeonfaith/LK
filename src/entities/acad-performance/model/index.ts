import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'
import { prepare } from '../lib/prepare'
import mock from './mock.json'

export interface AcadPerformance {
    id: number
    name: string
    date: string
    grade: boolean
    teacher: string
    gradeId: string
    semestr: number
    course: number
    form: string
}

interface AcadPerformanceStore {
    data: NormalizedData | null
    error?: string
}

const defaultStore: AcadPerformanceStore = {
    data: null,
}

const useAcadPerformance = () => {
    return {
        data: useStore($acadPerformance).data,
        error: useStore($acadPerformance).error,
        loading: useStore(getAcadPerformanceFx.pending),
    }
}

interface FetchData {
    userId: string
    semestr: string
}

interface NormalizedData {
    [key: string]: AcadPerformance[]
}

const getAcadPerformanceFx = createEffect(({ userId, semestr }: FetchData): NormalizedData => {
    try {
        // TODO: Добавить получение даных с сервера, когда апи будет готово!

        return prepare(mock as AcadPerformance[])
    } catch (_) {
        throw new Error('Ошибка загрузки данных')
    }
})

const $acadPerformance = createStore<AcadPerformanceStore>(defaultStore)
    .on(getAcadPerformanceFx.doneData, (_, data) => ({
        data,
    }))
    .on(getAcadPerformanceFx.failData, (_, newData) => ({
        error: newData?.message,
        data: null,
    }))

export const selectors = {
    useAcadPerformance,
}

export const effects = {
    getAcadPerformanceFx,
}
