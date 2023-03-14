//import { getUserToken } from '@api/user-api'
import { OLD_LK_URL } from '@consts'
import { userModel } from '@entities/user'
import { getJwtToken } from '@entities/user/lib/jwt-token'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { refreshAccessToken } from '../user-api'

export const API_BASE_URL = `${OLD_LK_URL}/lk_api.php`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })
export const $hrApi = axios.create({ baseURL: API_HR_URL })

const addAuthHeaderToRequests = (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${getJwtToken()}`
    return config
}

$hrApi.interceptors.request.use(addAuthHeaderToRequests)

$hrApi.interceptors.response.use(
    (response) => {
        return response
    },
    async function (error) {
        const originalRequest = error.config
        if (error.request.status === 403 || error.request.status === 401) {
            if (!originalRequest._retry) {
                originalRequest._retry = true
                const refreshToken = localStorage.getItem('jwt_refresh')

                try {
                    const { accessToken, refreshToken: newRefreshToken } = await refreshAccessToken(refreshToken ?? '')
                    localStorage.setItem('jwt', accessToken)
                    localStorage.setItem('jwt_refresh', newRefreshToken)

                    return $hrApi(originalRequest)
                } catch (error) {
                    userModel.events.logout()
                }
            }
        }
        return Promise.reject(error)
    },
)

export function isAxiosError(error: Error): error is AxiosError {
    return (error as AxiosError).isAxiosError
}

export class RequestError extends Error {
    constructor(public innerException: any) {
        super('Во время запроса произошла ошибка')
        if (isAxiosError(innerException)) {
            if ((innerException as AxiosError).response?.status === 500) {
                // eslint-disable-next-line no-console
                console.error({ content: 'Ошибка сервера. Не удалось выполнить действие', duration: 3 })
            }
        }
    }
}
