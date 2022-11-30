import { IRoutes } from '@app/routes/general-routes'

const getNotChosenRoutes = (): IRoutes => {
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
