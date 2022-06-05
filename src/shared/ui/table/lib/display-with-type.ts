import localizeDate from '@utils/localize-date'
import { ColumnType } from '../types'

const displayWithType = (value?: string, type?: ColumnType) => {
    switch (type) {
        case 'date':
            return localizeDate(value, 'numeric')
        case 'rub':
            return value + ' руб.'
        default:
            return value === undefined ? '-' : value
    }
}

export default displayWithType
