import { Size } from '@shared/ui/types'

type SizeDictionary = Record<Size, string>

export const HEIGHTS: SizeDictionary = {
    small: '30px',
    middle: '44px',
    big: '68px',
}

export const RADIUSES: SizeDictionary = {
    small: '8px',
    middle: '12px',
    big: '16px',
}

export const FONT_SIZES: SizeDictionary = {
    small: '0.8rem',
    middle: '0.9rem',
    big: '1rem',
}
