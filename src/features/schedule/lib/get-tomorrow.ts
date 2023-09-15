import { IWeekDays } from '@shared/constants'

const getTomorrow = () => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    const formattedDay = tomorrow.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    return formattedDay === 'sunday' ? 'monday' : (formattedDay as keyof IWeekDays)
}

export default getTomorrow
