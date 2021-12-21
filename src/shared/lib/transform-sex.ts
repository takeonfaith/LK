import { Sex } from '@utility-types/sex'

const transformSex = (sex: Sex) => {
    return sex === 'Male' ? 'Мужской' : 'Женский'
}

export default transformSex
