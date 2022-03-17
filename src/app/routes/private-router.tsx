import { userModel } from '@entities/user'
import { hiddenRoutes, privateRoutes } from '@routes'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { teachersPrivateRoutes } from './techers-routes'

const PrivateRouter = () => {
    const { data } = userModel.selectors.useUser()
    const currentRoute = !data?.user?.subdivisions
        ? Object.assign({}, privateRoutes, hiddenRoutes)
        : teachersPrivateRoutes

    if (!data.user) return null

    return (
        <Switch>
            {Object.values(currentRoute).map(({ path, Component, isTemplate }) => (
                <Route path={path} component={Component} exact={!isTemplate} key={path} />
            ))}
            <Redirect to={'/home'} />
        </Switch>
    )
}

export default PrivateRouter
