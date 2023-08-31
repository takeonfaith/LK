import { User } from '@api/model'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getStatusFormSuperiorRoom = (user: User) => {
    const StartDateSuperiorRoom = 'Aug 31 2023 12:00:00 GMT+0300'
    const EndDateSuperiorRoom = 'Sep 03 2023 12:00:00 GMT+0300'
    const currentTime = new Date()

    // if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom)) return 'Подача заявок открыта с 1 сентября до 3 сентября!'

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}

export default getStatusFormSuperiorRoom
