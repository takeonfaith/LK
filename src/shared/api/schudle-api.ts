import { $api } from '@api/config'

export const get = () => {
    // Can't use $api, because other origin
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getSchedule&token=${token}`)
}

export const getSession = () => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getSchedule&session=1&token=${token}`)
}
