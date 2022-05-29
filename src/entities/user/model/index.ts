/* eslint-disable no-console */
import { userApi } from '@api'
import { LoginData } from '@api/user-api'
import { createEffect, createEvent, createStore, forward } from 'effector/compat'
import { useStore } from 'effector-react/compat'
import { User, UserToken } from '@api/model'
import axios from 'axios'
import clearAllStores from '../lib/clear-all-stores'
import createFullName from '@features/home/lib/create-full-name'

interface UserStore {
    currentUser: User | null
    isAuthenticated: boolean | null
    error: string | null
    savePassword: boolean
}

//  In effector chat core-team describe something like this code (Perhaps a better solution can be found)
// TODO: ask about token expires (Looks like it won't expire)
const tokenInStorage = JSON.parse(localStorage.getItem('token') ?? 'null')
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
            localStorage.setItem('token', JSON.stringify(tokenResponse.data))
        } else {
            sessionStorage.setItem('token', JSON.stringify(tokenResponse.data))
        }

        return tokenResponse.data
    } catch (e) {
        throw new Error(navigator.onLine ? 'Неверный логин или пароль' : 'Потеряно соединение с интернетом')
    }
})

const getUserFx = createEffect<UserToken, UserStore>(async (data: UserToken): Promise<UserStore> => {
    try {
        const userResponse = await userApi.getUser(data.token)
        const user = userResponse.data.user
        const { name, surname, patronymic } = user
        console.log(data)

        return {
            currentUser: {
                ...user,
                fullName: createFullName({ name, surname, patronymic }),
                available_accounts: [],
            },
            isAuthenticated: !!data,
            error: null,
            savePassword: savePasswordInStorage(),
        }
    } catch (error) {
        // logout()
        console.log(error)

        throw new Error('Возникла какая-то ошибка')
    }
})

const useUser = () => {
    const { currentUser: user, error, isAuthenticated, savePassword } = useStore($userStore)
    return {
        data: { user, isAuthenticated, savePassword },
        loading: useStore(getUserTokenFx.pending),
        error: error,
    }
}

const logoutFx = createEffect(() => {
    if (savePasswordInStorage()) {
        localStorage.removeItem('token')
    } else {
        sessionStorage.removeItem('token')
    }
    console.log('token removed')

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
const changeSavePassword = createEvent<{ savePassword: boolean }>()

forward({ from: login, to: getUserTokenFx })
forward({ from: getUserTokenFx.doneData, to: getUserFx })
forward({ from: logout, to: logoutFx })

!!tokenInStorage && savePasswordInStorage() ? getUserFx(tokenInStorage) : logoutFx()

const DEFAULT_STORE: UserStore = {
    currentUser: null,
    error: null,
    isAuthenticated: !!tokenInStorage?.token?.length,
    savePassword: savePasswordInStorage(),
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
        isAuthenticated: !!tokenInStorage?.token?.length,
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
    .on(clear, (oldData) => ({
        ...oldData,
        currentUser: null,
    }))

export const selectors = {
    useUser,
}

export const events = {
    login,
    logout,
    changeSavePassword,
    clear,
}

export const effects = {
    getUserFx,
}
