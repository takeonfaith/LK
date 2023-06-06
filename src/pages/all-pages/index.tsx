import { Groups, IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { FoundPages } from '@features/all-pages'
import getGroupPages, { routesOrder } from '@features/all-pages/lib/get-group-pages'
import search from '@features/all-pages/lib/search'
import LinksList from '@features/home/ui/organisms/links-list'
import { LocalSearch } from '@ui/molecules'
import { Title } from '@ui/title'
import { useMemo, useState } from 'react'
import React from 'react'
import Block from '@shared/ui/block'
import { CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'

// const AllPagesWrapper = styled.div`
//     padding: calc(var(--desktop-page-padding) + 10px);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     flex-wrap: wrap;
//     color: var(--text);
//     @media (max-width: 600px) {
//         padding: 10px;
//     }
// `

const AllPages = () => {
    const { visibleRoutes, allRoutes } = menuModel.selectors.useMenu()
    const [foundPages, setFoundPages] = useState<IRoutes | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const groupedPages = useMemo(() => getGroupPages(visibleRoutes), [visibleRoutes])
    if (!visibleRoutes) return null

    return (
        <CenterPage padding="10px">
            <Block orientation="vertical" maxWidth="750px" height="fit-content" gap="8px">
                <Title size={2} align="left" width="100%" bottomGap>
                    Все разделы
                    {/* <List direction="horizontal" verticalAlign="center" width="fit-content" height="40px">
                    <Button icon={<FiGrid />} height="28px" width="45px" background={Colors.grey.transparent3} />
                    <Button icon={<FiList />} height="28px" width="45px" background={Colors.grey.transparent3} />
                    <Divider margin="0px 10px" direction="horizontal" />
                    <Button
                        width="45px"
                        height="28px"
                        icon={<FiMoreVertical />}
                        onClick={(e) => contextMenuModel.events.open({ e, content: 'Test', height: 110 })}
                        background={Colors.grey.transparent3}
                    />
                </List> */}
                </Title>
                <LocalSearch
                    placeholder="Поиск разделов"
                    whereToSearch={allRoutes ?? {}}
                    searchEngine={search}
                    setResult={setFoundPages}
                    setExternalValue={setSearchValue}
                    validationCheck
                    loadingOnType
                />
                <Flex d="column" gap="24px">
                    {searchValue.length === 0 &&
                        Object.keys(groupedPages)
                            .sort((a, b) => {
                                return routesOrder[a as Groups] - routesOrder[b as Groups]
                            })
                            .map((group) => {
                                const links = groupedPages[group as Groups]
                                return (
                                    <LinksList title={group} key={group} doNotShow="all" align="left" links={links} />
                                )
                            })}
                </Flex>
                <FoundPages pages={foundPages} />
            </Block>
        </CenterPage>
    )
}

export default AllPages
