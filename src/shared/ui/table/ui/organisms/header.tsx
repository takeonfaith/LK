import Select, { SelectPage } from '@features/select'
import { Button } from '@ui/button'
import { ColumnProps, TableCatalogType } from '@ui/table/types'
import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Column, HeaderWrapper } from '../atoms'

interface Props {
    columns: ColumnProps[]
    search: { value: string; column: Nullable<ColumnProps> }
    filter: TableCatalogType
    setFilter: React.Dispatch<React.SetStateAction<TableCatalogType>>
    setSearch: React.Dispatch<React.SetStateAction<{ value: string; column: Nullable<ColumnProps> }>>
}

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Header = ({ columns, search, setSearch, filter, setFilter }: Props) => {
    return (
        <HeaderWrapper>
            {columns.map((column) => {
                return (
                    <Column
                        overflow={!!column.catalogs ? 'visible' : 'hidden'}
                        width={column.width}
                        title={column.title}
                        clickable={column.search}
                        align={column.search ? 'space-between' : column.align}
                        key={column.title}
                        className={column.priority?.toString() ?? 'one'}
                        onClick={() => {
                            if (column.search) {
                                setSearch((prev) => {
                                    prev.column = column
                                    return { ...prev }
                                })
                            }
                        }}
                    >
                        {!column.catalogs && column.title}
                        {!column.catalogs && column.search && (
                            <FiSearch
                                className="search-icon"
                                style={{
                                    color: column.field === search.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                }}
                            />
                        )}
                        {column.catalogs && (
                            <FilterWrapper>
                                <Select
                                    appearance={false}
                                    items={column.catalogs ?? []}
                                    setSelected={(page: any) =>
                                        setFilter((prev) => {
                                            if (page) {
                                                const result = { column, value: page }
                                                return result
                                            }
                                            return prev
                                        })
                                    }
                                    selected={filter?.value as SelectPage}
                                    placeholder={column.title}
                                />
                                {!!filter?.value && (
                                    <Button
                                        icon={<FiX />}
                                        background="transparent"
                                        onClick={() => setFilter(null)}
                                        width="fit-content"
                                    />
                                )}
                            </FilterWrapper>
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}

export default Header
