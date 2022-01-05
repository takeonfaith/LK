import { ISubject } from '@api/model'
import calcTimeLeft from '@utils/calc-time-left'

const calcNextSubjectTime = (lessons: ISubject[]) => {
    const timeToEverySubject = lessons.reduce((acc, lesson) => {
        const timeLeft = calcTimeLeft(lesson.timeInterval)
        if (timeLeft > 0) acc.push(timeLeft)
        return acc
    }, [] as number[])

    return Math.min(...timeToEverySubject)
}

export default calcNextSubjectTime
