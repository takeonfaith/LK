import { userApi } from '@api'
import { LoginData } from '@api/user-api'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'
import { User, UserToken } from '@api/model'

export const NO_USER_ID = '-1'

// const mock: User = {
//     id: '0',
//     status: 'Учится',
//     course: 2,
//     name: 'Константин',
//     surname: 'Иванов',
//     patronymic: 'Сергеевич',
//     avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
//     birthday: '31.07.2001',
//     sex: true,
//     code: 'ИПИТ-19-0075',
//     faculty: 'Институт принтмедиа',
//     group: '191-722',
//     specialty: '09.03.02 Информационные системы и технологии',
//     specialization: 'Информационные и автоматизированные системы обработки информации и управления',
//     degreeLength: 4,
//     educationForm: 'Очная',
//     finance: 'Бюджентная',
//     degreeLevel: 'Бакалавр',
//     enterYear: '2019/2020',
//     orders: [
//         'Приказ № 695-с от 10 сентября 2020 г. - «Об изменении учебной группы»',
//         'Приказ № 640-с от 26 августа 2020 г. - «О переводе на следующий курс (ликвидация задолженностей)»',
//         'Приказ № 873-с от 10 сентября 2019 г. - «О распределении по учебным группам»',
//         'Приказ № 585-ОД от 3 августа 2019 г. - «О зачислении»',
//     ],
// }

interface UserStore {
    currentUser: User | null
    token: UserToken | null
    error: string
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

        //TODO: Change mock do data when data is ready
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
        loading: useStore(getUserFx.pending),
        error: error,
    }
}

const login = createEvent<LoginData>()
const logout = createEvent()

forward({ from: login, to: getUserTokenFx })
forward({ from: getUserTokenFx.doneData, to: getUserFx })

//  In effector chat core-team describe something like this code (Perhaps a better solution can be found)
// TODO: ask about token expires (Looks like it won't expire)
const tokenInStorage = JSON.parse(localStorage.getItem('token') ?? 'null')

!!tokenInStorage && getUserFx(tokenInStorage)

const $userStore = createStore<UserStore>({
    currentUser: null,
    error: '',
    token: tokenInStorage,
})
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
