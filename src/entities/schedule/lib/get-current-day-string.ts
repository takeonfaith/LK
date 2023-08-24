import { IFullSchedule } from '@api/model'

const getCurrentDayString = (schedule: IFullSchedule | null, currentDay: number) => {
    return !!schedule && !!schedule.week
        ? Object.keys(schedule.week).find((_, index) => index + 1 === currentDay) || 'sunday'
        : !!schedule && !!schedule.semestr
        ? ''
        : 'sunday'
}

export default getCurrentDayString
