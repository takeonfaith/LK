import { LeftBlock, PageWrapper, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import React from 'react'

const InfoPayments = () => {
    return (
        <PageWrapper>
            <div className="blocks-wrapper">
                <LeftBlock>
                    <Title size={2} align="left">
                        Оплата за общежитие
                    </Title>
                    <div className="payment-block-content"></div>
                </LeftBlock>
                <RightBlock>
                    <Title size={2} align="left">
                        Реквизиты договора
                    </Title>
                </RightBlock>
            </div>
        </PageWrapper>
    )
}

export default InfoPayments
