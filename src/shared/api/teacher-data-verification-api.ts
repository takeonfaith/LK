import { $api } from '@api/config'
import getToken from '@utils/token'
import { TeacherDataVerification } from '@api/model'

export const get = () => {
    return $api.get(`?getCheckData&token=${getToken()}`)
}

export const post = (args: TeacherDataVerification) => {
    const formData = new FormData()
    formData.set('token', getToken())
    formData.set('saveCheckData', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('?saveCheckData=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
