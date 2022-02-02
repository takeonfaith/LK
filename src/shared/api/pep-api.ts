import { $api } from './config'

export const get = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getPEPStatus&token=${token}`)
}

export const set = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?setPEPAccept&token=${token}`)
}
