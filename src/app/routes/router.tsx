import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { userModel } from '../../entities/user'
import ContentLayout from '../../shared/ui/content-layout'
import { LOGIN_ROUTE, publicRoutes } from './routes'

const Router = () => {
    const {
        data: { isAuthenticated },
    } = userModel.selectors.useUser()

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
