import { Colors } from '@shared/constants/consts'
import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'
import { Button, Input, Message, SubmitButton, Title } from '@ui/atoms'
import { FiCamera, FiLogOut } from 'react-icons/fi'
import React, { useEffect } from 'react'
import Avatar from '@features/home/ui/molecules/avatar'
import styled from 'styled-components'
import { useModal } from 'widgets'
import ChangeAvatar from './change-avatar'
import { settingsAccountModel } from '@entities/settings-account'

const AccountStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 16px;
`

const ChangeAvatarWrapper = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #00000056;
        z-index: 1;
    }

    svg {
        position: absolute;
        width: 45px;
        height: 45px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        color: #fff;
    }
`

const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`

const Account = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const logout = userModel.events.logout
    const { open } = useModal()
    const {
        email: { data },
        adPass: { data: adPass },
    } = settingsAccountModel.selectors.useData()

    const alertMessage = adPass.length < 7 ? 'Длина пароля должна быть больше 7' : undefined

    if (!user) return null

    useEffect(() => {
        settingsAccountModel.events.email.changeEmail('takeonfaith6@gmail.com')
    }, [])

    const handleChangeAvatar = () => {
        open(<ChangeAvatar />)
    }

    return (
        <AccountStyled>
            <Title size={1} align="left">
                Аккаунт
            </Title>
            <ChangeAvatarWrapper onClick={handleChangeAvatar}>
                <FiCamera />
                <Avatar name={user?.fullName} avatar={user?.avatar} marginRight="0" />
            </ChangeAvatarWrapper>
            <FieldWrapper>
                <Input
                    width="300px"
                    placeholder="email"
                    value={data}
                    setValue={settingsAccountModel.events.email.changeEmail}
                />
                <SubmitButton
                    height="36px"
                    width="200px"
                    text="Изменить почту"
                    isLoading={false}
                    completed={false}
                    action={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    setCompleted={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </FieldWrapper>
            <Message type="info" title="Требования к новому паролю" maxWidth="508px">
                1. Минимальная длина пароля 7 знаков;
                <br />
                2. Пароль не должен содержать имени учетной записи пользователя или частей полного имени пользователя
                длиной более двух рядом стоящих знаков;
                <br />
                3. Допустимые символы: латинские заглавные и строчные буквы, цифры, отличающиеся от букв и цифр знаки
                (например, !, $, #, %).
            </Message>
            <FieldWrapper>
                <Input
                    width="300px"
                    placeholder="Пароль"
                    value={adPass}
                    alertMessage={alertMessage}
                    type="password"
                    setValue={settingsAccountModel.events.email.changeEmail}
                />
                <SubmitButton
                    height="36px"
                    width="200px"
                    text="Изменить пароль"
                    isLoading={false}
                    completed={false}
                    action={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    setCompleted={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            </FieldWrapper>
            <Button
                icon={<FiLogOut />}
                onClick={() =>
                    confirmModel.events.evokeConfirm({
                        message: 'Вы точно хотите выйти из аккаунта?',
                        onConfirm: logout,
                    })
                }
                background="transparent"
                textColor={Colors.red.main}
                text="Выйти из аккаунта"
            />
        </AccountStyled>
    )
}

export default Account
