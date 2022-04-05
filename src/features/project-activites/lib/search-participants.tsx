import { Participant } from '@api/model/project-activites'

export function Search(value: string, subject: Participant[]) {
    return subject.filter((subject) => subject.name.includes(value))
}
