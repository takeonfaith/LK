import { $api } from '@api/config'
import token from '@utils/token'
import { TeacherDataVerification } from '@api/model'

export const get = () => {
    return $api.get(`?getCheckData&token=${token}`)
}

export const post = (args: TeacherDataVerification) => {
    const formData = new FormData()
    formData.set('token', token)
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
