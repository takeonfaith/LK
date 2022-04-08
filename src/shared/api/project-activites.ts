import { Projects } from './model/project-activites'
import { projectActivitesResponse } from './__mock__/project-activites'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const get = (semestr: string): Promise<Projects> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(projectActivitesResponse), 1000)
    })
}
