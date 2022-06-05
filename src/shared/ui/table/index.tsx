import AddedElementsList from '@ui/added-elements-list'
import React from 'react'
import styled from 'styled-components'
import useFilter from './lib/hooks/use-filter'
import { TableProps } from './types'
import { Body, Header, Search, Footer } from './ui'

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--schedule-shadow);
    border-radius: var(--brLight);
    color: var(--text);
`

const Table = ({ columns, data, maxOnPage, onRowClick, footer, loading = false }: TableProps) => {
    const {
        sort,
        setSort,
        search,
        setSearch,
        resultData,
        filter,
        setFilter,
        filterList,
        setFilterList,
        onRemoveOne,
        onRemoveAll,
    } = useFilter(data)

    return (
        <TableWrapper>
            <AddedElementsList
                setList={setFilterList}
                padding="0 10px"
                list={filterList}
                onRemoveOne={onRemoveOne}
                onRemoveAll={onRemoveAll}
            />
            <Search search={search} setSearch={setSearch} />
            <Header
                sort={sort}
                setSort={setSort}
                columns={columns}
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
            />
            <Body
                loading={loading}
                onRowClick={onRowClick}
                filter={filter}
                columns={columns}
                data={resultData}
                maxOnPage={maxOnPage}
            />
            <Footer footer={footer} data={data} columns={columns} />
        </TableWrapper>
    )
}

export default Table
