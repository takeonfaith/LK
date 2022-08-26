import { CenterPage, Input, Message, SubmitButton, Title } from '@ui/atoms'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import React, { useState } from 'react'
import useTheme from '@utils/hooks/use-theme'
import { userModel } from '@entities/user'
import styled from 'styled-components'

const ADNameElement = styled.span`
    display: flex;
    margin: 0 auto;
    gap: 5px;
    text-align: center;
`

const GetYourLoginPage = () => {
    const [fio, setFio] = useState('')
    const [passportNumber, setPassportNumber] = useState('')
    useTheme()
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const {
        data: { loginEuz },
    } = userModel.selectors.useUser()

    const getADName = () => {
        setLoading(true)
        userModel.effects.getLoginEuzFx({ fio: fio, pn: passportNumber }).then(() => setLoading(false))
    }

    return (
        <CenterPage>
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
                    Узнать свой логин ЕУЗ
                </Title>
                <Message type="info" title="Получение логина ЕУЗ">
                    Для того, чтобы узнать свой логин единой учетной записи, укажите ваши ФИО полностью (например,
                    Иванов Петр Иванович) и 4 последние цифры номера паспорта:
                </Message>
                <Input value={fio} setValue={setFio} title="ФИО полностью" placeholder="Иванов Иван Иванович" />
                <Input
                    value={passportNumber}
                    setValue={setPassportNumber}
                    title="Последние 4 цифры номера паспорта"
                    placeholder="1234"
                />
                <SubmitButton
                    text="Узнать логин ЕУЗ"
                    action={() => getADName()}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={!!fio.length && passportNumber.length === 4}
                    width={'150px'}
                />
                {!!loginEuz && (
                    <ADNameElement>
                        {loginEuz.split(':')[0]} <strong>{loginEuz.split(':')[1]}</strong>
                    </ADNameElement>
                )}
            </Block>
        </CenterPage>
    )
}

export default GetYourLoginPage
