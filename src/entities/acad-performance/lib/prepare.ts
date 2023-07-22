import { AcadPerformance } from '@api/model/acad-performance'

// const EXAM = 'exam'
// const TEST = 'test'

export type PreparedAcadPerformanceData = Record<string, AcadPerformance[]>

// interface Matches {
//     [key: string]: typeof EXAM | typeof TEST
// }

// const MATCHES: Matches = {
//     'Курсовой проект': EXAM,
//     'Курсовая работа': EXAM,
//     'Дипломный проект': EXAM,
//     'Дипломная работа': EXAM,
//     'ГЭК. Защита ВКР': EXAM,
//     Экзамен: EXAM,
//     Практика: EXAM,
//     'Дифференцированный зачет': EXAM,
//     Зачет: TEST,
// }

export function prepareData(data: AcadPerformance[]): PreparedAcadPerformanceData {
    const result: PreparedAcadPerformanceData = {}

    for (const item of data) {
        if (result[item.exam_type]) {
            result[item.exam_type].push(item)
        } else {
            result[item.exam_type] = [item]
        }
    }

    return result
}
