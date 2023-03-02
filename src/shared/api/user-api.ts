import { $api } from '@api/config'
import getToken from '@shared/lib/token'
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

type ResponseType = {
    result: 'ok' | 'error'
    errors: string
}

export const changeAvatar = async (avatar?: File) => {
    const formData = new FormData()
    formData.set('avatar', avatar ?? '')
    formData.set('token', getToken())

    return $api.post<ResponseType>(`?changeAvatar=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    const formData = new FormData()
    formData.set('old_pass', oldPassword)
    formData.set('new_pass', newPassword)

    return $api.post<ResponseType>(`?changeADPass=1&token=${getToken()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changeEmail = async (newEmail: string) => {
    const formData = new FormData()

    formData.set('email', newEmail)
    formData.set('token', getToken())

    return $api.post(`?changeEmail=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changePhone = async (newPhone: string) => {
    const formData = new FormData()

    formData.set('phone', newPhone)
    formData.set('token', getToken())

    return $api.post(`?changePhone=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
