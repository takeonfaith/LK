import { $userStore } from '@entities/user/model'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, createEvent, restore, sample } from 'effector'
import { loadPeUserPermissions } from './lib'
import { PETeacher } from './types'

const load = createEvent()

const loadFx = attach({
    effect: async ({ currentUser }) => {
        const res = await pERequest<{ teacher: PETeacher }>(loadPeUserPermissions(currentUser?.guid ?? ''))

        return res.teacher
    },
    source: $userStore,
})

const $peTeacher = restore(loadFx, null)

sample({ clock: load, target: loadFx })

const $isLoading = loadFx.pending

export const events = {
    load,
}

export const stores = {
    $peTeacher,
    $isLoading,
}
