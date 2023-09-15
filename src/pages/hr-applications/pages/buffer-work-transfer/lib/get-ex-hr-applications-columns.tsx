import { hrApplicationsConstants, hrOrderConstants } from '@entities/applications/consts'
//import localizeDate from '@shared/lib/dates/localize-date'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getExHrApplicationsColumns = (): ColumnProps[] => {
    return [
        //{ title: 'Название', field: 'title', priority: 'one', search: true, },

        {
            title: 'Должность, Подразделение',
            field: 'jobDivision',
            priority: 'one',
            width: '200px',
        },
        {
            title: 'Статус заявления',
            field: 'status',
            priority: 'one',
            width: '200px',
            catalogs: [
                ...(Object.values(hrApplicationsConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value) => (
                <Message
                    type={
                        value === 'Согласовано'
                            ? 'success'
                            : value === 'Не согласовано' || value === 'Не создано'
                            ? 'failure'
                            : 'alert'
                    }
                    title={value}
                    align="center"
                    width="100%"
                    icon={null}
                    maxWidth="150px"
                />
            ),
        },
        {
            title: 'Дата заявления',
            field: 'creationDate',
            type: 'date',
            priority: 'one',
            align: 'center',
        },
        {
            title: 'Номер приказа',
            field: 'dismissalOrder',
            priority: 'one',
            align: 'center',
            render: (value) => value.orderNumber,
        },
        {
            title: 'Дата приказа',
            field: 'dismissalOrder',
            priority: 'one',
            align: 'center',
            // render: (value) => localizeDate(value.orderDate, 'numeric'),
            render: (value) => value.formatedOrderDate,
        },
        {
            title: 'Статус приказа',
            field: 'dismissalOrder',
            priority: 'one',
            width: '220px',
            catalogs: [...(Object.values(hrOrderConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
            render: (value, data) => {
                if (!value.orderStatus) return null
                const title = value.orderStatus + data.dismissalOrder.registrationStatus
                return (
                    <Message
                        type={
                            value.orderStatus === 'Подписан'
                                ? 'success'
                                : value.orderStatus === 'Не создан'
                                ? 'failure'
                                : 'alert'
                        }
                        title={title}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="220px"
                    />
                )
            },
        },
        { title: 'Файл заявления', priority: 'one', field: 'file', type: 'file' },
        // {
        //     title: 'Статус регистрации приказа',
        //     field: 'dismissalOrder',
        //     priority: 'one',

        //     catalogs: [
        //         ...(Object.values(hrOrderRegisterConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
        //     ],
        //     render: (value, elements) =>
        //         elements.dismissalOrder.orderStatus == 'Подписан' && (
        //             <Message
        //                 type={
        //                     value.registrationStatus === 'Зарегистрирован'
        //                         ? 'success'
        //                         : value.registrationStatus === 'Не зарегистрирован'
        //                         ? 'failure'
        //                         : 'alert'
        //                 }
        //                 title={value.registrationStatus}
        //                 align="center"
        //                 width="100%"
        //                 icon={null}
        //                 maxWidth="150px"
        //             />
        //         ),
        // },
    ]
}

export default getExHrApplicationsColumns
