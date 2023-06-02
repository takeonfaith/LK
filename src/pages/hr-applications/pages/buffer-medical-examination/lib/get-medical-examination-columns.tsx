import localizeDate from '@shared/lib/localize-date'
import { Message } from '@shared/ui/message'
import React from 'react'
import { ColumnProps } from '@ui/table/types'

export const getMedicalExaminationHistoryColumns = (): ColumnProps[] => {
    return [
        // {
        //     title: 'Статус заявления',
        //     field: 'vacation',
        //     width: '200px',
        //     render: (value) => {
        //         return value.status.orderStatus
        //     },
        // },
        {
            title: 'Статус заявления',
            field: 'medicalExamination',
            width: '200px',
            render: (value) => {
                return (
                    <Message
                        type={
                            value.status.orderStatus === 'Согласовано'
                                ? 'success'
                                : value.status.orderStatus === 'На регистрации'
                                ? 'info'
                                : value.status.orderStatus === 'Не утвержден' ||
                                  value.status.orderStatus === 'Не создано'
                                ? 'failure'
                                : 'alert'
                        }
                        title={value.status.orderStatus}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="150px"
                    />
                )
            },
        },
        {
            title: 'Период',
            field: 'medicalExamination',
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
