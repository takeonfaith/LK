import { Size } from '@ui/types'

const getWidth = (size: Size) => {
    switch (size) {
        case 'small':
            return '82px'
        case 'middle':
            return '90px'
        default:
            return '100px'
    }
}

export default getWidth
