import { LOGIN_ROUTE, publicRoutes } from '@app/routes/general-routes'
import { adminLinksModel } from '@entities/admin-links'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { userModel } from '../../entities/user'
import ContentLayout from '../../shared/ui/content-layout'
import { applicationsModel } from '@entities/applications'

const Router = () => {
    const {
        data: { isAuthenticated, user },
    } = userModel.selectors.useUser()
    const { data } = adminLinksModel.selectors.useData()
    const { settings } = settingsModel.selectors.useSettings()

    useEffect(() => {
        if (isAuthenticated) {
            adminLinksModel.effects.getFx()
            applicationsModel.effects.getUserDataApplicationsFx()
            applicationsModel.effects.getWorkerPosts()
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (user && settings) {
            menuModel.events.defineMenu({
                user,
                adminLinks: data,
                homeRoutes: settings['settings-home-page'].property['pages'] as string[],
            })
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
