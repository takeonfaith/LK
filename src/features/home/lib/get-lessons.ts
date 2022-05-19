import { IModules, IWeekSchedule } from '@api/model'
import localizeDate from '@utils/localize-date'

const getLessons = (schedule: IModules | null, currentDayString: string) => {
    const currentModule = !!schedule ? (!!schedule['0'] ? '0' : !!schedule['1'] ? '1' : schedule['2'] ? '2' : '0') : '0'
    // console.log(
    //     currentModule !== '2'
    //         ? !!schedule
    //             ? schedule?.[currentModule]?.[currentDayString as keyof IWeekSchedule]?.lessons || []
    //             : null
    //         : schedule?.[currentModule]?.[localizeDate(new Date(), 'weird')]?.lessons || [],
    // )

    return currentModule !== '2'
        ? !!schedule
            ? schedule?.[currentModule]?.[currentDayString as keyof IWeekSchedule]?.lessons || []
            : null
        : schedule?.[currentModule]?.[localizeDate(new Date(), 'weird')]?.lessons || []
}

export default getLessons
