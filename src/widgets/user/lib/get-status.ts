import { UserType } from '../types'

const getStatus = (isMe: boolean, type: UserType, division?: string, group?: string) => {
    const normalizedDivision = division ? ` • ${division}` : ''
    const normalizedGroup = group ? ` • ${group}` : ''
    return isMe ? 'Я' : type === 'teacher' ? 'Сотрудник' + normalizedDivision : 'Студент' + normalizedGroup
}
export default getStatus
