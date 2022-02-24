import React from 'react'
import styled from 'styled-components'
import ElectronicAgreementListItem from '../molecules/electronic-agreement-list-item'

interface Props {
    electronicAgreements: any[]
}
const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ElectronicAgreementList = ({ electronicAgreements = [] }: Props) => {
    return (
        <List>
            {electronicAgreements.map((item, index) => (
                <ElectronicAgreementListItem key={index} data={item} />
            ))}
        </List>
    )
}

export default ElectronicAgreementList
