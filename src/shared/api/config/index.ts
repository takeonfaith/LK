//import { getUserToken } from '@api/user-api'
import { OLD_LK_URL } from '@consts'
import { getJwtToken } from '@entities/user/lib/jwt-token'
import axios, { AxiosError } from 'axios'

export const API_BASE_URL = `${OLD_LK_URL}/lk_api.php`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders/`
export const API_WORKER_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders/GeneralInformation.Get`

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })
export const $workerApi = axios.create({ baseURL: API_WORKER_URL, timeout: 30000 })
export const $hrApi = axios.create({ baseURL: API_HR_URL })

$workerApi.interceptors.request.use((config) => {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${JSON.parse(getJwtToken() || '{}')}`
    return config
})

$hrApi.interceptors.request.use((config) => {
    if (!config.headers) config.headers = {}
    config.headers.Authorization = `Bearer ${JSON.parse(getJwtToken() || '{}')}`
    return config
})

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
