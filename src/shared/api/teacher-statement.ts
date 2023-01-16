import { $api } from '@api/config'
import { UserApplication } from '@api/model'
import token from '@utils/token'
import { AxiosResponse } from 'axios'

export const get = () => {
    return $api.get<UserApplication>(`?getAppData&token=${token()}`)
}

export const post = (args: { [key: string]: any }) => {
    const formData = new FormData()
    formData.set('token', token())

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    // eslint-disable-next-line no-console
    console.log('args', args)

    return Promise.resolve({}) as Promise<AxiosResponse<any, any>>

    // return $api.post(`?saveAppData=${args.formId}`, formData, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //     },
    // })
}
