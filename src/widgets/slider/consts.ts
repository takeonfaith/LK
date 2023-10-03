import { Size } from '@shared/ui/types'

type SizeDictionary = Record<Size, string>

export const HEIGHTS: SizeDictionary = {
    small: '30px',
    middle: '44px',
    big: '68px',
}

export const RADIUSES: SizeDictionary = {
    small: '8px',
    middle: '10px',
    big: '16px',
}

export const FONT_SIZES: SizeDictionary = {
    small: '0.8rem',
    middle: '0.9rem',
    big: '1rem',
}

export const MOBILE_FONT_SIZES: SizeDictionary = {
    small: '0.65rem',
    middle: '0.75rem',
    big: '0.85rem',
}
