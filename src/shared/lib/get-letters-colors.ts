import { Colors, IColorPalette, letterColorMatch } from '@consts'
import getNameFirstLetters from './get-name-first-letters'

const getLettersColors = (fullName: string) => {
    const firstLetters = getNameFirstLetters(fullName)
    const color: IColorPalette = Colors[letterColorMatch[firstLetters[0]]]

    return color.main
}

export default getLettersColors
