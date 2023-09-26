import { getWeekDayFromDate } from '@shared/lib/dates/get-weekday-from-date'

const getTomorrow = () => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    const formattedDay = getWeekDayFromDate(tomorrow)
    return formattedDay === 'sunday' ? 'monday' : formattedDay
}

export default getTomorrow
