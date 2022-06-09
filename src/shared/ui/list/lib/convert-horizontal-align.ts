import { ModifiedAlign } from '..'

const convertHorizontalAlign = (align?: ModifiedAlign) => {
    switch (align) {
        case 'center':
            return 'center'
        case 'right':
            return 'flex-end'
        case 'evenly':
            return 'space-evenly'
    }
    return 'flex-start'
}

export default convertHorizontalAlign
