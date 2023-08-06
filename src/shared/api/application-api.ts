import { $api, $hrApi } from '@api/config'
import { ApplicationCreating } from '@entities/applications/model'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import token from '@utils/token'
import { AxiosResponse } from 'axios'
import { Application, UserApplication } from './model'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $api.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $api.get(`?getAppData&token=${token()}`)
}
export const getWorkerData = async (): Promise<AxiosResponse> => {
    //907afd9b-d9c5-11e7-940a-b4b52f5f5349

    const response = await $hrApi.get(
        `/Dismissal.GetAllHistory?employeeGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
        { timeout: 30000 },
    )

    return response
}
export const postWorkerStatuses = (): Promise<AxiosResponse> => {
    //907afd9b-d9c5-11e7-940a-b4b52f5f5349
    return $hrApi.post('Dismissal.AllHistory')
}
export const getDivisions = async () => {
    const { data } = await $hrApi.get(`/AnotherPlaceWork.GetDivisions`)

    return data.divisions
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
