import { userModel } from '@entities/user'
import { CenterPage, Input, Message, SubmitButton, Title } from '@ui/atoms'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import useTheme from '@utils/hooks/use-theme'
import { useStore } from 'effector-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { USER_NOT_FOUND } from './config/ad-result-status'

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
    const loading = useStore(userModel.effects.getLoginEuzFx.pending)
    const [completed, setCompleted] = useState(false)
    const {
        data: { loginEuz },
    } = userModel.selectors.useUser()

    const getADName = () => {
        userModel.effects.getLoginEuzFx({ fio: fio, pn: passportNumber })
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            getADName()
        }
    }

    const getADNameElements = () => {
        const euzLogins = loginEuz!.split('Логин ').slice(1)
        const loginElements = []

        for (const login of euzLogins) {
            loginElements.push(
                <ADNameElement>
                    Логин {login.split(':')[0]} <strong>{login.split(':')[1]}</strong>
                </ADNameElement>,
            )
        }

        return loginElements
    }

    return (
        <CenterPage height="100%" alignItems="center" padding="15px">
            <Block
                height="fit-content"
                maxWidth="500px"
                orientation="vertical"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap="15px"
                onKeyDown={handleKeyPress}
                noAppearanceInMobile
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
                    type={'password'}
                />
                <SubmitButton
                    text="Узнать логин ЕУЗ"
                    action={() => getADName()}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={!!fio.length && passportNumber.length === 4}
                    width="100%"
                />
                {!!loginEuz && getADNameElements().map((el, i) => <React.Fragment key={i}>{el}</React.Fragment>)}
                {!!loginEuz && loginEuz === USER_NOT_FOUND && (
                    <Message type="failure" title="Не удалось найти пользователя" />
                )}
            </Block>
        </CenterPage>
    )
}

export default GetYourLoginPage
