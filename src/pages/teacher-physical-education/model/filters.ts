import { createEvent, createStore } from 'effector'
import { pEStudentSearchModel } from '.'

const addFilter = createEvent<{ name: string; value: string | number }>()

const $filters = createStore<Record<string, string | number>>({})
    .on(pEStudentSearchModel.stores.$search, (state, search) => {
        return { ...state, fullName: search }
    })
    .on(addFilter, (state, { name, value }) => {
        const data = { ...state }
        if (!value) {
            delete data[name]
            return data
        }
        return { ...data, [name]: value }
    })

export const stores = {
    $filters,
}

export const events = {
    addFilter,
}
