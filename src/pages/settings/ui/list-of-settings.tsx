import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { PageLink } from '@features/all-pages'
import { TFullSettingsModel } from '@pages/settings/model'
import { LocalSearch } from '@shared/ui/molecules'
import { ListWrapper } from '@ui/list/styles'
import React from 'react'
import { useRouteMatch } from 'react-router'

import styled from 'styled-components'
import search from '../lib/search'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { MEDIA_QUERIES } from '@shared/constants'

const ListOfSettingsWrapper = styled(ListWrapper)<{ open: boolean }>`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    padding: 8px;
    border-radius: var(--brLight);
    box-shadow: var(--schedule-shadow);
    margin-right: 20px;
    background: var(--content-block);

    ${MEDIA_QUERIES.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({ open }) => (open ? '100%' : '0')};
        max-width: ${({ open }) => (open ? '100%' : '0')};
        min-width: 0;
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

type Props = {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
    setSearchResult: React.Dispatch<React.SetStateAction<string[][] | null>>
    settingsConfig: TFullSettingsModel
}

const ListOfSettings = ({ settingsConfig, setSearchResult, setSearchValue }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { isMobile } = useCurrentDevice()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    const handleSearch = <T,>(value: string, whereToSearch: T) =>
        search(value, whereToSearch as TFullSettingsModel, allRoutes)

    if (!allRoutes) return null

    return (
        <ListOfSettingsWrapper width="250px" open={!params?.id}>
            <LocalSearch
                whereToSearch={settingsConfig}
                searchEngine={handleSearch}
                placeholder="Поиск"
                setExternalValue={setSearchValue}
                setResult={setSearchResult}
                validationCheck
                loadingOnType
            />
            {Object.keys(settingsConfig ?? {})?.map((name) => {
                if ((isMobile && name !== 'settings-customize-menu') || !isMobile) {
                    return (
                        <PageLink
                            {...allRoutes[name]}
                            title={allRoutes[name].title.slice(11, allRoutes[name].title.length)}
                            key={name}
                            orientation="horizontal"
                            shadow={false}
                        />
                    )
                }
            })}
        </ListOfSettingsWrapper>
    )
}

export default ListOfSettings
