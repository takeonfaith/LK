import { $api } from '@api/config'
import { Payments } from './model'

export const get = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get<Payments>(`?getPayments&token=${token}`)
}
