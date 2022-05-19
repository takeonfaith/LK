import { IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { FoundPages } from '@features/all-pages'
import search from '@features/all-pages/lib/search'
import LinksList from '@features/home/ui/organisms/links-list'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useState } from 'react'
import styled from 'styled-components'

const AllPagesWrapper = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    color: var(--text);
    @media (max-width: 600px) {
        padding: 10px;
    }
`

const AllPages = () => {
    const { visibleRoutes, allRoutes } = menuModel.selectors.useMenu()
    const [foundPages, setFoundPages] = useState<IRoutes | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')

    if (!visibleRoutes) return null

    return (
        <AllPagesWrapper>
            <Title size={2} align="left" bottomGap>
                Все разделы
            </Title>
            <LocalSearch
                placeholder="Поиск разделов"
                whereToSearch={allRoutes ?? {}}
                searchEngine={search}
                setResult={setFoundPages}
                setExternalValue={setSearchValue}
            />
            {searchValue.length === 0 && <LinksList doNotShow="all" align="left" links={visibleRoutes} />}
            <FoundPages pages={foundPages} />
        </AllPagesWrapper>
    )
}

export default AllPages
