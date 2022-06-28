import { IRoute, IRoutes } from '@app/routes/general-routes'
import normalizeString from '@utils/normalize-string'

const search = (value: string, routes: IRoutes) => {
    return Object.values(routes).filter((route: IRoute) =>
        normalizeString(route.title).includes(normalizeString(value)),
    )
}

export default search
