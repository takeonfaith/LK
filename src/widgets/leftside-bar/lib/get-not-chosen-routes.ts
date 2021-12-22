import { IRoute, IRoutes, privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/techers-routes'

const getNotChosenRoutes = (ids: number[], user: any): IRoutes => {
    return Object.values(!user?.user?.subdivisions ? privateRoutes : teachersPrivateRoutes).reduce(
        (acc, route: IRoute) => {
            if (!ids.includes(route.id)) acc[route.id] = route

            return acc
        },
        {},
    )
}

export default getNotChosenRoutes
