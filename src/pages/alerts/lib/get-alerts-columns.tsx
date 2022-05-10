import { ColumnProps } from '@ui/table/types'
import React from 'react'
import styled from 'styled-components'
import localizeDate from '@utils/localize-date'

const Mir = styled.div`
    cursor: pointer;
    display: flex;
    word-wrap: normal;
    white-space: normal;
    font-size: 1em;
    font-weight: 600;
`

const getAlertsColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'dateAlert',
            priority: 'one',
            width: '227px',
            render: (value) => <>{localizeDate(value)}</>,
        },
        {
            title: 'Тема сообщения',
            field: 'topicAlert',
            render: (value) => <Mir>{value}</Mir>,
        },
    ]
}

export default getAlertsColumns
