import { Groups, IRoutes } from '@app/routes/general-routes'

const getGroupPages = (routes: IRoutes | null) => {
    if (!routes) return {} as Record<Groups, IRoutes>

    return Object.values(routes).reduce((acc, route) => {
        const group = route?.group ? Groups[route.group] : Groups.OTHER

        if (!acc[group]) acc[group] = {}
        acc[group][route.id] = route
        return acc
    }, {} as Record<Groups, IRoutes>)
}

export default getGroupPages
