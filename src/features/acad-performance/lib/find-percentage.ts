import { IGrade } from '@api/model/acad-performance'
import { AcadPerformance } from '@entities/acad-performance/model'

const GRADE: IGrade = {
    Зачтено: 5,
    Отлично: 5,
    Хорошо: 4,
    Удовлетворительно: 3,
    Неудовлетворительно: 2,
}

function findPercentage(data: AcadPerformance[], circleMode = 0): number {
    let counter = 0

    if (circleMode) {
        data.forEach(({ grade }) => GRADE[grade] > 2 + circleMode && GRADE[grade] <= 3 + circleMode && counter++)
    } else {
        data.forEach(({ grade }) => GRADE[grade] > 2 && counter++)
    }

    const perc = (counter / data.length).toPrecision(2)

    return +perc
}

export default findPercentage
