import { IGrade } from '@api/model/acad-performance'
import { WidthByGrade } from '@consts'

const findProgressBarWidth = (grade: keyof IGrade) => {
    return WidthByGrade[grade] || WidthByGrade.default
}

export default findProgressBarWidth
