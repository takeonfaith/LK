import { AxiosResponse } from 'axios'
import { Application, UserApplication } from './model'
import token from '@utils/token'
import { $hrApi } from '@api/config'
import { ApplicationCreating } from '@entities/hr-applications/model'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $hrApi.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $hrApi.get(`?getAppData&token=${token()}`)
}

export const post = (data: ApplicationCreating) => $hrApi.post(`Dismissal.Post`, data)
