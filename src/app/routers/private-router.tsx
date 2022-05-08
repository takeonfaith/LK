import { HOME_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import useIsAccessibleRoute from '@utils/hooks/use-is-accessible-route'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

const PrivateRouter = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()
    const isAccessible = useIsAccessibleRoute()

    if (!user) return null

    return allRoutes ? (
        <Switch>
            {Object.values(allRoutes).map(({ path, Component, isTemplate, title }) => {
                return isAccessible(title) && <Route path={path} component={Component} exact={!isTemplate} key={path} />
            })}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    ) : null
}

export default PrivateRouter
