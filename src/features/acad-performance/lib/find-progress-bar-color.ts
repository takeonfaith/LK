import { IGrade } from '@api/model/acad-performance'
import { ColorsByGrade } from '@consts'

const findProgressBarColor = (grade: keyof IGrade): string => {
    return ColorsByGrade[grade] || ColorsByGrade.default
}

export default findProgressBarColor
