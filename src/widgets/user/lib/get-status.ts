import { UserStatus } from '@shared/api/model'

const getStatus = (isMe: boolean, type: UserStatus, division?: string, group?: string) => {
    const result = [isMe ? 'Я' : type === 'staff' ? 'Сотрудник' : 'Студент']
    if (isMe) return result
    if (division) result.push(division)
    if (group) result.push(`${group}`)
    return result
}
export default getStatus
