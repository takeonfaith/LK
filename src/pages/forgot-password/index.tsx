import { LOGIN_ROUTE } from '@app/routes/general-routes'
import { Button, CenterPage, Input, Message, SubmitButton } from '@ui/atoms'
import Block from '@ui/block'
import React, { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    return (
        <CenterPage background="var(--theme)">
            <Block
                height="fit-content"
                maxWidth="500px"
                orientation="vertical"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap="15px"
            >
                <Link to={LOGIN_ROUTE}>
                    <Button
                        text="Назад"
                        icon={<FiArrowLeft />}
                        textColor="var(--reallyBlue)"
                        background="transparent"
                        height="20px"
                    />
                </Link>
                <Message type="info" title="Восстановление доступа через ЕУЗ">
                    Данный сервис позволит сбросить пароль для единой учетной записи (ЕУЗ). Ссылка для сброса пароля
                    будет отправлена на вашу почту. Восстановление доступа к личному кабинету возможно только в том
                    случае, если в аккаунте был указан адрес электронной почты и вы заходили в него по ЕУЗ. В остальных
                    случаях обращайтесь на почту help@mospolytech.ru, при этом укажите в сообщении свои ФИО полностью,
                    дату рождения, место работы или учебную группу.
                </Message>
                <Input
                    value={email}
                    setValue={setEmail}
                    title="E-mail, указанный в личном кабинете:"
                    placeholder="E-mail, указанный в личном кабинете:"
                />
                <SubmitButton
                    text="Восстановить доступ"
                    action={() => null}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={!!email.length}
                />
            </Block>
        </CenterPage>
    )
}

export default ForgotPasswordPage
