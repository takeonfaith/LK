import { Direction, Size } from '@ui/types'

const getImageSize = (orientation: Direction, size: Size) => {
    if (orientation === 'horizontal') {
        return size === 'small' ? '15px' : size === 'middle' ? '30px' : '45px'
    }

    return size === 'small' ? '30px' : size === 'middle' ? '35px' : '45px'
}

export default getImageSize
