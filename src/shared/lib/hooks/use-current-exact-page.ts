import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { userModel } from '@entities/user'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teacher-routes'
import { IRoute, IRoutes } from '@app/routes/general-routes'

export type CurrentPagePairType = { currentPage: IRoute; exactCurrentPage: IRoute | null }

const useCurrentExactPage = (): CurrentPagePairType => {
    const history = useHistory()
    const { data } = userModel.selectors.useUser()

    const currentRoute: IRoutes = !data.user?.subdivisions
        ? { ...privateRoutes(), ...hiddenRoutes(data.user) }
        : { ...teachersPrivateRoutes(), ...teachersHiddenRoutes() }

    const [{ exactCurrentPage, currentPage }, setCurrentPage] = useState<CurrentPagePairType>({
        currentPage:
            Object.values(currentRoute).find((link: IRoute) => history.location.pathname.includes(link.path)) ??
            currentRoute[0],
        exactCurrentPage:
            Object.values(currentRoute).find((link: IRoute) => history.location.pathname.includes(link.path)) ?? null,
    })

    useEffect(() => {
        setCurrentPage({
            currentPage:
                Object.values(currentRoute).find((link: IRoute) => history.location.pathname.includes(link.path)) ??
                currentRoute[0],
            exactCurrentPage:
                Object.values(currentRoute).find((link: IRoute) => link.path.includes(history.location.pathname)) ??
                null,
        })
    }, [data.user?.subdivisions])

    useEffect(() => {
        return history.listen((location) => {
            setCurrentPage({
                currentPage:
                    Object.values(currentRoute).find((link: IRoute) => location.pathname.includes(link.path)) ??
                    currentRoute[0],
                exactCurrentPage:
                    Object.values(currentRoute).find((link: IRoute) => link.path.includes(location.pathname)) ?? null,
            })
        })
    }, [history, currentRoute])

    return {
        currentPage,
        exactCurrentPage,
    }
}

export default useCurrentExactPage
