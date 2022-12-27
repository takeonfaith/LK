import { acadPerformanceApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import { prepareData } from './lib/prepare'

export const acadPerformanceModel = createDefaultStore({
    api: {
        get: acadPerformanceApi.get,
    },
    prepareData,
})
