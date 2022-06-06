import { CenterPage, Input, Message, SubmitButton, Title } from '@ui/atoms'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import React, { useState } from 'react'

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
                <GoBackButton />
                <Title size={4} align="left">
                    Забыли пароль ЕУЗ
                </Title>
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
