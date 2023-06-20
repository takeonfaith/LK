import { IGrade } from '@api/model/acad-performance'
import { ColorsByGrade } from '@consts'

const findProgressBarColor = (grade: keyof IGrade | undefined): string => {
    return !!grade ? ColorsByGrade[grade] || ColorsByGrade.default : 'var(--grey)'
}

export default findProgressBarColor
