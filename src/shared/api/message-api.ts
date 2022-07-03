import { $api } from '@api/config'
import getToken from '@utils/token'

export const get = (id: string) => {
    return $api.get(`?getMessages&token=${getToken()}&id=${id}`)
}
