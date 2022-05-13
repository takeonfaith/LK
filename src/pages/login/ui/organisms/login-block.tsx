import { FORGOT_PASSWORD_ROUTE } from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { userModel } from '@entities/user'
import { Button, LinkButton, Message, Title } from '@ui/atoms'
import Input from '@ui/atoms/input'
import SubmitButton from '@ui/atoms/submit-button'
import BlockWrapper from '@ui/block/styles'
import useTheme from '@utils/hooks/use-theme'
import React, { useState } from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const LoginBlock = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [capslock, setCapslock] = useState(false)
    const loginFunc = userModel.events.login
    useTheme()
    const { loading, error } = userModel.selectors.useUser()

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        setCapslock(e.getModifierState('CapsLock'))

        if (e.key === 'Enter') {
            loginFunc({ login, password })
        }
    }

    return (
        <BlockWrapper
            height="fit-content"
            orientation="vertical"
            gap="20px"
            maxWidth="500px"
            onKeyDown={handleKeyPress}
        >
            <Title size={2} align="left">
                Вход в личный кабинет
            </Title>
            <LinkButton
                text={'Перейти к старому дизайну'}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="transparent"
                icon={<FiArrowLeftCircle />}
                align="left"
                width="100%"
                href={`${OLD_LK_URL}/index.php`}
            />
            <Message type="failure" visible={!!error} title="Ошибка">
                {error}
            </Message>
            <Input value={login} setValue={setLogin} title="Логин" placeholder="Введите логин" />
            <Input
                value={password}
                setValue={setPassword}
                title="Пароль"
                placeholder="Введите пароль"
                type="password"
                alertMessage={capslock ? 'Включен Capslock' : undefined}
            />
            <Link to={FORGOT_PASSWORD_ROUTE} tabIndex={-1}>
                <Button
                    text="Забыли пароль от ЕУЗ?"
                    background="transparent"
                    height="20px"
                    textColor="var(--reallyBlue)"
                />
            </Link>
            <SubmitButton
                text="Вход"
                action={() => loginFunc({ login, password })}
                isLoading={loading}
                completed={false}
                setCompleted={() => null}
                isActive={!!password && !!login}
            />
        </BlockWrapper>
    )
}

export default LoginBlock
