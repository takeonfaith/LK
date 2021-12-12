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
    Экзамен: EXAM,
    Зачет: TEST,
}

export function prepare(data: AcadPerformance[]): PreparedData {
    const result: PreparedData = {
        [EXAM]: [],
        [TEST]: [],
    }

    for (const item of data) {
        result[MATCHES[item.form]].push(item)
    }

    return result
}
