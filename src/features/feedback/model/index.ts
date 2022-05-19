import { feedbackApi } from '@api'
import { Feedback, FormFeedback } from '@api/model/feedback'
import { createFormStore } from 'shared/effector/create-form-store'

export const { effects, events, selectors } = createFormStore<Feedback, FormFeedback>({
    defaultStore: {
        completed: false,
        error: null,
        loading: false,
        data: null,
    },
    api: {
        get: feedbackApi.get,
        post: feedbackApi.post,
    },
})
