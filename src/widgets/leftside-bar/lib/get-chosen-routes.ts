import { IRoutes } from '@app/routes/general-routes'
import { privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/teachers-routes'

const getChosenRoutes = (ids: number[], user: any) => {
    return ids.reduce((acc: IRoutes, id) => {
        const privateRoute = !user?.user?.subdivisions ? privateRoutes[id] : teachersPrivateRoutes[id]

        if (privateRoute) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            acc[id] = privateRoute
        }

        return acc
    }, {})
}

export default getChosenRoutes
