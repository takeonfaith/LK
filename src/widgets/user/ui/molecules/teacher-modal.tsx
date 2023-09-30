import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import handleChangeAccount from 'widgets/user/lib/handle-change-account'
import { UserProps } from 'widgets/user/types'
import { UserModal } from '../atoms'

type Props = Pick<UserProps, 'isMe' | 'token' | 'name' | 'division' | 'avatar'>

const TeacherModal = (props: Props) => {
    const { close } = useModal()
    const { token, name } = props
    const buttonBackgroundColor = `linear-gradient(45deg, ${getLettersColors(name, 'dark1')}, ${getLettersColors(
        name,
        'main',
    )})`

    return (
        <UserModal type="staff" {...props}>
            {!token && (
                <>
                    <Link
                        to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                            page: 'current',
                            filter: name,
                        })}
                    >
                        <Button
                            icon={<FiClock />}
                            text={'Расписание'}
                            onClick={() => {
                                close()
                            }}
                            width="100%"
                        />
                    </Link>
                    <Button
                        icon={<FiMessageCircle />}
                        text={'Написать'}
                        onClick={() => close()}
                        width="100%"
                        isActive={false}
                    />
                </>
            )}
            {token && (
                <Button
                    text="Войти в аккаунт"
                    width="100%"
                    textColor="#fff"
                    background={buttonBackgroundColor}
                    onClick={handleChangeAccount(token)}
                />
            )}
        </UserModal>
    )
}

export default TeacherModal
