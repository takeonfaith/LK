import token from '@utils/token'
import { $api } from './config'
import { AdminLinks } from './model'

export const get = async () => {
    return (await $api.get<AdminLinks>(`?getAdminLinks&token=${token()}`)).data
}
