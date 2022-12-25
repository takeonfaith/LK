import { alertApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import prepareData from './lib/prepare-data'

export const alertModel = createDefaultStore({
    api: {
        get: alertApi.get,
    },
    prepareData,
})
