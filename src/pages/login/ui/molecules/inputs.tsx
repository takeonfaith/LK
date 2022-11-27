import { userModel } from '@entities/user'
import useLogin from '@pages/login/hooks/use-login'
import { Input, SubmitButton } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import List from '@ui/list'
import { Message } from '@ui/message'
import Subtext from '@ui/subtext'
import { Title } from '@ui/title'
import React from 'react'

const Inputs = () => {
    const { loading, error, data } = userModel.selectors.useUser()
    const { handleKeyPress, handleSavePassword, handleLogin, password, setPassword, capsLock, login, setLogin } =
        useLogin()
    return (
        <div className="right" onKeyDown={handleKeyPress}>
            <List gap={16} horizontalAlign="center" verticalAlign="space-between" height="100%" scroll={false}>
                <Title size={3} align="left">
                    Личный кабинет
                </Title>
                <List gap={16} horizontalAlign="center" scroll={false}>
                    <Title size={4} align="left">
                        Вход
                    </Title>
                    <Subtext>Вход в личный кабинет происходит через единую учетную запись (ЕУЗ)</Subtext>
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
                    <Checkbox text="Оставаться в системе" checked={data.savePassword} setChecked={handleSavePassword} />
                </List>
                <SubmitButton
                    text="Вход"
                    action={handleLogin}
                    isLoading={loading}
                    completed={false}
                    setCompleted={() => null}
                    isActive={!!password && !!login}
                />
            </List>
        </div>
    )
}

export default Inputs
