import { CenterPage, Message, Title } from '@ui/atoms'
import { KeyValue } from '@ui/atoms/key-value'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import List from '@ui/list'
import React from 'react'
import { FiInfo } from 'react-icons/fi'
import styled from 'styled-components'

const CantAccessPage = () => {
    return (
        <StyledCenterPage>
            <Block height="fit-content" orientation="vertical" maxWidth="500px" gap="10px">
                <GoBackButton />
                <Title size={4} align="left">
                    Не получается войти в Личный кабинет
                </Title>
                <Message type="info">
                    Если не получается войти в Личный кабинет - обратитесь в службу технической поддержки: опишите
                    проблему, укажите ФИО, группу/место работы, логин, приложите скришноты.
                </Message>
                <List width="100%" gap={0} fontSize="0.9rem">
                    <KeyValue
                        keyStr="Напишите письмо"
                        value={<a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>}
                    />
                    <KeyValue
                        direction="vertical"
                        keyStr="Позвоните по телефону"
                        value={
                            <List verticalAlign="top">
                                <a href="tel:+7(495) 223-05-23">+7(495) 223-05-23 доб. 1111</a>
                                <a href="tel:+7(985) 350-41-73">+7(985) 350-41-73</a>
                                <a href="tel:+7(985) 350-39-44">+7(985) 350-39-44</a>
                                <a href="tel:+7(985) 352-31-22">+7(985) 352-31-22</a>
                            </List>
                        }
                    />
                </List>
                <Message
                    type="tip"
                    icon={<FiInfo />}
                    title="Служба технической поддержки работает по рабочему графику с 9.30 до 20:00 в будние дни."
                />
            </Block>
        </StyledCenterPage>
    )
}

const StyledCenterPage = styled(CenterPage)`
    align-items: center;
    height: 100%;
`

export default CantAccessPage
