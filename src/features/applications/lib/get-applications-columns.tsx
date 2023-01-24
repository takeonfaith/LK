import { ApplicationsConstants } from '@entities/applications/consts'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'
import { ApplicationFileOutput } from '@api/model'
import { Button } from '@ui/button'
import { Colors } from '@consts'

const getApplicationsColumns = (): ColumnProps[] => {
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
            title: 'Рег. номер',
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
        { title: 'Структурное подразделение, адрес', priority: 'five', field: 'response_div', width: '360px' },
        { title: 'Примечание', field: 'comment', priority: 'five' },
        {
            title: 'Файлы',
            align: 'center',
            field: 'files_input',
            render: (value) =>
                !!value.length && (
                    <Button
                        onClick={() => downloadFiles(value)}
                        text={'Скачать'}
                        background="transparent"
                        textColor={Colors.green.main}
                        width={'100%'}
                    />
                ),
        },
    ]
}

const downloadFiles = (links: ApplicationFileOutput[]) => {
    links.map((item) => {
        const a = document.createElement('a')
        a.href = item.url
        a.download = item.name
        a.target = '_blank'
        a.click()
        a.remove()
    })
}

export default getApplicationsColumns
