import { IModules } from '@api/model'

const getCurrentDayString = (schedule: IModules | null, currentDay: number) => {
    return !!schedule && !!schedule['0']
        ? Object.keys(schedule['0']).find((_, index) => index + 1 === currentDay) || 'sunday'
        : !!schedule && !!schedule['2']
        ? ''
        : 'sunday'
}

export default getCurrentDayString
