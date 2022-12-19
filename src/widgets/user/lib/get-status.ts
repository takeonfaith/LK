import { UserType } from '../types'

const getStatus = (isMe: boolean, type: UserType, division?: string, group?: string) => {
    return isMe
        ? 'Я'
        : type === 'teacher'
        ? 'Сотрудник' + (division ? ` • ${division}` : '')
        : 'Студент' + (group ? ` • Группа ${group}` : '')
}

export default getStatus
