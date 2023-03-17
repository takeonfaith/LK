import { userApi } from '@api'
import { ADName, User, UserToken } from '@api/model'
import { LoginData } from '@api/user-api'
import createFullName from '@features/home/lib/create-full-name'
import axios from 'axios'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react/compat'
import clearAllStores from '../lib/clear-all-stores'
import { parseJwt } from '../lib/jwt-token'

interface UserStore {
    currentUser: User | null
    isAuthenticated: boolean | null
    error: string | null
    savePassword: boolean
    loginEuz?: string
}

//  In effector chat core-team describe something like this code (Perhaps a better solution can be found)
// TODO: ask about token expires (Looks like it won't expire)
const tokenInStorage = localStorage.getItem('token') ?? 'null'
const savePasswordInStorage = () => JSON.parse(localStorage.getItem('savePassword') ?? 'true')

const getUserTokenFx = createEffect<LoginData, UserToken>(async (params: LoginData) => {
    try {
        const tokenResponse = await userApi.getUserToken(params)

        const form = new FormData()
        form.set('ulogin', params.login)
        form.set('upassword', params.password)
        form.set('auth_action', 'userlogin')

        // set old version site cookies
        try {
            await axios.post('/old', form)
        } catch {}

        if (savePasswordInStorage()) {
            localStorage.setItem('token', tokenResponse.data.token)
            localStorage.setItem('jwt', tokenResponse.data.jwt)
            localStorage.setItem('jwt_refresh', tokenResponse.data.jwt_refresh)
        } else {
            sessionStorage.setItem('token', tokenResponse.data.token)
            sessionStorage.setItem('jwt', tokenResponse.data.jwt)
        }
        return tokenResponse.data
    } catch (e) {
        throw new Error(navigator.onLine ? 'Неверный логин или пароль' : 'Потеряно соединение с интернетом')
    }
})

const getUserFx = createEffect<Pick<UserToken, 'jwt' | 'token'>, UserStore>(async (token): Promise<UserStore> => {
    try {
        const userResponse = await userApi.getUser(token.token)
        const user = userResponse.data.user
        const { name, surname, patronymic } = user

        return {
            currentUser: {
                ...user,
                guid: parseJwt(token.jwt).IndividualGuid,
                fullName: createFullName({ name, surname, patronymic }),
            },
            isAuthenticated: !!token,
            error: null,
            savePassword: savePasswordInStorage(),
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)

        throw new Error('Возникла какая-то ошибка')
    }
})

const getLoginEuzFx = createEffect(async (data: ADName): Promise<string> => {
    try {
        const userResponse = await userApi.getADName(data)
        return userResponse.data
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)

        throw new Error('Возникла какая-то ошибка')
    }
})

const logoutFx = createEffect(() => {
    if (savePasswordInStorage()) {
        localStorage.removeItem('token')
        localStorage.removeItem('jwt')
        localStorage.removeItem('jwt_refresh')
    } else {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('jwt')
        sessionStorage.removeItem('jwt_refresh')
    }

    clearAllStores()
})

const changeSavePasswordFunc = (savePassword?: boolean) => {
    const localStorageValue = localStorage.getItem('savePassword')
    const value = savePassword ?? JSON.parse(localStorageValue ?? 'true')
    localStorage.setItem('savePassword', value.toString())

    return value
}

const login = createEvent<LoginData>()
const logout = createEvent()
const clear = createEvent()
const update = createEvent<{ key: keyof User; value: User[keyof User] }>()
const changeSavePassword = createEvent<{ savePassword: boolean }>()

forward({ from: login, to: getUserTokenFx })
sample({ clock: getUserTokenFx.doneData, target: getUserFx })
forward({ from: logout, to: logoutFx })

!!tokenInStorage && savePasswordInStorage()
    ? getUserFx({ token: tokenInStorage, jwt: localStorage.getItem('jwt')! })
    : logoutFx()

const DEFAULT_STORE: UserStore = {
    currentUser: null,
    error: null,
    isAuthenticated: !!tokenInStorage?.length,
    savePassword: savePasswordInStorage(),
    loginEuz: '',
}

changeSavePasswordFunc()

const $userStore = createStore(DEFAULT_STORE)
    .on(getUserFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserFx.doneData, (_, newData) => newData)
    .on(getUserFx.failData, (_, error) => ({
        error: error.message,
        currentUser: null,
        isAuthenticated: !!tokenInStorage?.length,
        savePassword: savePasswordInStorage(),
    }))
    .on(getUserTokenFx.failData, (_, error) => ({
        error: error.message,
        isAuthenticated: null,
        currentUser: null,
        savePassword: savePasswordInStorage(),
    }))
    .on(logout, () => ({
        error: '',
        isAuthenticated: null,
        currentUser: null,
        savePassword: savePasswordInStorage(),
    }))
    .on(changeSavePassword, (oldData, { savePassword }) => ({
        ...oldData,
        savePassword: changeSavePasswordFunc(savePassword),
    }))
    .on(getLoginEuzFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getLoginEuzFx.doneData, (oldData, newData) => ({
        ...oldData,
        loginEuz: newData,
    }))
    .on(getUserFx.failData, (oldData, error) => ({
        ...oldData,
        error: error.message,
    }))
    .on(update, (oldData, { key, value }) => ({
        ...oldData,
        currentUser: oldData.currentUser ? { ...oldData.currentUser, [key]: value } : null,
    }))
    .on(clear, (oldData) => ({
        ...oldData,
        currentUser: null,
    }))

export const selectors = {
    useUser: () => {
        const { currentUser: user, error, isAuthenticated, savePassword, loginEuz } = useStore($userStore)
        return {
            data: { user, isAuthenticated, savePassword, loginEuz },
            loading: useStore(getUserTokenFx.pending),
            error: error,
        }
    },
}

export const events = {
    login,
    logout,
    changeSavePassword,
    clear,
    update,
}

export const effects = {
    getUserFx,
    getLoginEuzFx,
}
