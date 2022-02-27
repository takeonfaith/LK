import { $api } from '@api/config'
import token from '@utils/token'

export const get = (id: string) => {
    return $api.get(`?getMessages&token=${token}&id=${id}`)
}
