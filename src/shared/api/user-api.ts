import { $api } from '@api/config'
import { ADName, User, UserToken } from './model'

export type LoginData = { login: string; password: string }

export const getUserToken = ({ login, password }: LoginData) => {
    return $api.post<UserToken>('', `ulogin=${encodeURIComponent(login)}&upassword=${encodeURIComponent(password)}`)
}

export const getUser = (token: string) => {
    return $api.get<{ user: User }>(`?getUser&token=${token}`)
}

export const getADName = (data: ADName) => {
    return $api.get<any>(`?getADName&fio=${data.fio}&pn=${data.pn}`)
}
