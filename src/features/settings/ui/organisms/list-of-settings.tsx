import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import search from '@pages/settings/lib/search'
import { TFullSettingsModel } from '@pages/settings/model'
import { LocalSearch } from '@shared/ui/molecules'
import { ListWrapper } from '@ui/list/styles'
import React from 'react'
import { useRouteMatch } from 'react-router'

import styled from 'styled-components'

const ListOfSettingsWrapper = styled(ListWrapper)<{ open: boolean }>`
    height: 100%;
    padding: 16px;
    box-shadow: 2px 0 3px -3px var(--grey);
    z-index: 1;

    @media (max-width: 600px) {
        transition: 0.2s;
        box-shadow: none;
        width: ${({ open }) => (open ? '100%' : '0')};
        max-width: ${({ open }) => (open ? '100%' : '0')};
        min-width: 0;
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

type Props = {
    searchValue?: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    setSearchResult: React.Dispatch<React.SetStateAction<string[][] | null>>
    settingsConfig: TFullSettingsModel
}

const ListOfSettings = ({ setSearchValue, setSearchResult, settingsConfig }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    const handleSearch = <T,>(value: string, whereToSearch: T) =>
        search(value, whereToSearch as TFullSettingsModel, allRoutes)

    if (!allRoutes) return null

    return (
        <ListOfSettingsWrapper width="290px" open={!params?.id}>
            {/* <Title size={2} align="left" bottomGap>
                Настройки
            </Title> */}
            <LocalSearch
                whereToSearch={settingsConfig}
                placeholder="Поиск настроек"
                searchEngine={handleSearch}
                setExternalValue={setSearchValue}
                setResult={setSearchResult}
                validationCheck
                loadingOnType
            />
            {Object.keys(settingsConfig).map((name) => {
                return (
                    <PageLink
                        {...allRoutes[name]}
                        title={allRoutes[name].title.slice(11, allRoutes[name].title.length)}
                        key={name}
                        orientation="horizontal"
                        shadow={false}
                    />
                )
            })}
        </ListOfSettingsWrapper>
    )
}

export default ListOfSettings
