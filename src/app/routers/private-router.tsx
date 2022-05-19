import { HOME_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { useRender } from '@utils/hooks/use-render'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router'

const PrivateRouter = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!user || !allRoutes) return null

    return (
        <Switch>
            {Object.values(allRoutes).map(({ path, Component, isTemplate }) => {
                return <Route path={path} component={Component} exact={!isTemplate} key={path} />
            })}
            <Redirect to={HOME_ROUTE} />
        </Switch>
    )
}

export default React.memo(PrivateRouter)
