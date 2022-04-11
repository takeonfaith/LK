import { Input } from '@ui/atoms'
import { ColumnProps, ColumnType } from '@ui/table/types'
import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { Button } from '@ui/button'
import styled from 'styled-components'

const SearchWrapper = styled.div<{ closed: boolean }>`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({ closed }) => (closed ? '0px' : '10px')};
    width: 100%;
    height: ${({ closed }) => (closed ? '0px' : '60px')};
    opacity: ${({ closed }) => (closed ? '0' : '1')};
    visibility: ${({ closed }) => (closed ? 'hidden' : 'visible')};
`

interface Props {
    search: { value: string; column: Nullable<ColumnProps> }
    setSearch: React.Dispatch<
        React.SetStateAction<{
            value: string
            column: Nullable<ColumnProps>
        }>
    >
}

const getType = (type?: ColumnType) => {
    switch (type) {
        case 'date':
            return 'date'
        case 'rub':
            return 'number'
        default:
            return 'text'
    }
}

const Search = ({ search, setSearch }: Props) => {
    const handleCloseSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        e.preventDefault()
        setSearch((prev) => {
            prev.value = ''
            prev.column = null
            return { ...prev }
        })
    }

    return (
        <SearchWrapper closed={!search.column}>
            <Input
                value={search.value}
                setValue={(value: string) =>
                    setSearch((prev) => {
                        prev.value = value
                        return { ...prev }
                    })
                }
                width="100%"
                type={getType(search.column?.type)}
                placeholder={search.column?.title}
                leftIcon={<FiSearch />}
                minWidth={'auto'}
            />
            <Button icon={<FiX />} background="transparent" onClick={(e) => handleCloseSearch(e)} />
        </SearchWrapper>
    )
}

export default Search
