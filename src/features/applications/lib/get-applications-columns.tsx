import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table'
import React from 'react'
const getApplicationsColumns = (): ColumnProps[] => {
    return [
        { title: 'Запрос', field: 'requestTitle', priority: 'one' },
        { title: 'Дата', field: 'regDate', priority: 'two' },
        { title: 'Рег. номер', field: 'regNumber', priority: 'three' },
        {
            title: 'Статус',
            field: 'status',
            priority: 'two',
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
