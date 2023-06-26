import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Icon } from '@features/all-pages'
import { CenterPage, Error, Title } from '@shared/ui/atoms'
import List from '@shared/ui/list'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Route, Switch, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import SearchResultField from './fields/search-result-field'
import { TFullSettingsModel } from './model'
import SettingsFields from './settings-fields'
import SettingsSection from './settings-section'
import { NameSettings } from '@entities/settings/model'

const SettingsContentWrapper = styled.div<{ open: boolean }>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    display: flex;

    @media (max-width: 768px) {
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

const SettingsContentStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

const TitleWrapper = styled.div`
    padding: 12px;

    @media (max-width: 768px) {
        padding: 0;
    }
`

type Props = {
    searchValue: string
    searchResult: string[][] | null
    settingsConfig: TFullSettingsModel
}

const SettingsContent = ({ searchValue, searchResult, settingsConfig }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    if (!allRoutes) return null

    if (settingsConfig === undefined) {
        return null
    }

    return (
        <SettingsContentWrapper open={!!params?.id}>
            <SettingsContentStyled>
                <Switch>
                    {searchValue && <SearchResultField list={searchResult} />}
                    {Object.keys(settingsConfig ?? {})?.map((name) => {
                        const sections = settingsConfig[name as keyof typeof settingsConfig]
                        const { path } = allRoutes[name]
                        return (
                            <Route path={path} key={path}>
                                <List direction="vertical" gap={12}>
                                    {!searchValue &&
                                        sections.map(({ title, fields }) => {
                                            return (
                                                <SettingsSection key={title}>
                                                    <TitleWrapper>
                                                        <Title size={4} align="left">
                                                            {title}
                                                        </Title>
                                                    </TitleWrapper>
                                                    <SettingsFields
                                                        fields={fields}
                                                        settingsName={name as NameSettings}
                                                    />
                                                </SettingsSection>
                                            )
                                        })}
                                </List>
                            </Route>
                        )
                    })}
                    <Route path={'/'}>
                        <CenterPage height="100%">
                            <Error
                                text="Ничего не выбрано"
                                image={
                                    <Icon color={'grey'} size={50}>
                                        <FiSettings />
                                    </Icon>
                                }
                            />
                        </CenterPage>
                    </Route>
                </Switch>
            </SettingsContentStyled>
        </SettingsContentWrapper>
    )
}

export default SettingsContent
