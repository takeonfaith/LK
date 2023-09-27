import axios from 'axios'
import { addAuthHeaderToRequests, authResponseInterceptor } from './utils'

//https://docker.mospolytech.ru/physedjournal/graphql/
// export const PE_URL = 'http://45.10.42.218:3333/graphql/'
export const PE_URL = 'https://api.mospolytech.ru/physedjournal/graphql/'

const $pEApi = axios.create({ baseURL: PE_URL })

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

$pEApi.interceptors.request.use(addAuthHeaderToRequests)

$pEApi.interceptors.response.use((response) => {
    return response
}, authResponseInterceptor)

export const pERequest = async <T>(query: string): Promise<T> => {
    const response = await $pEApi.post('', { query }, config)
    if (hasErrors(response.data)) {
        throw new Error('Request error')
    }

    return response.data.data
}

function hasErrors(obj: Record<any, any>) {
    if (typeof obj === 'object' && !!obj) {
        if (obj.hasOwnProperty('errors') && !!obj.errors) {
            return true
        }
        for (const key in obj) {
            if (hasErrors(obj[key])) {
                return true
            }
        }
    }
    return false
}
