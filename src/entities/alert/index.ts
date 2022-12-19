import { getAlerts } from '@shared/api/alerts-api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import prepareData from './lib/prepare-data'

export const alertModel = createDefaultStore({
    api: {
        get: getAlerts,
    },
    prepareData,
})
