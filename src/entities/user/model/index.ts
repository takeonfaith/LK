import { userApi } from '@api'
import { LoginData } from '@api/user-api'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { User, UserToken } from '@api/model'
import axios from 'axios'

interface UserStore {
    currentUser: User | null
    isAuthenticated: boolean | null
    error: string | null
}

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

        localStorage.setItem('token', JSON.stringify(tokenResponse.data))

        return tokenResponse.data
    } catch (e) {
        throw new Error('Неверный логин или пароль')
    }
})

const getUserFx = createEffect<UserToken, UserStore>(async (data: UserToken): Promise<UserStore> => {
    try {
        const userResponse = await userApi.getUser(data.token)

        return { currentUser: userResponse.data.user, isAuthenticated: !!data, error: '' }
    } catch (error) {
        logout()
        throw new Error('token expired')
    }
})

const useUser = () => {
    const { currentUser: user, error, isAuthenticated } = useStore($userStore)
    return {
        data: { user, isAuthenticated: isAuthenticated },
        loading: useStore(getUserTokenFx.pending),
        error: error,
    }
}

const logoutFx = createEffect(() => {
    localStorage.removeItem('token')
})

const login = createEvent<LoginData>()
const logout = createEvent()

forward({ from: login, to: getUserTokenFx })
forward({ from: getUserTokenFx.doneData, to: getUserFx })
forward({ from: logout, to: logoutFx })

//  In effector chat core-team describe something like this code (Perhaps a better solution can be found)
// TODO: ask about token expires (Looks like it won't expire)
const tokenInStorage = JSON.parse(localStorage.getItem('token') ?? 'null')

!!tokenInStorage && getUserFx(tokenInStorage)

const $userStore = createStore<UserStore>({
    currentUser: null,
    error: null,
    isAuthenticated: !!tokenInStorage,
})
    .on(getUserFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserFx.doneData, (_, newData) => newData)
    .on(getUserFx.failData, (_, newData) => ({
        error: newData.message,
        currentUser: null,
        isAuthenticated: null,
    }))
    .on(getUserTokenFx.failData, (_, error) => ({ isAuthenticated: null, currentUser: null, error: error.message }))
    .on(logout, () => ({
        error: '',
        isAuthenticated: null,
        currentUser: null,
    }))

export const selectors = {
    useUser,
}

export const events = {
    login,
    logout,
}

export const effects = {
    getUserFx,
}
