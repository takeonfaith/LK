import { pepApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import emulateRequest from '@shared/lib/emulate-request'

// export * as electronicInteractionModel from './model'

export const electronicInteractionModel = createDefaultStore({
    api: {
        get: pepApi.get,
        post: () => emulateRequest(true),
    },
    prepareData: (data) => data[0],
})
