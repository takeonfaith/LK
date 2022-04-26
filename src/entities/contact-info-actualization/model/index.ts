import { contactInfoActualizationApi } from '@api'
import { createFormStore } from 'shared/effector/create-form-store'

export const { effects, events, selectors } = createFormStore({
    defaultStore: {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    api: {
        get: contactInfoActualizationApi.get,
        post: contactInfoActualizationApi.post,
    },
})
