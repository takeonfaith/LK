import { $api } from './config'

export const changeAvatar = async (avatar: File[]) => {
    const formData = new FormData()
    formData.set('avatar', avatar[0])
    return await $api.post(`?changeAvatar=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changeEmail = async (email: string) => {
    const formData = new FormData()
    formData.set('email', email)
    return await $api.post(`?changeEmail=1`, formData)
}

export const changeADPass = async (password: string) => {
    const formData = new FormData()
    formData.set('password', password)
    return await $api.post(`?changeADPass=1`, formData)
}
