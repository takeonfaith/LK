import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { privateRoutes } from '@routes'
import { userModel } from '@entities/user'
import { teachersPrivateRoutes } from './techers-routes'

const PrivateRouter = () => {
    const { data } = userModel.selectors.useUser()
    return (
        <Switch>
            {Object.values(!data?.user?.subdivisions ? privateRoutes : teachersPrivateRoutes).map(
                ({ path, Component }) => (
                    <Route path={path} component={Component} exact key={path} />
                ),
            )}
            <Redirect to={'/home'} />
        </Switch>
    )
}

export default PrivateRouter
