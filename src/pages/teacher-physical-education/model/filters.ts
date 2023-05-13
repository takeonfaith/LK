import { createStore } from 'effector'
import { pEStudentSearchModel } from '.'

const $filters = createStore<Record<string, string>>({}).on(pEStudentSearchModel.stores.$search, (state, search) => {
    return { ...state, fullName: search }
})

export const stores = {
    $filters,
}
