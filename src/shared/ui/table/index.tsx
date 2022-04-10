import { Align } from '@ui/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import React from 'react'
import styled from 'styled-components'
import { Body, Header } from './ui'

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
`

export interface ColumnProps {
    title: string
    field: string
    priority?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
    showFull?: boolean
    width?: string
    align?: Align
    search?: boolean
    render?: (value: any, obj: IndexedProperties) => ChildrenType
}

export interface TableProps {
    columns: ColumnProps[]
    data: Nullable<IndexedProperties[]>
    maxOnPage?: number
    onRowClick?: (obj: IndexedProperties) => void
    loading?: boolean
}

const Table = ({ columns, data, maxOnPage, onRowClick, loading = false }: TableProps) => {
    return (
        <TableWrapper>
            <Header columns={columns} />
            <Body loading={loading} onRowClick={onRowClick} columns={columns} data={data} maxOnPage={maxOnPage} />
        </TableWrapper>
    )
}

export default Table
