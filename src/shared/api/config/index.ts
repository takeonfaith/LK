import { OLD_LK_URL } from '@consts'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import axios, { AxiosError } from 'axios'

export const API_BASE_URL = `${OLD_LK_URL}/lk_api.php`
export const API_HR_URL = `http://winiis.mospolytech.ru:5032/`
export const CHAT_URL = 'http://localhost:5000/chat'

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })
export const $hrApi = axios.create({ baseURL: API_HR_URL, timeout: 90000 })
export const signalRConnection = new HubConnectionBuilder()
    .withUrl(CHAT_URL)
    .configureLogging(LogLevel.Information)
    .build()

/*export const $hrApi = axios.create({
        baseURL: API_HR_URL,
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
        timeout: 90000,
    })*/

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
