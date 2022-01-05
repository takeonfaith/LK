import { IModules } from '@api/model'

const getCurrentDayString = (schedule: IModules | null, currentDay: number) => {
    return !!schedule ? Object.keys(schedule['0']).find((_, index) => index + 1 === currentDay) || 'sunday' : 'sunday'
}

export default getCurrentDayString
