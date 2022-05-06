import { IRoute, IRoutes } from '@app/routes/general-routes'

const getLinksForHome = (routes: IRoutes) =>
    Object.values(routes)
        .slice(0, 8)
        .reduce((acc, el) => {
            acc[el.id] = el
            return acc
        }, {} as { [key: string]: IRoute })

export default getLinksForHome
