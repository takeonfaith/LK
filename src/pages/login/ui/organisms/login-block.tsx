import React, { useState } from 'react'
import styled from 'styled-components'
import { userModel } from '@entities/user'
import useTheme from '@utils/hooks/use-theme'
import { Title } from '@ui/atoms'
import Input from '@ui/atoms/input'
import SubmitButton from '@ui/atoms/submit-button'
import Themes from '@ui/colors'
import ErrorMessage from '../atoms/error-message'

const LoginBlockWrapper = styled.div<{ theme: any }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    background: var(--theme);
    color: var(--text);
    box-shadow: 0 0 100px #0000004e;
    border-radius: 8px;
    padding: 20px;
    row-gap: 20px;

    @media (max-width: 1000px) {
        border-radius: 0;
        box-shadow: none;
        background: transparent;
        height: 100%;
        justify-content: center;
    }
`

const LoginBlock = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const loginFunc = userModel.events.login
    const { theme } = useTheme()
    const { loading, error } = userModel.selectors.useUser()

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            loginFunc({ login, password })
        }
    }

    return (
        <LoginBlockWrapper theme={Themes[theme]} onKeyPress={handleKeyPress}>
            <Title size={2} align="left">
                Вход в личный кабинет
            </Title>
            <ErrorMessage message={error} />
            <Input value={login} setValue={setLogin} title="Логин" placeholder="Введите логин" />
            <Input
                value={password}
                setValue={setPassword}
                title="Пароль"
                placeholder="Введите пароль"
                type="password"
            />
            <SubmitButton
                text="Вход"
                action={() => loginFunc({ login, password })}
                isLoading={loading}
                completed={false}
                setCompleted={() => null}
                isActive={!!password && !!login}
            />
        </LoginBlockWrapper>
    )
}

export default LoginBlock
