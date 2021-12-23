import { ISubject } from '@api/model'
import calcTimeLeft from './calc-time-left'

const calcNextSubjectTime = (lessons: ISubject[]) => {
    const timeToEverySubject = lessons.reduce((acc, lesson) => {
        if (calcTimeLeft(lesson.timeInterval) > 0) acc.push(calcTimeLeft(lesson.timeInterval))
        return acc
    }, [] as number[])

    return Math.min(...timeToEverySubject)
}

export default calcNextSubjectTime
