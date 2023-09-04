import { OLD_LK_URL } from '@shared/constants'
import axios, { AxiosError } from 'axios'
import { addAuthHeaderToRequests } from './utils'

export const API_BASE_URL = `${OLD_LK_URL}/lk_api.php`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })
export const $hrApi = axios.create({ baseURL: API_HR_URL })
$hrApi.interceptors.request.use(addAuthHeaderToRequests)

// Uncomment when ready
// $hrApi.interceptors.response.use((response) => {
//     return response
// }, authResponseInterceptor)

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
