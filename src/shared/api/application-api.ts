import { $api } from '@api/config'
import { Application } from './model'

export const get = () => {
    return $api.get<Application[]>(``)
}

// export const agreementSubmit = () => {
//     return $api.get(``)
// }
