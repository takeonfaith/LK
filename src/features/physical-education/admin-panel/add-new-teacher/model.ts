import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { combineEvents } from 'patronum'
import { modalModel } from 'widgets/modal/model'
import { addPermission, addPermissionToTeacherFx } from '../add-permission-to-teacher/model'
import { AddTeacher } from './types'
import { getAddNewTeacherMutation } from './utils'

export const createTeacher = createEvent<AddTeacher>()

const createTeacherFx = createEffect(async (teacher: AddTeacher) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { permission, ...t } = teacher
    await pERequest(getAddNewTeacherMutation(t))

    return teacher
})

sample({
    clock: createTeacherFx.failData,
    fn: () => {
        return {
            message: 'Не удалось создать нового преподавателя',
            type: 'failure' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: createTeacherFx.doneData,
    fn: () => {
        return {
            message: 'Преподаватель создан',
            type: 'success' as any,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: createTeacherFx.doneData,
    filter: ({ permission }) => !!permission,
    fn: ({ teacherGuid, permission }) => ({ teacherGuid, permission: permission! }),
    target: addPermission,
})
sample({ clock: createTeacher, target: createTeacherFx })
sample({
    clock: combineEvents({ events: [createTeacherFx.doneData, addPermissionToTeacherFx.doneData] }),
    target: modalModel.events.close,
})
