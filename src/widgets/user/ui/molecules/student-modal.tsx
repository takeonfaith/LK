import React from 'react'
import { Button } from '@ui/button'
import { FiMessageCircle } from 'react-icons/fi'
import useModal from 'widgets/modal'
import { UserModal } from '../atoms'
import { UserProps } from 'widgets/user/types'

type Props = Pick<
    UserProps,
    'finance' | 'educationForm' | 'degreeLevel' | 'course' | 'group' | 'token' | 'isMe' | 'avatar' | 'name'
>

const StudentModal = (props: Props) => {
    const { close } = useModal()
    return (
        <UserModal {...props} type="stud">
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
