import { TStudent } from '@shared/api/model'
import { createStore } from 'effector'
import { useStore } from 'effector-react'

type Store = {
    error: string | null
    students: TStudent[]
}

const DEFAULT_STORE: Store = {
    error: null,
    students: [],
}

const useStudents = () => {
    const { students, error } = useStore($studentsStore)
    return {
        data: students,
        loading: false,
        error,
    }
}

const $studentsStore = createStore(DEFAULT_STORE)

export const selectors = {
    useStudents,
}

// export const effects = {
//     getStudentsFx,
// }
