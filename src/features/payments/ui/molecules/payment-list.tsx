import { IPaymentItem } from '@api/model'
import { PaymentItem } from '@features/payments'
import React from 'react'
import styled from 'styled-components'

const PaymentListWrapper = styled.div`
    width: 100%;
    min-width: 400px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .all-payments {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        color: var(--blue);
        margin-bottom: 10px;
    }

    .payment-list {
        width: 100%;
        overflow-y: auto;
        height: 200px;
        padding-right: 5px;

        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1000px) {
        min-width: auto;
        max-width: auto;

        .payment-list {
            & > * + * {
                margin-left: 0;
                margin-top: 5px;
            }
        }
    }
`

interface Props {
    payments: IPaymentItem[]
}

const PaymentList = ({ payments }: Props) => {
    return (
        <PaymentListWrapper>
            <div className="all-payments">
                <span>Поступившие платежи</span>
                <span>
                    {payments?.reduce((acc, curr) => {
                        return acc + curr.value
                    }, 0)}{' '}
                    руб.
                </span>
            </div>
            <div className="payment-list">
                {payments.map((payment: IPaymentItem, index) => {
                    return <PaymentItem {...payment} key={index} />
                })}
            </div>
        </PaymentListWrapper>
    )
}

export default PaymentList
