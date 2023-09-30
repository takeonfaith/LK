import { GradeByScore } from '@shared/constants'
import { AcadPerformance } from '@api/model/acad-performance'

type Percentage = {
    5: number
    4: number
    3: number
    2: number
}

function findPercentage(data: AcadPerformance[]): Percentage {
    const result: Percentage = { 5: 0, 4: 0, 3: 0, 2: 0 }
    const totalLength = data.filter((el) => !!el.grade && el.exam_type !== 'Зачет').length

    data.forEach(({ grade, exam_type }) => {
        if (exam_type !== 'Зачет' && grade !== undefined) {
            result[GradeByScore[grade] as keyof Percentage]++
        }
    })

    if (totalLength === 0) return result

    return Object.keys(result).reduce((acc, key) => {
        acc[+key as keyof Percentage] = result[+key as keyof Percentage] / totalLength
        return acc
    }, {} as Percentage)
}

export default findPercentage
