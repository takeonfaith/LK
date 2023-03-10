import { settingsAccountApi } from '@shared/api'
import { createEffect, createEvent, createStore } from 'effector'
import { useStore } from 'effector-react'

type TStore<T> = {
    data: T
    loading: boolean
    completed: boolean
    error: string | null
}

const DEFAULT = {
    loading: false,
    completed: false,
    error: null,
}

const AVATAR_STORE: TStore<File[]> = {
    data: [],
    ...DEFAULT,
}

const AD_PASS_STORE: TStore<string> = {
    data: '',
    ...DEFAULT,
}

const EMAIL_STORE: TStore<string> = {
    data: '',
    ...DEFAULT,
}

const changeAvatar = createEvent<File[]>()
const changeCompleted = createEvent<boolean>()

const postAvatarFx = createEffect(async (photo: File[]) => {
    try {
        await settingsAccountApi.changeAvatar(photo)
    } catch (_) {
        throw new Error('Не удалось загрузить фотографию')
    }
})

const $avatarStore = createStore(AVATAR_STORE)
    .on(changeAvatar, (state, payload) => ({
        ...state,
        data: payload,
    }))
    .on(postAvatarFx, (state) => ({
        ...state,
        error: null,
        loading: true,
        completed: false,
    }))
    .on(postAvatarFx.doneData, (state) => ({
        ...state,
        error: null,
        loading: false,
        completed: true,
    }))
    .on(postAvatarFx.fail, (state, { error }) => ({
        ...state,
        error: error.message,
        loading: false,
        completed: false,
    }))
    .on(changeCompleted, (state, payload) => ({
        ...state,
        completed: payload,
    }))

const changeEmail = createEvent<string>()
const postNewEmail = createEffect(async (email: string) => {
    try {
        await settingsAccountApi.changeEmail(email)
    } catch (_) {
        throw new Error('Не удалось изменить email')
    }
})

const $emailStore = createStore(EMAIL_STORE)
    .on(changeEmail, (state, payload) => ({
        ...state,
        data: payload,
    }))
    .on(postNewEmail, (state) => ({
        ...state,
        loading: true,
    }))
    .on(postNewEmail.doneData, (state) => ({
        ...state,
        loading: false,
        completed: true,
        error: null,
    }))
    .on(postNewEmail.failData, (state, error) => ({
        ...state,
        loading: false,
        completed: false,
        error: error.message,
    }))

const changeADPass = createEvent<string>()
// const postNewADPass = createEffect(async (adPass: string) => {
//     try {
//         await settingsAccountApi.changeADPass(adPass)
//     } catch (_) {
//         throw new Error('Не удалось изменить пароль')
//     }
// })

const $ADpassStore = createStore(AD_PASS_STORE).on(changeADPass, (state, payload) => ({
    ...state,
    data: payload,
}))

const useData = () => {
    return {
        avatar: useStore($avatarStore),
        adPass: useStore($ADpassStore),
        email: useStore($emailStore),
    }
}

export const selectors = { useData }

export const events = {
    avatar: { changeAvatar, changeCompleted },
    email: { changeEmail },
}

export const effects = {
    avatar: { postAvatarFx },
    email: { postNewEmail },
}
