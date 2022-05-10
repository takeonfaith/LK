import { $api } from '@api/config'
import token from '@utils/token'
import { Alert } from '@api/model/alert'

export const get = () => {
    return $api.get<Alert[]>(`?getAlerts&token=${token()}`)
}
