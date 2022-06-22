import { IRoute, IRoutes } from '@app/routes/general-routes'
import { teachersPrivateRoutes } from '@app/routes/teachers-routes'

const getNotChosenRoutes = (ids: number[], user: any): IRoutes => {
    return {}
    // Object.values(!user?.user?.subdivisions ? privateRoutes : teachersPrivateRoutes).reduce(
    //     (acc, route: IRoute) => {
    //         if (!ids.includes(route.id)) acc[route.id] = route

    //         return acc
    //     },
    //     {},
    // )
}

export default getNotChosenRoutes
