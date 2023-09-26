import { type DayCalendarEvent } from '@shared/ui/calendar'
import calcTimeLeft from '@shared/lib/dates/calc-time-left'

const calcNextSubjectTime = (lessons: DayCalendarEvent[] | null | undefined) => {
    if (!lessons) return Infinity

    const timeToEverySubject = lessons.reduce((acc, lesson) => {
        const timeLeft = calcTimeLeft(lesson.startTime)
        if (timeLeft > 0) acc.push(timeLeft)
        return acc
    }, [] as number[])

    return Math.min(...timeToEverySubject)
}

export default calcNextSubjectTime
