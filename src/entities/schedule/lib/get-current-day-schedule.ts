import { ISubject } from '@api/model'
import { getFullEndDate } from './get-full-end-date'
import { getFullStartDate } from './get-full-start-date'

const getCurrentDaySubjects = (daySubjects: ISubject[] | null, fullWeekDay: Date): ISubject[] =>
    (daySubjects ?? []).filter((subject) => {
        const [startDate, endDate] = subject.dateInterval.split('-').map((part) => part.trim())

        const fullStartDate = getFullStartDate(startDate)
        const fullEndDate = getFullEndDate(endDate, startDate)
        return fullWeekDay >= fullStartDate && fullWeekDay <= (fullEndDate ?? fullStartDate)
    })

export default getCurrentDaySubjects
