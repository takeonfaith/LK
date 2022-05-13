import { User } from '@api/model'
import { Title } from '@ui/atoms'
import List from '@ui/list'
import React, { useCallback } from 'react'
import { FiInfo } from 'react-icons/fi'
import { useModal } from 'widgets'
import createFullName from '../../lib/create-full-name'
import { Description, MoreInfoLink } from '../atoms/more-info'
import Avatar from '../molecules/avatar'
import MoreUserInfo from './more-user-info'

export default UserInfo

interface Props {
    user: User
}

function UserInfo({ user }: Props) {
    const { avatar, status, course, birthday, subdivisions, ...params } = user

    const { open } = useModal()

    const handleNodel = useCallback(() => {
        open(<MoreUserInfo user={user} />)
    }, [open])

    return (
        <List direction="horizontal">
            <Avatar
                name={createFullName({ name: user.name, patronymic: user.patronymic, surname: user.surname })}
                avatar={avatar}
            />
            <Description>
                <Title size={2} align="left">
                    {createFullName(params)}
                </Title>
                <div className="short-status">
                    {!!status && <p>Статус: {status}</p>}
                    {!!course && <p>Курс: {course}</p>}
                    {!!subdivisions?.length && (
                        <p>
                            Сведения о трудоустройстве:{' '}
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
        </List>
    )
}
