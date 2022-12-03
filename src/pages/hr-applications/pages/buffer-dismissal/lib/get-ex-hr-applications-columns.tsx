import {
    ApplicationsConstants,
    hrApplicationsConstants,
    hrOrderConstants,
    hrOrderRegisterConstants,
} from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
type dataKey = 'orderDate' | 'orderNumber' | 'orderStatus' | 'registrationStatus'
const getExHrApplicationsColumns = (data?: any): ColumnProps[] => {
    return [
        //{ title: 'Название', field: 'title', priority: 'one', search: true, },

        {
            title: 'Должность',
            field: 'jobTitle',
            priority: 'one',
            width: '200px',
        },
        {
            title: 'Ставка',
            field: 'rate',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Структурное подразделение',
            field: 'subDivision',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Вид места работы',
            field: 'orderDate',
            type: 'date',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Дата увольнения',
            field: 'dismissalDate',
            priority: 'one',
            width: '200px',
        },
        {
            title: 'Номер приказа',
            priority: 'one',
            field: 'dismissalOrder',
            render: (value) => <span>{value.orderNumber}</span>,
        },
    ]
}

export default getExHrApplicationsColumns
