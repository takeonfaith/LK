import { HOME_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { menuModel } from '@entities/menu'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

const PrivateRouter = () => {
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!allRoutes) return null

    return (
        <Switch>
            {Object.values(allRoutes).map(({ path, Component, isTemplate }) => {
                return <Route path={path} component={Component} exact={!isTemplate} key={path} />
            })}
            <Redirect from="/old" to={`${OLD_LK_URL}/index.php`} />
            <Redirect exact to={HOME_ROUTE} />
        </Switch>
    )
}

export default React.memo(PrivateRouter)
