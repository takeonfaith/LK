import { SCHEDULE_FILTER_ROUTE } from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import getLettersColors from '@shared/lib/get-letters-colors'
import { Button } from '@ui/button'
import React from 'react'
import { FiClock, FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import { UserProps } from 'widgets/user/types'
import handleChangeAccount from '../../lib/handle-change-account'
import { UserModal } from '../atoms'

type Props = Pick<
    UserProps,
    'finance' | 'educationForm' | 'degreeLevel' | 'course' | 'group' | 'token' | 'isMe' | 'avatar' | 'name'
>

const StudentModal = (props: Props) => {
    const { close } = useModal()
    const { token, name, group } = props
    const buttonBackgroundColor = `linear-gradient(45deg, ${getLettersColors(name, 'main')}, ${getLettersColors(
        name,
        'dark1',
    )})`

    return (
        <UserModal {...props} type="stud">
            {/* <Link to={`${CHAT_ROUTE}/${name}`}> */}
            {!token && (
                <>
                    {group && (
                        <Link
                            to={getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                                page: 'current',
                                filter: group,
                            })}
                        >
                            <Button
                                icon={<FiClock />}
                                text={'Расписание'}
                                onClick={() => close()}
                                width="100%"
                                background="var(--theme-4)"
                            />
                        </Link>
                    )}
                    <Button
                        icon={<FiMessageCircle />}
                        text={'Написать'}
                        onClick={() => close()}
                        width="100%"
                        background="var(--theme-4)"
                        isActive={false}
                    />
                </>
            )}
            {/* </Link> */}
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

export default StudentModal
