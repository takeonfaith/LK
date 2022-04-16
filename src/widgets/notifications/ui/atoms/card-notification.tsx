import React from 'react'
import styled from 'styled-components'
import { baseNotification, businesstripNotification } from '@api/model/notification'
import { Button, LinkButton } from '@ui/atoms'
import { personnelNotificationModel } from '@entities/notification'
import { FiDownload } from 'react-icons/fi'
import { Colors } from '@consts'

const CardNotificationWrapper = styled.div`
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

const InfoNotification = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BlockButtons = styled.div`
    display: flex;
    gap: 10px;
    align-self: end;
`

const TitleCardNotification = styled.div`
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
    data: baseNotification | businesstripNotification
    type: 'businesstrip' | 'fire' | 'vacation'
}

const CardNotification = ({ data, type }: Props) => {
    return (
        <CardNotificationWrapper>
            <InfoNotification>
                <TitleCardNotification>{data.event || data.post}</TitleCardNotification>
                {data.startDate && (
                    <DateCardNotification>
                        Период: {data.startDate} - {data.endDate}
                    </DateCardNotification>
                )}
            </InfoNotification>
            <BlockButtons>
                {data.file && (
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        text="Скачать"
                        width="150px"
                        icon={<FiDownload />}
                        height="30px"
                        minHeight="30px"
                        textColor="white"
                        background={Colors.blue.light}
                    />
                )}
                {data.viewed ? (
                    <Button
                        onClick={() => null}
                        text="Ознакомлен"
                        width="150px"
                        height="30px"
                        textColor="white"
                        background={Colors.lightGreen.light}
                    />
                ) : (
                    type !== 'businesstrip' && (
                        <Button
                            onClick={() => personnelNotificationModel.effects.viewPersonnelNotificationsFx(data.id)}
                            text="Ознакомится"
                            width="150px"
                            textColor="white"
                            background={Colors.purple.main}
                        />
                    )
                )}
            </BlockButtons>
        </CardNotificationWrapper>
    )
}

export default CardNotification
