import { $api } from '@api/config'
import { Payments } from './model'
import token from '@utils/token'

export const get = () => {
    return $api.get<Payments>(`?getPayments&token=${token}`)
}
