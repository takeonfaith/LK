import { User } from '@api/model'
import { IRoutes } from '@app/routes/general-routes'
import { privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/teacher-routes'

interface UserData {
    user: User | null
    isAuthenticated: boolean | null
    savePassword: boolean
}

const getChosenRoutes = (ids: string[], user: UserData): IRoutes => {
    return ids.reduce((acc: IRoutes, id) => {
        const privateRoute = !user?.user?.subdivisions ? privateRoutes()[id] : teachersPrivateRoutes()[id]

        if (privateRoute) {
            acc[id] = privateRoute
        }

        return acc
    }, {})
}

export default getChosenRoutes
