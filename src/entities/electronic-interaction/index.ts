import { pepApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'

// export * as electronicInteractionModel from './model'

export const electronicInteractionModel = createDefaultStore({
    api: {
        get: pepApi.get,
        post: pepApi.set,
    },
    prepareData: (data) => data[0],
})
