import axios from 'axios'

export const PE_URL = 'http://45.10.42.218:3333/graphql/'

const $pEApi = axios.create({ baseURL: PE_URL })

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

export const pERequest = async <T>(query: string): Promise<T> => {
    return (await $pEApi.post('', { query }, config)).data.data
}
