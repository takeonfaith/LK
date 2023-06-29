import { Title } from '@shared/ui/title'
import List from '@ui/list'
import React from 'react'
import { FiFolderPlus } from 'react-icons/fi'
import ElectronicAgreementListItem from '../molecules/electronic-agreement-list-item'
import { Message } from '@shared/ui/message'
import TechicalErrorMessage from '../molecules/technical-error-message'

interface Props {
    isDormitory: boolean
    electronicAgreements: any[]
}

const ElectronicAgreementList = ({ isDormitory, electronicAgreements = [] }: Props) => {
    return (
        <List width="100%">
            <Title size={4} align="left" icon={<FiFolderPlus />} bottomGap>
                Доп. соглашения
            </Title>
            <TechicalErrorMessage />
            <Message type="info" title="Информация" visible={!isDormitory}>
                Подписание дополнительных соглашений к 3-сторонним договорам в Личном кабинете не предусмотрено
            </Message>
            {electronicAgreements.map((item, index) => (
                <ElectronicAgreementListItem key={index} data={item} />
            ))}
        </List>
    )
}

export default ElectronicAgreementList
