import { $api } from '@api/config'
import { Payments } from './model'
import token from '@utils/token'

export const get = () => {
    return $api.get<Payments>(`?getPayments&token=${token}`)
}

export const agreementSubmit = (id: string) => {
    return $api.get(`?signAgreement=${id}&token=${token}`)
}
