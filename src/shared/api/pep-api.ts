import { $api } from './config'
import token from '@utils/token'
import { ElectronicInteraction } from './model'

export const get = async () => {
    return (await $api.get<ElectronicInteraction[]>(`?getPEPStatus&token=${token()}`)).data
}

export const set = () => {
    return $api.get(`?setPEPAccept&token=${token()}`)
}
