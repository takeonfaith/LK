import { adminLinksModel } from '@entities/admin-links'
import { LOGIN_ROUTE, publicRoutes } from '@routes'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { userModel } from '../../entities/user'
import ContentLayout from '../../shared/ui/content-layout'

const Router = () => {
    const {
        data: { isAuthenticated },
    } = userModel.selectors.useUser()

    useEffect(() => {
        if (isAuthenticated) {
            adminLinksModel.effects.getAdminLinksFx()
        }
    }, [isAuthenticated])

    return isAuthenticated ? (
        <Switch>
            <Route path="/" component={ContentLayout} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }, i) => {
                return <Route path={path} component={Component} exact={true} key={i} />
            })}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default Router
