import axios from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'

const onSearch = createEvent<string>()
const resetTeachers = createEvent()

const searchFx = createEffect(async (search: string) => {
    const { employees } = (await axios.get(`https://api.mospolytech.ru/physedjournal/staff?filter=${search}`)).data

    return employees
})

const $search = createStore<string | null>(null).on(onSearch, (_, search) => search)

debounce({
    source: sample({ source: $search, filter: (value): value is string => value !== null }),
    timeout: 200,
    target: searchFx,
})

sample({ source: $search, filter: (value): value is string => value !== null })

const $teachers = createStore<{ guid: string; fullName: string }[]>([]).on(searchFx.doneData, (_, data) => data)

sample({ clock: resetTeachers, target: $search.reinit! })

export { $teachers, onSearch, $search, resetTeachers }
