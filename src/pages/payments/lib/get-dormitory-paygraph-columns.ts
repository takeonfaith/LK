import { ColumnProps } from '@ui/table/types'
import capitalizeFirstLetter from '@utils/capitalize-first-letter'

import renderPayStatus from './render-pay-status'

const getDormitoryPaygraphColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Год',
            field: 'year',
            width: '25%',
            render: (_, row) => {
                const dateStart = row?.date_start
                if (!dateStart) {
                    return '-'
                }

                return new Date(dateStart).toLocaleDateString('ru', {
                    year: 'numeric',
                })
            },
        },
        {
            title: 'Месяц',
            field: 'month',
            width: '25%',

            render: (_, row) => {
                const dateStart = row?.date_start
                if (!dateStart) {
                    return '-'
                }

                const monthString = new Date(dateStart).toLocaleDateString('ru', {
                    month: 'long',
                })

                return capitalizeFirstLetter(monthString)
            },
        },
        {
            title: 'Оплатить до',
            field: 'date_plan',
            type: 'date',
            width: '25%',
            sort: true,
        },
        {
            title: 'Статус',
            field: 'sum_pay',
            width: '25%',
            render: renderPayStatus,
        },
    ]
}

export default getDormitoryPaygraphColumns
