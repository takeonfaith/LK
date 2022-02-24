import { paymentApi } from '@api'
import { Agreement } from '@api/model'
import Accordion from '@ui/accordion/accordion'
import React from 'react'
import styled from 'styled-components'
import { ElectornicAgreement } from 'widgets/electonic-agreement'

interface Props {
    data: Agreement
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ElectronicAgreementListItem = ({ data }: Props) => {
    const { id, signed_user: signedUser, name } = data

    const handleSubmit = () => {
        paymentApi.agreementSubmit(id)
    }

    const height = signedUser ? 200 : 250

    return (
        <Accordion height={height} show title={name} confirmed={signedUser}>
            <Wrapper>
                <ElectornicAgreement data={data} submit={handleSubmit} setData={() => {}} isDone={signedUser}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, magni! Sit nihil veniam ea et
                        cumque placeat dolore impedit est dolorem beatae consequuntur sint neque aperiam iusto, eius
                        quasi eligendi.
                    </p>
                </ElectornicAgreement>
            </Wrapper>
        </Accordion>
    )
}

export default ElectronicAgreementListItem
