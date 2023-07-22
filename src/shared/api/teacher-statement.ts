import { $api } from '@api/config'
import { UserApplication } from '@api/model'
import token from '@utils/token'

export const get = () => {
    return $api.get<UserApplication>(`?getAppData&token=${token()}`)
}

export const post = (args: { [key: string]: any }) => {
    const formData = new FormData()
    formData.set('token', token())
    formData.set('saveAppData', args.formId)

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post(`?saveAppData=${args.formId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
