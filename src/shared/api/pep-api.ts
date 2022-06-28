import { $api } from './config'
import token from '@utils/token'
import { ElectronicInteraction } from './model'

export const get = () => {
    return $api.get<ElectronicInteraction[]>(`?getPEPStatus&token=${token()}`)
}

export const set = () => {
    return $api.get(`?setPEPAccept&token=${token()}`)
}
