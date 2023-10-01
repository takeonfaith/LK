import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { getStartNewSemesterMutation } from './get-start-new-semester-mutation'

const startNewSemester = createEvent<string>()

const startNewSemesterFx = createEffect(async (semName: string) => {
    return await pERequest(getStartNewSemesterMutation(semName))
})

sample({ clock: startNewSemester, target: startNewSemesterFx })

sample({
    clock: startNewSemesterFx.doneData,
    target: modalModel.events.close,
})

sample({
    clock: startNewSemesterFx.doneData,
    fn: () => ({
        message: 'Новый семестр начат',
        type: 'success' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: startNewSemesterFx.failData,
    fn: () => ({
        message: 'Не удалось начать новый семестр',
        type: 'failure' as any,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    startNewSemester,
}
