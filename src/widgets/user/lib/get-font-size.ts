import { Size } from '@ui/types'

const getFontSize = (size: Size) => {
    switch (size) {
        case 'small':
            return '0.65em'
        case 'middle':
            return '0.85em'
        default:
            return '1em'
    }
}

export default getFontSize
