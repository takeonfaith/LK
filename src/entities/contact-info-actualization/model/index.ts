import { contactInfoActualizationApi } from '@api'
import { createFormStore } from 'shared/effector/create-form-store'

export const { effects, events, selectors } = createFormStore(
    {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    { get: contactInfoActualizationApi.get, post: contactInfoActualizationApi.post },
)
