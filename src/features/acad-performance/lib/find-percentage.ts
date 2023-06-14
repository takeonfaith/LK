import { GradeByScore } from '@consts'
import { AcadPerformance } from '@api/model/acad-performance'

function findPercentage(data: AcadPerformance[], circleMode = 0): string {
    let counter = 0
    const totalLength = data.filter((el) => !!el.grade).length

    if (circleMode) {
        switch (circleMode) {
            case 0:
                data.forEach(({ grade }) => GradeByScore[grade] > 2 && counter++)
                break
            case 1:
                data.forEach(({ grade }) => GradeByScore[grade] === 5 && counter++)
                break
            case 2:
                data.forEach(({ grade }) => GradeByScore[grade] === 4 && counter++)
                break
            default:
                break
        }
    } else {
        data.forEach(({ grade }) => GradeByScore[grade] > 2 && counter++)
    }
    const perc = (+(counter / totalLength) * 100).toFixed(1)

    return isNaN(+perc) ? '0' : perc
}

export default findPercentage
