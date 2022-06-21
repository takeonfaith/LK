import { $api } from './config'
import getToken from '@utils/token'
import { ElectronicInteraction } from './model'

export const get = () => {
    return $api.get<ElectronicInteraction[]>(`?getPEPStatus&token=${getToken()}`)
}

export const set = () => {
    return $api.get(`?setPEPAccept&token=${getToken()}`)
}
