import { isValidDate } from './is-valid-date'

export const getMinutesFromDate = (date: Date | undefined | null): number => {
    if (!date || !isValidDate(date)) return 0

    return date.getHours() * 60 + date.getMinutes()
}
