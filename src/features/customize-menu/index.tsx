import React, { useState } from 'react'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { Title } from '@ui/title'
import { CustomizeLeftsideBarItem } from '../../pages/settings/pages/customize-menu/ui/molecules'
import { LocalSearch } from '@shared/ui/molecules'
import search from '@features/all-pages/lib/search'
import { Menu } from '@entities/menu/model'
import styled from 'styled-components'

const CustomizeMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`

type Props = {
    title: string
    enabledList: keyof Omit<Menu, 'isOpen' | 'currentPage'>
    requiredList: string[]
    remove: (id: string, settings: settingsModel.Param, requiredList: string[]) => void
    add: (id: string, settings: settingsModel.Param, maxLength: number, requiredList: string[]) => void
}

const CustomizeMenu = ({ title, enabledList, requiredList, add, remove }: Props) => {
    const { settings } = settingsModel.selectors.useSettings()
    const menu = menuModel.selectors.useMenu()
    const { allRoutes } = menuModel.selectors.useMenu()
    const [searchResult, setSearchResult] = useState<IRoutes | null>(null)

    const enabled = menu[enabledList]

    if (!enabled || !allRoutes) return null

    const switchChosen = (id: string) => {
        if (enabled[id]) {
            remove(id, settings, requiredList)
        } else {
            add(id, settings, Object.keys(enabled).length, requiredList)
        }
    }

    return (
        <CustomizeMenuStyled>
            <Title size={2} align="left" bottomGap>
                {title}
            </Title>
            <LocalSearch
                placeholder="Поиск"
                whereToSearch={allRoutes}
                searchEngine={search}
                setResult={setSearchResult}
            />
            {Object.values(searchResult ?? allRoutes).map((el: IRoute, index) => {
                return (
                    <CustomizeLeftsideBarItem
                        {...el}
                        key={index}
                        chosen={!!enabled[el.id]}
                        switchMenuItem={switchChosen}
                    />
                )
            })}
        </CustomizeMenuStyled>
    )
}

export default CustomizeMenu
