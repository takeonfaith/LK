import { $api } from '@api/config'
import getToken from '@utils/token'
import { LoadPayments } from './model'

export const get = () => {
    return $api.get<LoadPayments>(`?getPayments&token=${getToken()}`)
}

export const agreementSubmit = (id: string) => {
    return $api.get(`?signAgreement=${id}&token=${getToken()}`)
}

export const signContract = (contractId: string) => {
    return $api.get(`?signContract=${contractId}&token=${token()}`)
}
