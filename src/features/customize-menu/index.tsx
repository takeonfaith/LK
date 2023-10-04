import { IRoute, IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Menu } from '@entities/menu/model'
import { settingsModel } from '@entities/settings'
import search from '@features/all-pages/lib/search'
import { LocalSearch } from '@shared/ui/molecules'
import React, { useState } from 'react'
import styled from 'styled-components'
import { CustomizeLeftsideBarItem } from '../../pages/settings/pages/customize-menu/ui/molecules'

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
    enabledList: keyof Omit<Menu, 'isOpen' | 'currentPage'>
    requiredList: string[]
    remove: (id: string, settings: settingsModel.Param, requiredList: string[]) => void
    add: (id: string, settings: settingsModel.Param, maxLength: number, requiredList: string[]) => void
}

const CustomizeMenu = ({ enabledList, requiredList, add, remove }: Props) => {
    const { settings } = settingsModel.selectors.useSettings()
    const menu = menuModel.selectors.useMenu()
    const { visibleRoutes } = menuModel.selectors.useMenu()
    const [searchResult, setSearchResult] = useState<IRoutes | null>(null)

    const enabled = menu[enabledList]

    if (!enabled || !visibleRoutes) return null

    const switchChosen = (id: string) => {
        if (enabled[id]) {
            remove(id, settings, requiredList)
        } else {
            add(id, settings, Object.keys(enabled).length, requiredList)
        }
    }

    return (
        <CustomizeMenuStyled>
            <LocalSearch
                placeholder="Поиск"
                whereToSearch={visibleRoutes}
                searchEngine={search}
                setResult={setSearchResult}
            />
            {Object.values(searchResult ?? visibleRoutes).map((el: IRoute, index) => {
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
