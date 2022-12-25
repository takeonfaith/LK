import React from 'react'
import { Button } from '@ui/button'
import { FiMessageCircle } from 'react-icons/fi'
import useModal from 'widgets/modal'
import { UserModal } from '../atoms'

interface Props {
    name: string
    avatar?: string
    isMe: boolean
    group?: string
}

const StudentModal = ({ name, avatar, isMe, group }: Props) => {
    const { close } = useModal()

    return (
        <UserModal avatar={avatar} name={name} isMe={isMe} type="student" group={group}>
            {/* <Link to={`${CHAT_ROUTE}/${name}`}> */}
            <Button
                icon={<FiMessageCircle />}
                text={'Написать'}
                onClick={() => close()}
                minWidth="100%"
                width="100%"
                isActive={false}
            />
            {/* </Link> */}
        </UserModal>
    )
}

export default StudentModal
