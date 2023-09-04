import axios from 'axios'
import { addAuthHeaderToRequests, authResponseInterceptor } from './utils'

export const URL = 'http://apilin.mospolytech.ru:3345/userinfo/graphql/'

const userApi = axios.create({ baseURL: URL })

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

userApi.interceptors.request.use(addAuthHeaderToRequests)

userApi.interceptors.response.use((response) => {
    return response
}, authResponseInterceptor)

export const userApiRequest = async <T>(query: string): Promise<T> => {
    const response = await userApi.post('', { query }, config)

    if (response.data.errors) {
        throw new Error('Request error')
    }

    return response.data.data
}
