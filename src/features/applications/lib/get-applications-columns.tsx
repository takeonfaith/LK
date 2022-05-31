import { ApplicationsConstants } from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
const getApplicationsColumns = (): ColumnProps[] => {
    return [
        { title: 'Запрос', field: 'requestTitle', priority: 'one', search: true, },
        { title: 'Дата', field: 'regDate', priority: 'two', sort: true },
        {
            title: 'Рег. номер',
            field: 'regNumber',
            priority: 'three',
            catalogs: [
                { id: 0, title: '3214141da' },
                { id: 1, title: '3214141db' },
            ],
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
                    maxWidth="150px"
                />
            ),
        },
        { title: 'Структурное подразделение, адрес', priority: 'five', field: 'structuralSubdivision', width: '360px' },
        { title: 'Примечание', field: 'notes', priority: 'five' },
    ]
}

export default getApplicationsColumns
