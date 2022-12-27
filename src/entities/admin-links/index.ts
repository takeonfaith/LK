import { adminLinksApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'

export const adminLinksModel = createDefaultStore({
    api: {
        get: adminLinksApi.get,
    },
})
