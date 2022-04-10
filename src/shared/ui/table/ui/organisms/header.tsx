import { Input } from '@ui/atoms'
import { ColumnProps } from '@ui/table'
import useOnClickOutside from '@utils/hooks/use-on-click-outside'
import React, { useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { Column } from '../atoms'

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 700;
    font-size: 0.9em;

    .search-icon {
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
    }

    & > * + * {
        border-left: 1px solid var(--mild-theme);
    }

    @media (max-width: 1200px) {
        .five {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .four {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`

interface Props {
    columns: ColumnProps[]
}

const Header = ({ columns }: Props) => {
    const [searchMode, setSearchMode] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const ref = useRef<HTMLDivElement>(null)
    useOnClickOutside(ref, () => setSearchMode(null))
    return (
        <HeaderWrapper>
            {columns.map((column) => {
                console.log(column.title, column.width)

                return (
                    <Column
                        width={column.width}
                        title={column.title}
                        clickable={column.search}
                        align={column.search ? 'space-between' : column.align}
                        key={column.title}
                        className={column.priority?.toString() ?? 'one'}
                        onClick={() => {
                            setSearchMode(column.field)
                        }}
                        ref={searchMode === column.field ? ref : null}
                    >
                        {column.search && searchMode === column.field ? (
                            <Input
                                value={searchValue}
                                setValue={setSearchValue}
                                placeholder={column.title}
                                leftIcon={<FiSearch />}
                            />
                        ) : (
                            <>
                                {column.title}
                                {column.search && <FiSearch className="search-icon" />}
                            </>
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}

export default Header
