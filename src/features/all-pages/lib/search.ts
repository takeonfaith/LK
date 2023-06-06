import { IRoute, IRoutes } from '@app/routes/general-routes'
import normalizeString from '@utils/normalize-string'

const search = (value: string, routes: IRoutes) => {
    return Object.values(routes).reduce((acc, el) => {
        if (
            normalizeString(el.title).includes(normalizeString(value)) ||
            el?.keywords?.find((word) => normalizeString(word).includes(normalizeString(value)))
        ) {
            acc[el.id] = el
        }
        return acc
    }, {} as { [key: string]: IRoute })
}

export default search
