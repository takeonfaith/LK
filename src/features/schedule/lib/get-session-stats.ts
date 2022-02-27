import { ISessionSchedule } from '@api/model'

const getSessionStats = (session: ISessionSchedule | null): { tests: number; exams: number; cp: number } => {
    if (!!session) {
        return Object.values(session).reduce(
            (acc, day) => {
                let lastName = ''
                day.lessons?.forEach((lesson) => {
                    if (lastName !== lesson.name) {
                        if (lesson.name.includes('(Экзамен)')) acc.exams++
                        else if (lesson.name.includes('(Зачет)')) acc.tests++
                        else if (lesson.name.includes('(КП)')) acc.cp++
                        lastName = lesson.name
                    }
                })
                return acc
            },
            { tests: 0, exams: 0, cp: 0 },
        )
    } else return { tests: 0, exams: 0, cp: 0 }
}

export default getSessionStats
