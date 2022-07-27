import { $api } from '@api/config'
import { TeacherStatement } from '@api/model'
import token from '@utils/token'

export const get = () => {
    return $api.get<TeacherStatement>(`?getAppData&token=${token()}`)
}

export const post = (args: TeacherStatement) => {
    const formData = new FormData()
    formData.set('token', token())

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
