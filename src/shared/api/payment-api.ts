import { $api } from '@api/config'
import token from '@utils/token'
import { LoadPayments } from './model'

export const get = () => {
    return $api.get<LoadPayments>(`?getPayments&token=${token}`)
}
