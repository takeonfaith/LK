import { Error } from '@ui/error'
import { Loading } from '@ui/loading'
import Pagination from '@ui/pagination'
import { TableCatalogType, TableProps } from '@ui/table/types'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from '../molecules'
import { Divider } from '@shared/ui/divider'

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .page-indicator {
        width: 100px;
        background: var(--theme-1);
        padding: 3px;
        border-radius: var(--brLight);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9em;
        font-weight: 600;
    }
`

const LoadingWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    img {
        width: 35px;
        height: 35px;
    }
`

const PaginationWrapper = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Body = ({ data, loading, columns, maxOnPage, onRowClick, filter }: TableProps & { filter: TableCatalogType }) => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pages = Math.ceil((data?.length ?? 0) / (maxOnPage ?? 1)) - 1
    const result = maxOnPage ? data?.slice(currentPage * maxOnPage, (currentPage + 1) * maxOnPage) : data

    useEffect(() => {
        setCurrentPage(0)
    }, [filter])

    return !loading ? (
        <BodyWrapper>
            {result?.map((el, i) => {
                return <Row onRowClick={onRowClick} columns={columns} el={el} key={i} index={i} />
            })}
            {!result?.length && <Error text="Нет данных" />}
            {pages > 0 && <Divider margin="0" width="100%" />}
            <PaginationWrapper>
                <Pagination
                    pages={pages}
                    condition={!!maxOnPage && !!result?.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </PaginationWrapper>
        </BodyWrapper>
    ) : (
        <LoadingWrapper>
            <Loading />
        </LoadingWrapper>
    )
}

export default Body
