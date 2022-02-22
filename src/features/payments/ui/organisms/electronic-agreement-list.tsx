import React from 'react'
import ElectronicAgreementListItem from '../molecules/electronic-agreement-list-item'

interface Props {
    electronicAgreements: any[]
}
const ElectronicAgreementList = ({ electronicAgreements = [] }: Props) => {
    return (
        <>
            {electronicAgreements.map((item, index) => (
                <ElectronicAgreementListItem key={index} data={item} />
            ))}
        </>
    )
}

export default ElectronicAgreementList
