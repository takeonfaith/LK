import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { userModel } from '@entities/user'
import { hiddenRoutes, privateRoutes } from '@routes'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { hiddenTeacherRoutes, teachersPrivateRoutes } from './techers-routes'

const PrivateRouter = () => {
    const { data } = userModel.selectors.useUser()
    const currentRoute = !data?.user?.subdivisions
        ? Object.assign({}, privateRoutes, hiddenRoutes)
        : Object.assign({}, teachersPrivateRoutes, hiddenTeacherRoutes)
    const { data: dataVerification } = teacherDateVerificationModel.selectors.useTeacherDataVerification()
    const isAccessibleRoute = (title: string) =>
        (title === 'Скачать соглашения' && !!dataVerification?.links.length) || title !== 'Скачать соглашения'

    if (!data.user) return null
    //TODO: fix this s**t
    return (
        <Switch>
            {Object.values(currentRoute).map(
                ({ path, Component, isTemplate, title }) =>
                    isAccessibleRoute(title) && (
                        <Route path={path} component={Component} exact={!isTemplate} key={path} />
                    ),
            )}
            <Redirect to={'/home'} />
        </Switch>
    )
}

export default PrivateRouter
