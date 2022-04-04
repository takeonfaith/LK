import { MessageType } from '@ui/types'

export const getColor = (type: MessageType) => {
    switch (type) {
        case 'success':
            return 'green'
        case 'failure':
            return 'red'
        case 'info':
            return 'blue'
        case 'alert':
            return 'orange'
        default:
            return 'blue'
    }
}
