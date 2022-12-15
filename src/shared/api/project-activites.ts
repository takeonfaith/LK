import { $api } from './config'
import { Project } from './model/project-activites'
// import { projectActivitesResponse } from './__mock__/project-activites'
import token from '@utils/token'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const get = async (semestr: string): Promise<Project> => {
    return (await $api.get(`?PDinfo&token=${token()}`)).data
}
