import React from 'react'
import { docsNotification, NameListNotification } from '@api/model/notification'
import { Colors } from '@consts'
import { personalNotificationModel } from '@entities/notification'
import { userModel } from '@entities/user'
import { LinkButton, SubmitButton } from '@ui/atoms'
import getRightGenderWord from '@utils/get-right-gender-word'
import localizeDate from '@utils/localize-date'
import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import styled from 'styled-components'

const CardDocumentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: var(--brSemi);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    row-gap: 20px;
    min-height: 70px;
`

const InfoDocument = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BlockButtons = styled.div`
    display: flex;
    gap: 10px;
    align-self: end;
`

const TitleCardDocument = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
`

const DateCardNotification = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
`

interface Props {
    data: docsNotification
    type: NameListNotification
}

const CardDocument = ({ data }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    return (
        <CardDocumentWrapper>
            <InfoDocument>
                <TitleCardDocument>{data.name}</TitleCardDocument>
                {data.date && <DateCardNotification>Дата: {localizeDate(data.date, 'numeric')}</DateCardNotification>}
            </InfoDocument>
            <BlockButtons>
                {data.link && (
                    <LinkButton
                        href={data.link}
                        onClick={() => null}
                        text="Подробнее"
                        width="150px"
                        icon={<FiLink />}
                        height="35px"
                        minHeight="30px"
                        textColor="white"
                        background={Colors.blue.light}
                    />
                )}
                <SubmitButton
                    text={data.viewed ? getRightGenderWord(user?.sex, 'Ознакомлен', 'Ознакомлена') : 'Ознакомиться'}
                    action={() => {
                        setLoading(true)
                        personalNotificationModel.effects.viewPersonalNotificationsFx(data.id)
                        setLoading(false)
                        setCompleted(true)
                    }}
                    height="35px"
                    width="150px"
                    buttonSuccessText={getRightGenderWord(user?.sex, 'Ознакомлен', 'Ознакомлена')}
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    isActive={true}
                    isDone={data.viewed}
                    repeatable={false}
                    popUpFailureMessage="Вы уже ознакомились"
                />
            </BlockButtons>
        </CardDocumentWrapper>
    )
}

export default CardDocument
