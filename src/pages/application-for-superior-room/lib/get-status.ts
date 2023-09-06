import { User } from '@api/model'

export const StartDateSuperiorRoom = 'Sep 07 2023 12:00:00 GMT+0300'
export const EndDateSuperiorRoom = 'Sep 08 2023 12:00:00 GMT+0300'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatusFormSuperiorRoom = (user: User) => {
    const currentTime = new Date()

    // if (user.enterYear !== '2023/2024') return 'Форма доступна только для студентов 1 курса'

    if (currentTime < new Date(StartDateSuperiorRoom))
        return 'Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!'

    if (currentTime > new Date(EndDateSuperiorRoom)) return 'Подача заявок закрыта'

    return ''
}
