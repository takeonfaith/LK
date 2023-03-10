import { ColumnProps } from '@ui/table/types'

import renderPayStatus from './render-pay-status'

const getEducationPaygraphColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Год',
            field: 'year',
            search: true,
        },
        {
            title: 'Семестр',
            field: 'semestr',
            width: '110px',
            sort: true,
        },
        {
            title: 'Оплатить до',
            field: 'date_plan',
            type: 'date',
        },
        {
            title: 'Статус',
            field: 'sum_pay',
            render: renderPayStatus,
        },
    ]
}

export default getEducationPaygraphColumns
