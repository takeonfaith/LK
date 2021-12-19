import { User } from '@api/model'
import { Title } from '@ui/atoms'
import React, { useCallback } from 'react'
import { FiInfo } from 'react-icons/fi'
import { useModal } from '../../../../widgets/modal'
import createFullName from '../../lib/create-full-name'
import { Description, MoreInfoLink } from '../atoms/more-info'
import { Section } from '../atoms/section'
import Avatar from '../molecules/avatar'
import MoreUserInfo from './more-user-info'

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
                <Title size={2} align="left">
                    {createFullName(params)}
                </Title>
                <div className="short-status">
                    <p>Статус: {status}</p>
                    <p>Курс: {course}</p>
                    <p>Дата рождения: {birthday}</p>
                    <MoreInfoLink onClick={handleNodel}>
                        <FiInfo />
                        <span>Подробная информация</span>
                    </MoreInfoLink>
                </div>
            </Description>
        </Section>
    )
}
