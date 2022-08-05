import { Groups, IRoutes } from '@app/routes/general-routes'

type RoutesOrder = Record<Groups, number>

export const routesOrder: RoutesOrder = {
    Основное: 0,
    'Учебная деятельность': 1,
    'Финансы и документы': 2,
    'Находится в разработке': 3,
}

const getGroupPages = (routes: IRoutes | null) => {
    if (!routes) return {} as Record<Groups, IRoutes>

    const tabs = Object.values(routes).reduce((acc, route) => {
        const group = route?.group ? Groups[route.group] : Groups.OTHER

        if (!acc[group]) acc[group] = {}
        acc[group][route.id] = route
        return acc
    }, {} as Record<Groups, IRoutes>)

    return tabs
}

export default getGroupPages
