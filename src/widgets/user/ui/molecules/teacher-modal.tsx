import { SCHEDULE_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import { UserModal } from '../atoms'

interface Props {
    name: string
    avatar?: string
    isMe: boolean
    division?: string
}

const TeacherModal = ({ name, avatar, isMe, division }: Props) => {
    const { close } = useModal()

    return (
        <UserModal avatar={avatar} name={name} type={'teacher'} isMe={isMe} division={division}>
            <Link to={`${SCHEDULE_ROUTE}/${name}`}>
                <Button
                    icon={<FiClock />}
                    text={'Расписание'}
                    onClick={() => {
                        close()
                    }}
                    width="130px"
                    background={Colors.blue.light}
                    textColor="#fff"
                />
            </Link>
        </UserModal>
    )
}

export default TeacherModal
