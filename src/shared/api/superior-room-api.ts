import getToken from '@utils/token'
import { $api } from './config'

export const get = () => {
    return $api.get(`?getRequestHighComfort&token=${getToken()}`)
}

export const post = (args: { [key: string]: any }) => {
    const formData = new FormData()
    formData.set('token', getToken())
    formData.set('postRequestHighComfort', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('?postRequestHighComfort=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
