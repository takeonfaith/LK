import { ColumnProps } from '@ui/table/types'

const getDormitoryPaygraphColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Год',
            field: 'year',
            search: true,
        },
        {
            title: 'Дата начала',
            field: 'date_start',
            type: 'date',
            priority: 'five',
            sort: true,
        },
        {
            title: 'План. дата окончания',
            field: 'date_plan',
            type: 'date',
            priority: 'five',
            sort: true,
        },
        {
            title: 'Дата окончания',
            field: 'date_end',
            type: 'date',
            priority: 'five',
        },
        {
            title: 'Cумма к оплате',
            field: 'sum',
            type: 'rub',
            priority: 'one',
        },
        {
            title: 'Оплачено',
            field: 'sum_pay',
            type: 'rub',
            priority: 'one',
        },
    ]
}

export default getDormitoryPaygraphColumns
