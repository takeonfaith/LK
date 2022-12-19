import { projectActivitesApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'

export const projectActivitesModel = createDefaultStore({
    api: {
        get: projectActivitesApi.get,
    },
})
