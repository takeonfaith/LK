import React, { useCallback } from 'react'
import { FiHelpCircle } from 'react-icons/fi'

import Avatar from '../molecules/avatar'
import { useModal } from '../../../modal'
import { Section } from '../atoms/section'
import MoreUserInfo from './more-user-info'
import { Description, MoreInfoLink } from '../atoms/more-info'
import { Title } from '../../../../shared/ui/atoms'
import { User } from '../../../../entities/user/model'
import createFullName from '../../lib/create-full-name'

export default UserInfo

interface Props {
    user: User
}

function UserInfo({ user }: Props) {
    const { avatar, status, course, birthday, ...params } = user

    const { toggle } = useModal(<MoreUserInfo user={user} />)

    const handleNodel = useCallback(
        (e) => {
            toggle(e)
        },
        [toggle],
    )

    return (
        <Section>
            <Avatar avatar={avatar} />
            <Description>
                <Title size={2}>{createFullName(params)}</Title>
                <div className="short-status">
                    <p>Статус: {status}</p>
                    <p>Курс: {course}</p>
                    <p>Дата рождения: {birthday}</p>
                    <MoreInfoLink onClick={handleNodel}>
                        <FiHelpCircle />
                        <span>Подробная информация</span>
                    </MoreInfoLink>
                </div>
            </Description>
        </Section>
    )
}
