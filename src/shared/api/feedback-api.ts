import { AxiosResponse } from 'axios'
import { $api, $noTokenApi } from '@api/config'
import token from '@utils/token'
import { Feedback, FormFeedback } from './model/feedback'

export const get = (): Promise<AxiosResponse<Feedback, any>> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: {} } as AxiosResponse<Feedback, any>), 1000)
    })
}

export const post = async (body: FormFeedback) => {
    const feedBackEndpoint = '?sendFeedBack=1'
    const headers = {
        'Content-Type': 'multipart/form-data',
    }
    const api = token() ? $api : $noTokenApi

    const formData = new FormData()

    if (token()) {
        formData.set('token', token())
    }

    formData.set('sendFeedBack', '1')

    for (const [key, value] of Object.entries(body)) {
        formData.set(key, value)
    }

    return await api.post(feedBackEndpoint, formData, { headers })
}
