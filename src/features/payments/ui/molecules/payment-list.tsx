import { IPaymentItem } from '@api/model'
import { PaymentItem } from '@features/payments'
import Flex from '@shared/ui/flex'
import RubleNumber from '@shared/ui/ruble-number'
import Subtext from '@shared/ui/subtext'
import { Error, Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'
import { FiArrowDownCircle, FiBox } from 'react-icons/fi'
import styled from 'styled-components'

const PaymentListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .payment-list {
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        min-height: 195px;
        height: 195px;
        padding-right: 5px;
        background: var(--form);
        box-shadow: var(--schedule-shadow);
        border-radius: 7px;
        margin-top: 10px;
    }
`

interface Props {
    payments: IPaymentItem[]
}

const PaymentList = ({ payments }: Props) => {
    const sum = payments
        ?.reduce((acc, curr) => {
            return acc + getCorrectNumberFormat(curr.value)
        }, 0)
        .toFixed(1)
    return (
        <PaymentListWrapper>
            <Flex jc="space-between">
                <Title icon={<FiArrowDownCircle />} size={4} align="left" width="fit-content">
                    Поступившие платежи
                </Title>
                <Subtext fontSize="1rem" width="fit-content">
                    <RubleNumber size="small">{sum}</RubleNumber>
                </Subtext>
            </Flex>
            <div className="payment-list">
                {!payments.length && <Error size="50px" text="Нет платежей" image={<FiBox />} />}
                {payments.map((payment: IPaymentItem, index) => {
                    return <PaymentItem {...payment} key={index} />
                })}
            </div>
        </PaymentListWrapper>
    )
}

export default PaymentList
