import { $api } from '@api/config'

export const get = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getPayments&token=${token}`)
}
