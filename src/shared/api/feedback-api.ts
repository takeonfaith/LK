import { AxiosResponse } from 'axios'
import { Feedback, FormFeedback } from './model/feedback'

export const get = (): Promise<AxiosResponse<Feedback, any>> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: {} } as AxiosResponse<Feedback, any>), 1000)
    })
}

export const post = (body: FormFeedback): Promise<AxiosResponse<EmptyObject, any>> => {
    return new Promise((resolve) => {
        // eslint-disable-next-line no-console
        console.log(body)
        setTimeout(() => resolve({} as AxiosResponse<EmptyObject, any>), 1000)
    })
}
