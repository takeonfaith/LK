import List from '@ui/list'
import React from 'react'
import { ElectronicAgreementListItem } from '../molecules/electronic-agreement-list-item'

interface Props {
    electronicAgreements: any[]
}

const ElectronicAgreementList = ({ electronicAgreements = [] }: Props) => {
    return (
        <List width="100%">
            {electronicAgreements.map((item, index) => (
                <ElectronicAgreementListItem key={index} data={item} />
            ))}
        </List>
    )
}

export default ElectronicAgreementList
