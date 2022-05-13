import { IRoute, IRoutes } from '@app/routes/general-routes'

const findRoutesWidthConfig = (config: string[], allRoutes: IRoutes): IRoutes => {
    return config.reduce((acc, id) => {
        acc[id] = allRoutes[id]
        return acc
    }, {} as { [key: string]: IRoute })
}

export default findRoutesWidthConfig
