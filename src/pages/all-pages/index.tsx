import { IRoutes } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { contextMenuModel } from '@entities/context-menu'
import { menuModel } from '@entities/menu'
import { FoundPages } from '@features/all-pages'
import search from '@features/all-pages/lib/search'
import LinksList from '@features/home/ui/organisms/links-list'
import { Button } from '@ui/button'
import { Divider } from '@ui/divider'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import React, { useState } from 'react'
import { FiGrid, FiList, FiMoreVertical } from 'react-icons/fi'
import styled from 'styled-components'

const AllPagesWrapper = styled.div`
    padding: calc(var(--desktop-page-padding) + 10px);
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
            <Title size={2} align="left" width="100%" bottomGap>
                Все разделы
                {/* <List direction="horizontal" verticalAlign="center" width="fit-content" height="40px">
                    <Button icon={<FiGrid />} height="28px" width="45px" background={Colors.grey.transparentAF} />
                    <Button icon={<FiList />} height="28px" width="45px" background={Colors.grey.transparentAF} />
                    <Divider margin="0px 10px" direction="horizontal" />
                    <Button
                        width="45px"
                        height="28px"
                        icon={<FiMoreVertical />}
                        onClick={(e) => contextMenuModel.events.open({ e, content: 'Test', height: 110 })}
                        background={Colors.grey.transparentAF}
                    />
                </List> */}
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
