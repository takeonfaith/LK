import React from 'react'
import { Button } from '@ui/button'
import { FiMessageCircle } from 'react-icons/fi'
import useModal from 'widgets/modal'
import { UserModal } from '../atoms'
import { UserProps } from 'widgets/user/types'
import getLettersColors from '@shared/lib/get-letters-colors'
import handleChangeAccount from '../../lib/handle-change-account'

type Props = Pick<
    UserProps,
    'finance' | 'educationForm' | 'degreeLevel' | 'course' | 'group' | 'token' | 'isMe' | 'avatar' | 'name'
>

const StudentModal = (props: Props) => {
    const { close } = useModal()
    const { token, name } = props
    const buttonBackgroundColor = `linear-gradient(45deg, ${getLettersColors(name, 'main')}, ${getLettersColors(
        name,
        'dark1',
    )})`

    return (
        <UserModal {...props} type="stud">
            {/* <Link to={`${CHAT_ROUTE}/${name}`}> */}
            {!token && (
                <Button
                    icon={<FiMessageCircle />}
                    text={'Написать'}
                    onClick={() => close()}
                    minWidth="100%"
                    width="100%"
                    isActive={false}
                />
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
