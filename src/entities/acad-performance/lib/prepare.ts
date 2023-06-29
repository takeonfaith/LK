import { AcadPerformance } from '@api/model/acad-performance'

const EXAM = 'exam'
const TEST = 'test'

export type PreparedData = Record<typeof EXAM | typeof TEST, AcadPerformance[]>

interface Matches {
    [key: string]: typeof EXAM | typeof TEST
}

const MATCHES: Matches = {
    'Курсовой проект': EXAM,
    'Курсовая работа': EXAM,
    'Дипломный проект': EXAM,
    'Дипломная работа': EXAM,
    'ГЭК. Защита ВКР': EXAM,
    Экзамен: EXAM,
    Практика: EXAM,
    'Дифференцированный зачет': EXAM,
    Зачет: TEST,
}

export function prepareData(data: AcadPerformance[]): PreparedData {
    const result: PreparedData = {
        [EXAM]: [],
        [TEST]: [],
    }

    for (const item of data) {
        result[MATCHES[item.exam_type]].push(item)
    }

    return result
}
