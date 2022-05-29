import { $api } from '@api/config'
import Token from '@utils/token'
import { User, UserToken } from './model'

export type LoginData = { login: string; password: string }

export const getUserToken = ({ login, password }: LoginData) => {
    return $api.post<UserToken>('', `ulogin=${encodeURIComponent(login)}&upassword=${encodeURIComponent(password)}`)
}

export const getUser = (token: string) => {
    return $api.get<{ user: User }>(`?getUser&token=${token}`)
}

export const sendNewAvatar = (file: File) => {
    const formData = new FormData()
    formData.set('token', Token())
    formData.set('avatar', file)

    return $api.post<{ avatar: string }>('?bebra=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
