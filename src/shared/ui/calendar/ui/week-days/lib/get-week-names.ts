import { IWeekDays, WEEK_DAYS } from '@shared/consts'
import { getMonday } from './get-monday'

export const getWeekNames = () => {
    const day = getMonday(new Date())
    const result = Object.keys(WEEK_DAYS).reduce((acc, el) => {
        acc[WEEK_DAYS[el as keyof IWeekDays].short] = ''
        return acc
    }, {} as Record<string, string>)

    for (let i = 0; i < 6; i++) {
        const dayName = day.toLocaleDateString('ru-RU', { day: '2-digit' })
        day.setDate(day.getDate() + 1)
        result[Object.keys(result)[i] as keyof typeof result] = dayName
    }

    return result
}
