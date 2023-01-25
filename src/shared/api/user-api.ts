import { $api } from '@api/config'
import axios from 'axios'
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

export const refreshAccessToken = async (refreshToken: string) => {
    const { data } = await axios.post<{ access_token: string; refresh_token: string }>(
        'https://api.mospolytech.ru/frontendtokenservice/Token/Refresh',
        { refresh_token: refreshToken },
    )

    return data
}
