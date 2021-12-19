import { acadPerformanceApi } from '@api'
import { IGrade } from '@api/model/acad-performance'
import { createEffect, createStore } from 'effector'
import { useStore } from 'effector-react'
import { prepare } from '../lib/prepare'

export interface AcadPerformance {
    bill_num: string
    bill_type: string
    chair: string
    course: string
    doc_type: string
    exam_date: string
    exam_time: string
    exam_type: string
    grade: keyof IGrade
    id: string
    name: string
    teacher: string
    ticket_num: string
}

interface AcadPerformanceStore {
    data: NormalizedData | null
    error: string | null
}

const defaultStore: AcadPerformanceStore = {
    data: null,
    error: null,
}

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

const $acadPerformance = createStore<AcadPerformanceStore>(defaultStore)
    .on(getAcadPerformanceFx.doneData, (_, data) => ({
        data,
        error: null,
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
