import { Sex } from '@utility-types/sex'

const getRightGenderWord = (gender: Sex | undefined, maleWord: string, femaleWord: string) => {
    switch (gender) {
        case 'Female':
            return femaleWord
        default:
            return maleWord
    }
}

export default getRightGenderWord
