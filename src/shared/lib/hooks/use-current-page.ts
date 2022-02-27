/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { IRoute, privateRoutes } from '@app/routes/routes'
import { userModel } from '@entities/user'
import { teachersPrivateRoutes } from '@app/routes/techers-routes'

const useCurrentPage = () => {
    const history = useHistory()
    const { data } = userModel.selectors.useUser()

    const currentRoute = !data.user?.subdivisions ? privateRoutes : teachersPrivateRoutes

    const [currentPage, setCurrentPage] = useState<IRoute>(
        Object.values(currentRoute).find((link: IRoute) => history.location.pathname.includes(link.path)) ??
            currentRoute[0],
    )

    useEffect(() => {
        setCurrentPage(
            Object.values(currentRoute).find((link: IRoute) => history.location.pathname.includes(link.path)) ??
                currentRoute[0],
        )
    }, [data.user?.subdivisions])

    useEffect(() => {
        return history.listen((location) => {
            setCurrentPage(
                Object.values(currentRoute).find((link: IRoute) => location.pathname.includes(link.path)) ??
                    currentRoute[0],
            )
        })
    }, [history, currentRoute])

    return currentPage
}

export default useCurrentPage
