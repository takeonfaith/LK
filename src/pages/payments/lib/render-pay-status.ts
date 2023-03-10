import { ColumnProps } from '@ui/table/types'
import displayWithType from '@ui/table/lib/display-with-type'

const renderPayStatus: ColumnProps['render'] = (_, row) => {
    const toPay = Number(row?.sum) || Number(row?.sum_price)
    const paid = Number(row?.sum_pay)

    // Check if NaN
    if ((!toPay && toPay !== 0) || (!paid && paid !== 0)) {
        return '-'
    }

    const diff = toPay - paid

    if (diff <= 0) {
        return 'Оплачено'
    }

    return `Ожидает оплаты (${displayWithType(String(diff), 'rub')})`
}

export default renderPayStatus
