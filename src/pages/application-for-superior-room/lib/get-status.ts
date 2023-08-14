import { User } from '@api/model'

const getStatusFormSuperiorRoom = (user: User) => {
    const StartDateSuperiorRoom = 'Aug 15 2023 00:00:00 GMT+0300'
    const EndDateSuperiorRoom = 'Aug 16 2023 00:00:00 GMT+0300'
    const currentTime = new Date()

    if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom)) return 'Подача заявок открыта с 15 августа до  16 августа!'

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}

export default getStatusFormSuperiorRoom
