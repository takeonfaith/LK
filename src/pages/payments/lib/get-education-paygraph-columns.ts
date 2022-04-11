import { ColumnProps } from '@ui/table/types'

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
            priority: 'five',
            width: '110px',
        },
        {
            title: 'Дата начала',
            field: 'date_start',
            type: 'date',
            priority: 'five',
        },
        {
            title: 'План. дата окончания',
            field: 'date_plan',
            type: 'date',
            priority: 'six',
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
            priority: 'three',
        },
        {
            title: 'Оплачено',
            field: 'sum_pay',
            type: 'rub',
            priority: 'two',
        },
    ]
}

export default getEducationPaygraphColumns
