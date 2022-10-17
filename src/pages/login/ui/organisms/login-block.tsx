import {
    CANT_ACCESS_ROUTE,
    FEEDBACK_ROUTE,
    GET_YOUR_LOGIN_ROUTE,
    MEMO_FRESHMEN_ROUTE,
    MEMO_TEACHER_ROUTE,
} from '@app/routes/general-routes'
import { OLD_LK_URL } from '@consts'
import { userModel } from '@entities/user'
import { Button, LinkButton, Message, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import Input from '@ui/atoms/input'
import SubmitButton from '@ui/atoms/submit-button'
import BlockWrapper from '@ui/block/styles'
import List from '@ui/list'
import useQueryParams from '@utils/hooks/use-query-params'
import useTheme from '@utils/hooks/use-theme'
import React, { useEffect, useState } from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const LoginBlock = () => {
    const queryParams = useQueryParams()
    const queryLogin = queryParams.get('login')
    const queryPassword = queryParams.get('password')

    const [login, setLogin] = useState(queryLogin ?? '')
    const [password, setPassword] = useState(queryPassword ?? '')
    const [capsLock, setCapsLock] = useState(false)
    const loginFunc = userModel.events.login
    useTheme()
    const { loading, error, data } = userModel.selectors.useUser()

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        setCapsLock(e.getModifierState('CapsLock'))

        if (e.key === 'Enter') {
            loginFunc({ login, password })
        }
    }

    useEffect(() => {
        queryLogin && queryPassword && loginFunc({ login: queryLogin, password: queryPassword })
    }, [queryLogin, queryPassword])

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
            <Message type="failure" visible={!!error}>
                {error}
            </Message>
            <Message type="success" visible={data?.isAuthenticated ?? false}>
                Вы вошли в аккаунт
            </Message>
            <Input value={login} setValue={setLogin} title="Логин" placeholder="Введите логин" />
            <Input
                value={password}
                setValue={setPassword}
                title="Пароль"
                placeholder="Введите пароль"
                type="password"
                alertMessage={capsLock ? 'Включен Capslock' : undefined}
            />
            <SubmitButton
                text="Вход"
                action={() => loginFunc({ login, password })}
                isLoading={loading}
                completed={false}
                setCompleted={() => null}
                isActive={!!password && !!login}
            />
            <List padding="4px" scroll={false} horizontalAlign="center">
                <Checkbox
                    text="Оставаться в системе"
                    checked={data.savePassword}
                    setChecked={(value) => {
                        userModel.events.changeSavePassword({ savePassword: value })
                    }}
                />
                <List scroll={false} direction="horizontal" padding="4px" horizontalAlign="center">
                    {/*<Link to={FORGOT_PASSWORD_ROUTE} tabIndex={-1}>*/}
                    {/*    <Button*/}
                    {/*        text="Забыли пароль от ЕУЗ?"*/}
                    {/*        height="25px"*/}
                    {/*        background="transparent"*/}
                    {/*        textColor="var(--reallyBlue)"*/}
                    {/*    />*/}
                    {/*</Link>*/}
                    <Link to={FEEDBACK_ROUTE} tabIndex={-1}>
                        <Button
                            text="Обратная связь"
                            height="25px"
                            background="transparent"
                            textColor="var(--reallyBlue)"
                            width="144px"
                        />
                    </Link>
                    <Link to={GET_YOUR_LOGIN_ROUTE} tabIndex={-1}>
                        <Button
                            text="Узнать свой логин ЕУЗ"
                            height="25px"
                            background="transparent"
                            textColor="var(--reallyBlue)"
                        />
                    </Link>
                </List>
                <Link to={MEMO_FRESHMEN_ROUTE} tabIndex={-1}>
                    <Button
                        text="Вниманию студентов 1 курса!"
                        height="25px"
                        background="transparent"
                        textColor="var(--reallyBlue)"
                    />
                </Link>
                <Link to={MEMO_TEACHER_ROUTE} tabIndex={-1}>
                    <Button
                        text="Вниманию сотрудников!"
                        height="25px"
                        background="transparent"
                        textColor="var(--reallyBlue)"
                    />
                </Link>
                <Link to={CANT_ACCESS_ROUTE} tabIndex={-1}>
                    <Button
                        text="Если не получается войти в Личный кабинет"
                        height="25px"
                        background="transparent"
                        textColor="var(--red)"
                    />
                </Link>
            </List>
        </BlockWrapper>
    )
}

export default LoginBlock
