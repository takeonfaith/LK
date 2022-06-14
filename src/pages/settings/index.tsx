import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { ListOfSettings } from '@features/settings'
import ContentWrapper from '@ui/content-wrapper'
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { userModel } from '@entities/user'

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

// const SETTINGS_CONFIG = ['settings-home-page', 'settings-personal', 'settings-appearance', 'settings-security']

const SettingsPage = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { settings } = settingsModel.selectors.useSettings()

    const {
        data: { user },
    } = userModel.selectors.useUser()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    if (!allRoutes) return null

    return (
        <Wrapper>
            <ListOfSettings config={settings} />
            {/*<Switch>*/}
            {/*    {settings.map(({ name }) => {*/}
            {/*        return (*/}
            {/*            <Route path={allRoutes[name].path} key={name}>*/}
            {/*                <ContentWrapper>{allRoutes[name].Component()}</ContentWrapper>*/}
            {/*            </Route>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</Switch>*/}
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
