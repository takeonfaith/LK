import { alertsApi } from '@api'
import { useStore } from 'effector-react/compat'
import { createEffect, createEvent, createStore } from 'effector/compat'
import { Alert } from '@api/model/alert'

interface AlertsStore {
    alerts: Alert[] | null
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: AlertsStore = {
    alerts: [
        {
            id: 'id',
            dateAlert: 'Tue May 10 2022 02:04:03 GMT+0300 (Восточная Африка)',
            topicAlert:
                'Изменение размеров платы за пользование жилым помещением и платы за коммунальные услуги в студенческом городке для обучающихся на бюджетной основе по очной форме',
            contentAlert: 'Содержание',
        },
        {
            id: 'id',
            dateAlert: 'Tue April 10 2022 02:04:03 GMT+0300 (Восточная Африка)',
            topicAlert: 'Изучайте иностранные языки в рамках дополнительного образования!',
            contentAlert:
                'Уважаемые обучающиеся!\n' +
                '\n' +
                'Некоммерческий фонд развития современных интеграционных технологий в области культуры, образования и науки «Международные интеграционные технологии» при поддержке Департамента национальной политики и межрегиональных связей города Москвы реализует Полиформатный проект «Многонациональная Победа», который пройдет с 15 апреля по 15 мая 2022 года.\n' +
                '\n' +
                'Проект направлен на воспитание уважения к героическому прошлому многонационального народа, увековечение народного подвига в Великой отечественной войне 1941-1945гг, гармонизацию межнациональных отношений, укрепление мира и согласия между народами, формирование у молодежи и подрастающего поколения нравственных ценностей и патриотизма.\n' +
                '\n' +
                'В рамках проекта приглашаем Вас принять участие в народном марафоне «Вспомним всех поименно», который пройдет в социальной сети ВКонтакте и конкурсе рассказов в третий народный альманах «Незабытые истории Победы».\n' +
                '\n' +
                'Авторы публикаций ВКонтакте, набравших наибольшее количество лайков, будут приглашены на торжественную церемонию награждения победителей марафона, отмечены именным дипломом, который получат из рук людей, имеющих высшее звание «Герой России» за заслуги перед государством и народом.\n' +
                '\n' +
                'Все присланные участниками конкурса рассказы будут переданы на вечное хранение в Мультимедийный музейный комплекс «Дорога памяти» Главного Храма Вооруженных Сил России и в «Музей Победы» на Поклонной горе.',
        },
    ],
    error: null,
    completed: false,
}

const useAlerts = () => {
    return {
        data: useStore($alertsStore).alerts,
        loading: useStore(getAlertsFx.pending),
        error: useStore($alertsStore).error,
        completed: useStore($alertsStore).completed,
    }
}

const changeCompleted = createEvent<{ completed: boolean }>()

const getAlertsFx = createEffect(async (): Promise<Alert[]> => {
    try {
        const response = await alertsApi.get()

        return response.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const clearStore = createEvent()

const $alertsStore = createStore<AlertsStore>(DEFAULT_STORE)
    .on(getAlertsFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(getAlertsFx.doneData, (oldData, newData) => ({
        ...oldData,
        personalNotifications: newData,
    }))
    .on(getAlertsFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

export const selectors = {
    useAlerts,
}

export const effects = {
    getAlertsFx,
}
export const events = {
    changeCompleted,
    clearStore,
}
