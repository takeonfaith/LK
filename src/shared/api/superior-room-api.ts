import token from '@utils/token'
import { $api } from './config'

export const get = () => {
    return $api.get(`?getRequestHighComfort&token=${token()}`)
}

export const post = (args: { [key: string]: any }) => {
    const formData = new FormData()
    formData.set('token', token())
    formData.set('postRequestHighComfort', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    // eslint-disable-next-line no-console
    console.log(formData)

    return $api.post('?postRequestHighComfort=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
