import { AxiosResponse } from 'axios'
import { Application } from './model'
import token from '@utils/token'
import { $api } from '@api/config'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $api.get(`?getAppRequests&token=${token()}`)
}

export const post = async (formId: string, args: { [key: string]: any }) => {
    const formData = new FormData()

    formData.set('token', token())
    formData.set('saveAppData', formId)

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    const { data: resultRequest } = await $api.post(`?saveAppData=${formId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    if (resultRequest.result === 'ok') {
        return 'ok'
    } else {
        throw new Error(resultRequest.error_text)
    }
}
