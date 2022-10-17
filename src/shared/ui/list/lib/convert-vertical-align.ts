import { VerticalAlign } from '@ui/types'

const convertVerticalAlign = (align?: VerticalAlign) => {
    switch (align) {
        case 'center':
            return 'center'
        case 'bottom':
            return 'flex-end'
    }
    return 'flex-start'
}

export default convertVerticalAlign
