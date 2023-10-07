import { createEvent, createStore, sample } from 'effector'
import { pEStudentSearchModel } from '.'

const addFilter = createEvent<{ name: string; value: string | number; strict?: boolean }>()
const resetFilters = createEvent()

const $filters = createStore<Record<string, { value: string | number }>>({})
    .on(pEStudentSearchModel.stores.$search, (state, search) => {
        return { ...state, fullName: { value: search } }
    })
    .on(addFilter, (state, { name, value, strict }) => {
        const data = { ...state }
        if (!value) {
            delete data[name]
            return data
        }
        return { ...data, [name]: { value, strict } }
    })

sample({ clock: resetFilters, target: $filters.reinit! })
sample({ clock: resetFilters, fn: () => '', target: pEStudentSearchModel.events.update })

export const stores = {
    $filters,
}

export const events = {
    addFilter,
    resetFilters,
}
