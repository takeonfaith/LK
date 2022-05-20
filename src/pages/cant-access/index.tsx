import { FEEDBACK_ROUTE } from '@app/routes/general-routes'
import { CenterPage, Message, Title } from '@ui/atoms'
import KeyValue from '@ui/atoms/key-value'
import Block from '@ui/block'
import GoBackButton from '@ui/go-back-button'
import List from '@ui/list'
import React from 'react'
import { FiInfo } from 'react-icons/fi'

const CantAccessPage = () => {
    return (
        <CenterPage>
            <Block height="fit-content" orientation="vertical" maxWidth="500px" gap="10px">
                <GoBackButton />
                <Title size={4} align="left">
                    Не получается войти в Личный кабинет
                </Title>
                <Message type="info">
                    Если не получается войти в Личный кабинет - обратитесь в службу технической поддержки: опишите
                    проблему, укажите ФИО, группу/место работы, логин, приложите скришноты.
                </Message>
                <List width="100%" gap="0" fontSize="0.9rem">
                    <KeyValue
                        keyStr="Напишите письмо"
                        value={<a href="mailto:help@mospolytech.ru">help@mospolytech.ru</a>}
                    />
                    <KeyValue
                        keyStr=" Заполните форму в личном кабинете"
                        value={
                            <a href={`https://e.mospolytech.ru/#${FEEDBACK_ROUTE}`}>
                                https://e.mospolytech.ru/#{FEEDBACK_ROUTE}
                            </a>
                        }
                    />
                    <KeyValue
                        direction="vertical"
                        keyStr="Позвоните по телефону"
                        value={
                            <List alignItems="flex-start">
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
        </CenterPage>
    )
}

export default CantAccessPage
