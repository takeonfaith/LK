import { teacherDataVerificationApi } from '@api'
import { TeacherDataVerification } from '@api/model'
import { createEffect, createStore, createEvent } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { forward } from 'effector/effector.mjs'

const useTeacherDataVerification = () => {
    return {
        data: useStore($teacherDataVerificationStore).teacherDataVerification,
        loading: useStore(getTeacherDataVerificationFx.pending),
        error: useStore($teacherDataVerificationStore).error,
    }
}

interface TeacherDataVerificationStore {
    teacherDataVerification: TeacherDataVerification | null
    error: string | null
}

const postTeacherDataVerification = createEvent<TeacherDataVerification>()

const postTeacherDataVerificationFx = createEffect(async (postData: TeacherDataVerification): Promise<void> => {
    try {
        const response = await teacherDataVerificationApi.post(postData)

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

forward({ from: postTeacherDataVerification, to: postTeacherDataVerificationFx })

const getTeacherDataVerificationFx = createEffect(async (): Promise<TeacherDataVerification> => {
    try {
        const response = await teacherDataVerificationApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const $teacherDataVerificationStore = createStore<TeacherDataVerificationStore>({
    teacherDataVerification: null,
    error: null,
})
    .on(getTeacherDataVerificationFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getTeacherDataVerificationFx.doneData, (oldData, newData) => ({
        ...oldData,
        teacherDataVerification: newData,
    }))
    .on(getTeacherDataVerificationFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))

export const selectors = {
    useTeacherDataVerification,
}

export const effects = {
    getTeacherDataVerificationFx,
}
export const events = {
    postTeacherDataVerification,
}
