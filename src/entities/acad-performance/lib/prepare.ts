import { AcadPerformance } from '../model'

interface PreparedData {
    [key: string]: AcadPerformance[]
}

interface Matches {
    [key: string]: string
}

const EXAM = 'exam'
const TEST = 'test'

const MATCHES: Matches = {
    'Курсовой проект': EXAM,
    'Дипломный проект': EXAM,
    Экзамен: EXAM,
    Практика: EXAM,
    'Дифференцированный зачет': EXAM,
    Зачет: TEST,
}

export function prepare(data: AcadPerformance[]): PreparedData {
    const result: PreparedData = {
        [EXAM]: [],
        [TEST]: [],
    }

    for (const item of data) {
        result[MATCHES[item.exam_type]].push(item)
    }

    return result
}
