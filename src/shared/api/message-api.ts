import { $api } from '@api/config'

export const get = (id: string) => {
    const token = JSON.parse(localStorage.getItem('token') ?? 'null')?.token
    return $api.get(`?getMessages&token=${token}&id=${id}`)
}
