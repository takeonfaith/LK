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
    const { avatar, status, course, birthday, subdivisions, ...params } = user

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
                    {!!status && <p>Статус: {status}</p>}
                    {!!course && <p>Курс: {course}</p>}
                    {!!subdivisions?.length && (
                        <p>
                            Сведения об трудоусторйстве:{' '}
                            {subdivisions?.map((t, index) => (
                                <div key={index}>{`${index + 1})${t.subdivision}`}</div>
                            ))}
                        </p>
                    )}
                    <p style={!!subdivisions?.length ? { marginTop: 10 } : undefined}>Дата рождения: {birthday}</p>
                    <MoreInfoLink onClick={handleNodel}>
                        <FiInfo />
                        <span>Подробная информация</span>
                    </MoreInfoLink>
                </div>
            </Description>
        </Section>
    )
}
