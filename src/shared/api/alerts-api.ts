import getToken from '@shared/lib/token'
import { $api } from './config'
import { Alert } from './model/alert'

export const getAlerts = async () => {
    return (await $api.get<Alert[]>(`?getAlerts&token=${getToken()}`)).data
}

export const readAlerts = () => {
    // return $api.get<Alert[]>(`?readAlerts&token=${getToken()}`)
    return true
}
