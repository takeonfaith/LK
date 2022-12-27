import { vacationScheduleApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'

export const vacationScheduleModel = createDefaultStore({
    api: {
        get: vacationScheduleApi.get,
    },
    errorMessage: () => 'Возникла ошибка с получением графика отпусков!',
})
