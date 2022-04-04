import token from '@utils/token'
import { $api } from './config'
import { AdminLinks } from './model'

export const get = () => {
    return $api.get<AdminLinks>(`?getAdminLinks&token=${token()}`)
}
