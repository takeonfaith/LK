import { $api } from './config'
import token from '@utils/token'

export const get = () => {
    return $api.get(`?getPEPStatus&token=${token()}`)
}

export const set = () => {
    return $api.get(`?setPEPAccept&token=${token()}`)
}
