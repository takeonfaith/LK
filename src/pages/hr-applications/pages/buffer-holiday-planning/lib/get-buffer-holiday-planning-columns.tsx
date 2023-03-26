import localizeDate from '@shared/lib/localize-date'

import { ColumnProps } from '@ui/table/types'

export const getBufferHolidayPlanningColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Статус заявления',
            field: 'vacation',
            width: '200px',
            render: (value) => {
                return value.status.orderStatus
            },
        },
        {
            title: 'Период',
            field: 'vacation',
            align: 'center',
            render: (value) => {
                return `${localizeDate(value?.period?.startDate, 'numeric')} - ${localizeDate(
                    value?.period?.endDate,
                    'numeric',
                )}`
            },
        },
        // {
        //     title: 'Номер приказа',
        //     field: 'dismissalOrder',
        //     priority: 'one',
        //     align: 'center',
        //     render: (value) => value.orderNumber,
        // },
        // {
        //     title: 'Дата приказа',
        //     field: 'vacation',
        //     type: 'date',
        //     priority: 'one',
        //     align: 'center',
        //     render: (value) => localizeDate(value.status.orderDate, 'numeric'),
        // },
        // { title: 'Файл заявления', priority: 'one', field: 'file', type: 'file' },
    ]
}
