import { SETTINGS_ROUTE, TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Icon } from '@features/all-pages'
import { Colors } from '@shared/consts'
import { Button, CenterPage, Error, Title } from '@shared/ui/atoms'
import List from '@shared/ui/list'
import React from 'react'
import { FiChevronLeft, FiSettings } from 'react-icons/fi'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router'
import styled from 'styled-components'
import SearchResultField from './fields/search-result-field'
import { TFullSettingsModel } from './model'
import SettingsFields from './settings-fields'
import SettingsSection from './settings-section'

const SettingsContentWrapper = styled.div<{ open: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: 0 var(--brLight) var(--brLight) 0;
    background: var(--scheduleBg);
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
    height: calc(100% - 60px);
    padding: 20px;
`

const SettingsHeader = styled.header`
    width: 100%;
    min-height: 60px;
    padding: 0 20px;
    box-shadow: 0px 2px 3px -3px var(--grey);
    background: var(--schedule);
    display: flex;
    border-radius: 0 var(--brLight) 0 0;
    align-items: center;
`

const TitleWrapper = styled.div`
    padding: 12px;
`

type Props = {
    searchValue: string
    searchResult: string[][] | null
    settingsConfig: TFullSettingsModel
}

const SettingsContent = ({ searchValue, searchResult, settingsConfig }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }
    const history = useHistory()

    if (!allRoutes) return null

    if (settingsConfig === undefined) {
        return null
    }

    const goBack = () => history.push(SETTINGS_ROUTE)

    const title = allRoutes[`settings-${params?.id}`]?.title.split('. ')[1] ?? ''

    return (
        <SettingsContentWrapper open={!!params?.id}>
            <SettingsHeader>
                <Title size={3} align="left">
                    {!!title && (
                        <Button
                            icon={<FiChevronLeft />}
                            minWidth="30px"
                            padding="0"
                            height="30px"
                            onClick={goBack}
                            background="transparent"
                            hoverBackground={Colors.grey.transparentAF}
                        />
                    )}
                    {searchValue ? `Результаты поиска по запросу "${searchValue}"` : title}
                </Title>
            </SettingsHeader>
            <SettingsContentStyled>
                <Switch>
                    {searchValue && <SearchResultField list={searchResult} />}
                    {Object.keys(settingsConfig).map((name) => {
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
                                                    <SettingsFields fields={fields} />
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
