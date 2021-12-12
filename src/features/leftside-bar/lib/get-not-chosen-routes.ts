import { IRoute, IRoutes, privateRoutes } from '@app/routes/routes'

const getNotChosenRoutes = (ids: number[]): IRoutes => {
    return Object.values(privateRoutes).reduce((acc, route: IRoute) => {
        if (!ids.includes(route.id)) acc[route.id] = route

        return acc
    }, {})
}

export default getNotChosenRoutes
