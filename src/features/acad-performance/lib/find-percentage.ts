import { GradeByScore } from '@consts'
import { AcadPerformance } from '@entities/acad-performance/model'

function findPercentage(data: AcadPerformance[], circleMode = 0): number {
    let counter = 0

    if (circleMode) {
        data.forEach(
            ({ grade }) => GradeByScore[grade] > 2 + circleMode && GradeByScore[grade] <= 3 + circleMode && counter++,
        )
    } else {
        data.forEach(({ grade }) => GradeByScore[grade] > 2 && counter++)
    }

    const perc = (+(counter / data.length)).toPrecision(2)

    return +perc
}

export default findPercentage
