import { StudentAccount, UserStatus } from '@shared/api/model'
import { Direction, Size } from '@ui/types'

export type UserProps = StudentAccount & {
    type: UserStatus
    orientation?: Direction
    token?: string
    avatar?: string
    division?: string
    name: string
    loading?: boolean
    size?: Size
    isMe?: boolean
    checked?: boolean
    indexNumber?: number
    setChecked?: (value: boolean) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
