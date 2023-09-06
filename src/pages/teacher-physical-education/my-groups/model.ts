import { $userStore } from '@entities/user/model'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, createEvent, createStore, sample } from 'effector'
import { loadGroup } from './lib'

export type Group = {
    groupName: string
    visitValue: number
    curator: { fullName: string }
}

const load = createEvent()

const loadFx = attach({
    effect: async ({ currentUser }) => {
        const res = await pERequest<{ groups: { items: Group[] } }>(loadGroup(currentUser?.guid ?? ''))

        return res.groups.items
    },
    source: $userStore,
})

sample({ clock: load, target: loadFx })

const $myGroups = createStore<Group[]>([]).on(loadFx.doneData, (_, data) => data)

export { load, $myGroups }
