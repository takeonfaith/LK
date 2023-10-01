import { LOGIN_ROUTE, publicRoutes } from '@app/routes/general-routes'
import { adminLinksModel } from '@entities/admin-links'
import { applicationsModel } from '@entities/applications'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { loadDivisions } from '@pages/hr-applications/model/divisions'
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ContentLayout from 'widgets/content-layout'
import { userModel } from '../../entities/user'

const Router = () => {
    const {
        data: { isAuthenticated, user },
    } = userModel.selectors.useUser()

    const { data } = adminLinksModel.selectors.useData()
    const { settings } = settingsModel.selectors.useSettings()

    useEffect(() => {
        if (isAuthenticated) {
            // TODO: add custom event for all effects/events
            // setTimeout(() => {
            //     setDelayedAuth(true)
            // }, 1000)
            applicationsModel.effects.getUserDataApplicationsFx()
            if (user?.user_status === 'staff') {
                adminLinksModel.effects.getFx()
                applicationsModel.effects.getWorkerPosts()
                loadDivisions()
            }
        }
    }, [isAuthenticated, user])

    useEffect(() => {
        if (user) {
            if (!settings) settingsModel.effects.getLocalSettingsFx(user.id)
            else {
                menuModel.events.defineMenu({
                    user,
                    adminLinks: data,
                    homeRoutes: settings['settings-home-page'].property['pages'] as string[],
                })
            }
        }
    }, [user, data, settings])

    return isAuthenticated ? (
        <ContentLayout />
    ) : (
        <Suspense fallback={null}>
            <Switch>
                {publicRoutes.map(({ path, Component }, i) => {
                    return <Route path={path} component={Component} exact={true} key={i} />
                })}
                <Redirect exact to={LOGIN_ROUTE} />
            </Switch>
        </Suspense>
    )
}

export default Router
