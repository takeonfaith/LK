import { IPaymentItem } from '@api/model'
import React from 'react'
import styled from 'styled-components'
import localizeDate from '@utils/localize-date'
import { BiRuble } from 'react-icons/bi'
import { Icon } from '@features/all-pages'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import { Colors } from '@shared/consts'

const PaymentItemWrapper = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.grey.transparent3};

    .payment-item-money {
        display: flex;
        align-items: center;
        color: var(--green);
        font-weight: 500;
    }
`

const PaymentItem = ({ date, value }: IPaymentItem) => {
    return (
        <PaymentItemWrapper>
            <Flex gap="16px">
                <Icon color="grey" size={33}>
                    <BiRuble />
                </Icon>
                <Flex d="column" ai="flex-start">
                    <span className="payment-item-date">Платеж</span>
                    <Subtext>{localizeDate(date)}</Subtext>
                </Flex>
            </Flex>
            <span className="payment-item-money">
                +{value} <BiRuble />{' '}
            </span>
        </PaymentItemWrapper>
    )
}

export default PaymentItem
