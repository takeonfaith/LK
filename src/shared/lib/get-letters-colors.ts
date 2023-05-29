import { Colors, IColorPalette, letterColorMatch } from '@shared/constants/consts'
import getNameFirstLetters from './get-name-first-letters'

const getLettersColors = (fullName: string, theme?: keyof typeof color) => {
    const firstLetters = getNameFirstLetters(fullName)
    const color: IColorPalette = Colors[letterColorMatch[firstLetters[0]]]

    return color?.[theme ?? 'main']
}

export default getLettersColors
