import { $api } from '@api/config'
import getToken from '@utils/token'
import { ContactInfoActualization } from '@api/model'

export const get = () => {
    return $api.get<ContactInfoActualization>(`?getContactData&token=${getToken()}`)
}

export const post = (args: ContactInfoActualization) => {
    const formData = new FormData()
    formData.set('token', getToken())
    formData.set('saveContactData', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('?saveContactData=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
