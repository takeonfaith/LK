import { ColumnProps } from '@ui/table/types'
import React from 'react'
import styled from 'styled-components'
import localizeDate from '@utils/localize-date'

const ContentAlert = styled.div`
    cursor: pointer;
    display: flex;
    word-wrap: normal;
    white-space: normal;
    font-size: 1em;
    font-weight: 600;
`

const DateAlert = styled.div`
    white-space: normal;
`

const getAlertsColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'dateAlert',
            priority: 'one',
            width: '25.5%',
            render: (value) => <DateAlert>{localizeDate(value)}</DateAlert>,
        },
        {
            title: 'Тема сообщения',
            field: 'topicAlert',
            render: (value) => <ContentAlert>{value}</ContentAlert>,
        },
    ]
}

export default getAlertsColumns
