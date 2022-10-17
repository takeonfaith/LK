import { User } from '@api/model'

const getStatusFormSuperiorRoom = (user: User) => {
    const StartDateSuperiorRoom = 'Mon Aug 29 2022 00:52:00 GMT+0300'
    const EndDateSuperiorRoom = 'Wed Aug 31 2022 12:00:00 GMT+0300'
    const currentTime = new Date()

    if (user.enterYear !== '2022/2023') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom))
        return 'Подача заявок открыта с 12:00 29 августа до 12:00 31 августа!'

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}

export default getStatusFormSuperiorRoom
