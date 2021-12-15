import { userApi } from '@api'
import { LoginData } from '@api/user-api'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { User, UserToken } from '@api/model'

interface UserStore {
    currentUser: User | null
    token: UserToken | null
    error: string | null
}

const getUserTokenFx = createEffect<LoginData, UserToken>(async (params: LoginData) => {
    try {
        const tokenResponse = await userApi.getUserToken(params)

        localStorage.setItem('token', JSON.stringify(tokenResponse.data))

        return tokenResponse.data
    } catch (e) {
        throw new Error('Неверный логин или пароль')
    }
})

const getUserFx = createEffect<UserToken, UserStore>(async (data: UserToken): Promise<UserStore> => {
    try {
        const userResponse = await userApi.getUser(data.token)

        return { currentUser: userResponse.data.user, token: data, error: '' }
    } catch (error) {
        logout()
        throw new Error('token expired')
    }
})

const useUser = () => {
    const { currentUser: user, error, token } = useStore($userStore)
    return {
        data: { user, token },
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
    token: tokenInStorage,
})
    .on(getUserFx, (oldData, _) => ({
        ...oldData,
        error: null,
    }))
    .on(getUserFx.doneData, (_, newData) => newData)
    .on(getUserFx.failData, (_, newData) => ({
        error: newData.message,
        currentUser: null,
        token: null,
    }))
    .on(getUserTokenFx.failData, (_, error) => ({ token: null, currentUser: null, error: error.message }))
    .on(logout, () => ({
        error: '',
        token: null,
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
