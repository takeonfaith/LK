import { AxiosResponse } from 'axios'
import { Application } from './model'
import { testApplicationsResponse } from './__mock__/test-applications'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: testApplicationsResponse } as AxiosResponse<Application[], any>), 1000)
    })
}

// export const agreementSubmit = () => {
//     return $api.get(``)
// }
