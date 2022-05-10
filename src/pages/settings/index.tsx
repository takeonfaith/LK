import { menuModel } from '@entities/menu'
import { ListOfSettings } from '@features/settings'
import ContentWrapper from '@ui/content-wrapper'
import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;

    .settings-page {
        height: 90%;
        width: 100%;
        border-radius: 10px;
        overflow-y: auto;
        margin-top: 10px;
    }

    @media (max-width: 800px) {
        width: 100%;
        .settings-page {
            font-size: 0.8em;
        }
    }
`

const SETTINGS_CONFIG = ['settings-home-page', 'settings-personal', 'settings-appearance', 'settings-security']

const SettingsPage = () => {
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <Wrapper>
            <ListOfSettings config={SETTINGS_CONFIG} />
            <Switch>
                {SETTINGS_CONFIG.map((id) => {
                    return (
                        <Route path={allRoutes[id].path} key={id}>
                            <ContentWrapper>{allRoutes[id].Component()}</ContentWrapper>
                        </Route>
                    )
                })}
            </Switch>
            {/* <SliderPage
                pages={[
                    { title: 'Общие', content: <General /> },
                    { title: 'Внешний вид', content: <Appearance /> },
                    { title: 'Меню', content: <CustomizeMenu /> },
                    { title: 'Аккаунт', content: <Account /> },
                    { title: 'Безопасность', content: <Security /> },
                ]}
                className="settings-page"
                currentPage={currentPage}
            /> */}
        </Wrapper>
    )
}

export default SettingsPage
