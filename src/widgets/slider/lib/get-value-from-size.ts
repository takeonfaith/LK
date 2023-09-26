import { Size } from '@shared/ui/types'

export const getValueFromSize = (dictionary: Record<Size, string>) => {
    return ({ size }: { size: Size }) => dictionary[size]
}
