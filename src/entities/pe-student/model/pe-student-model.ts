import { PEStudent } from '@entities/pe-student/types'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, createEvent, createStore, sample } from 'effector'
import { getPEStudentsQuery } from '../utils'

const load = createEvent()
const nextPage = createEvent()
const prevPage = createEvent()

const $pEStudentsPage = createStore<number>(0)
    .on(nextPage, (page) => page + 1)
    .on(prevPage, (page) => page - 1)

const loadPageFx = attach({
    source: $pEStudentsPage,
    effect: async (page) => {
        const { students } = await pERequest<{ students: { items: PEStudent[] } }>(getPEStudentsQuery(page))

        return students.items
    },
})

sample({ clock: load, target: loadPageFx })

const $pEStudents = createStore<PEStudent[]>([]).on(loadPageFx.doneData, (_, students) => students)

export const events = {
    load,
}

export const stores = {
    $pEStudents,
    $pEStudentsPage,
}
