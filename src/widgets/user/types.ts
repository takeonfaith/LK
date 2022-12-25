export type UserType = 'student' | 'teacher'
import { Direction, Size } from '@ui/types'

export interface UserProps {
    type: UserType
    orientation?: Direction
    avatar?: string
    division?: string
    name: string
    loading?: boolean
    size?: Size
    isMe?: boolean
    checked?: boolean
    group?: string
    indexNumber?: number
    setChecked?: (value: boolean) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
