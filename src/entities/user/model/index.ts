import { userApi } from '@api'
import { LoginData } from '@api/user-api'
import { createEffect, createEvent, createStore, forward } from 'effector'
import { useStore } from 'effector-react'

export const NO_USER_ID = '-1'

export interface User {
    id: string
    name: string
    status: string
    avatar: string
    course: number
    surname: string
    birthday: string
    patronymic: string
    orders: string[]
    sex: boolean
    code: string
    faculty: string
    group: string
    specialty: string
    specialization: string
    degreeLength: number
    educationForm: string
    finance: string
    degreeLevel: string
    enterYear: string
}

const mock: User = {
    id: '0',
    status: 'Учится',
    course: 2,
    name: 'Константин',
    surname: 'Иванов',
    patronymic: 'Сергеевич',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    birthday: '31.07.2001',
    sex: true,
    code: 'ИПИТ-19-0075',
    faculty: 'Институт принтмедиа',
    group: '191-722',
    specialty: '09.03.02 Информационные системы и технологии',
    specialization: 'Информационные и автоматизированные системы обработки информации и управления',
    degreeLength: 4,
    educationForm: 'Очная',
    finance: 'Бюджентная',
    degreeLevel: 'Бакалавр',
    enterYear: '2019/2020',
    orders: [
        'Приказ № 695-с от 10 сентября 2020 г. - «Об изменении учебной группы»',
        'Приказ № 640-с от 26 августа 2020 г. - «О переводе на следующий курс (ликвидация задолженностей)»',
        'Приказ № 873-с от 10 сентября 2019 г. - «О распределении по учебным группам»',
        'Приказ № 585-ОД от 3 августа 2019 г. - «О зачислении»',
    ],
}

interface UserStore {
    currentUser: User | null
    error: string
}

const getUserFx = createEffect(async (params: LoginData): Promise<User> => {
    let data
    try {
        data = await userApi.getUser(params)
    } catch (error) {
        throw new Error(error as string)
    }

    //TODO: Change mock do data when data is ready
    return mock
})

const useUser = () => {
    return {
        data: useStore($userStore).currentUser,
        loading: useStore(getUserFx.pending),
        error: useStore($userStore).error,
    }
}

const login = createEvent<LoginData>()
const logout = createEvent()

forward({ from: login, to: getUserFx })

const $userStore = createStore<UserStore>({
    currentUser: null,
    error: '',
})
    .on(getUserFx.doneData, (old, newData) => ({
        ...old,
        currentUser: newData,
    }))
    .on(getUserFx.failData, (_, newData) => ({
        error: newData.message,
        currentUser: null,
    }))
    .on(logout, () => ({
        error: '',
        currentUser: null,
    }))

export const selectors = {
    useUser,
}

export const events = {
    login,
    logout,
}
