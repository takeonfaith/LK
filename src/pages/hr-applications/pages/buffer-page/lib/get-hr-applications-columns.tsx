import { ApplicationsConstants } from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getHrApplicationsColumns = (): ColumnProps[] => {
    return [
        { title: 'Запрос', field: 'subject', priority: 'one', search: true },
        {
            title: 'Дата',
            field: 'created',
            priority: 'two',
            sort: true,
            type: 'date',
            align: 'center',
        },
        {
            title: 'ID задачи',
            field: 'num',
            priority: 'three',
            align: 'center',
        },
        {
            title: 'Статус',
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
        { title: 'Файл заявления', priority: 'five', field: 'response_div', width: '360px', type: 'file' },
        { title: 'Примечание', field: 'comment', priority: 'five' },
    ]
}

export default getHrApplicationsColumns
