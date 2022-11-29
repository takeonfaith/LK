import { ApplicationsConstants } from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getHrApplicationsColumns = (): ColumnProps[] => {
    return [
        //{ title: 'Название', field: 'title', priority: 'one', search: true, },

        {
            title: 'Статус заявления',
            field: 'status',
            priority: 'one',
            width: '160px',
            catalogs: [
                ...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value) => (
                <Message
                    type={value === 'Готово' ? 'success' : value === 'Отклонено' ? 'failure' : 'alert'}
                    title={value}
                    align="center"
                    width="100%"
                    icon={null}
                    maxWidth="150px"
                />
            ),
        },
        {
            title: 'Дата подписи',
            field: 'signDate',
            type: 'date',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Номер приказа',
            field: 'orderNumber',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Дата приказа',
            field: 'orderDate',
            type: 'date',
            priority: 'one',
            align: 'center',
            render: (value) => (
                <Message
                    type={value === 'Готово' ? 'success' : value === 'Отклонено' ? 'failure' : 'alert'}
                    title={value}
                    align="center"
                    width="100%"
                    icon={null}
                    maxWidth="150px"
                />
            ),
        },
        {
            title: 'Статус приказа',
            field: 'orderStatus',
            priority: 'one',
            width: '160px',
            catalogs: [
                ...(Object.values(ApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value) => (
                <Message
                    type={value === 'Готово' ? 'success' : value === 'Отклонено' ? 'failure' : 'alert'}
                    title={value}
                    align="center"
                    width="100%"
                    icon={null}
                    maxWidth="150px"
                />
            ),
        },
        { title: 'Файл заявления', priority: 'one', field: 'file', type: 'file' },
        { title: 'Примечание', field: 'registrationStatus', priority: 'one' },
    ]
}

export default getHrApplicationsColumns
