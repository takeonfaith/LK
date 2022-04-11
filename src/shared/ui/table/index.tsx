import React from 'react'
import styled from 'styled-components'
import useFilter from './lib/hooks/use-filter'
import { TableProps } from './types'
import { Body, Header, Search } from './ui'

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
`

const Table = ({ columns, data, maxOnPage, onRowClick, loading = false }: TableProps) => {
    const { search, setSearch, resultData, filter, setFilter } = useFilter(data)

    return (
        <TableWrapper>
            <Search search={search} setSearch={setSearch} />
            <Header columns={columns} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
            <Body
                loading={loading}
                onRowClick={onRowClick}
                filter={filter}
                columns={columns}
                data={resultData}
                maxOnPage={maxOnPage}
            />
        </TableWrapper>
    )
}

export default Table
