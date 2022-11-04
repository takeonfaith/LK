import { AxiosResponse } from 'axios'
import { Application, UserApplication } from './model'
import token from '@utils/token'
import { $api, $workerApi } from '@api/config'
import { ApplicationCreating } from '@entities/applications/model'
//import jwtDecode from 'jwt-decode'
//import { getJwtToken } from '@entities/user/lib/jwt-token'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $api.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $api.get(`?getAppData&token=${token()}`)
}
export const getWorkerData = (): Promise<AxiosResponse<UserApplication>> => {
    //console.log(getJwtToken)
    return $workerApi.get(`?guid=907afd9b-d9c5-11e7-940a-b4b52f5f5349`)
}

export const post = async (data: ApplicationCreating) => {
    const { formId, args } = data
    const formData = new FormData()

    formData.set('token', token())
    formData.set('saveAppData', formId)

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    const { data: resultRequest } = await $api.post(`?saveAppData=${formId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return resultRequest.result
}
