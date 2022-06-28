import { Participant } from '@api/model/project-activites'
import normalizeString from '@utils/normalize-string'

export function search(value: string, subject: Participant[]) {
    return subject.filter((subject) => normalizeString(subject.name).includes(normalizeString(value)))
}
