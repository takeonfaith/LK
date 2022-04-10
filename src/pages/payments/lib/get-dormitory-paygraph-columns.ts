import { ColumnProps } from '@ui/table'
import localizeDate from '@utils/localize-date'

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
            render: (value) => localizeDate(value, 'numeric'),
            priority: 'five',
        },
        {
            title: 'План. дата окончания',
            field: 'date_plan',
            render: (value) => localizeDate(value, 'numeric'),
            priority: 'six',
        },
        {
            title: 'Дата окончания',
            field: 'date_end',
            render: (value) => localizeDate(value, 'numeric'),
            priority: 'five',
        },
        {
            title: 'Сумма по прайсу',
            field: 'sum_price',
            render: (value) => value + ' руб.',
            priority: 'four',
        },
        {
            title: 'Cумма к оплате',
            field: 'sum',
            render: (value) => value + ' руб.',
            priority: 'three',
        },
        {
            title: 'Оплачено',
            field: 'sum_pay',
            render: (value) => value + ' руб.',
            priority: 'two',
        },
    ]
}

export default getDormitoryPaygraphColumns
