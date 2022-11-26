import { ApplicationsConstants } from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getHrApplicationsColumns = (): ColumnProps[] => {
    return [
        { title: 'Название', field: 'subject', priority: 'one', search: true },

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
            field: 'num',
            type: 'date',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Номер приказа',
            field: 'num',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Дата приказа',
            field: 'num',
            type: 'date',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Статус приказа',
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
        { title: 'Файл заявления', priority: 'one', field: 'response_div', width: '360px', type: 'file' },
        { title: 'Примечание', field: 'comment', priority: 'one' },
    ]
}

export default getHrApplicationsColumns
