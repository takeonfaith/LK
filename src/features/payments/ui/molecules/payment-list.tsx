import React from 'react'
import { IPaymentItem } from '@api/model'
import { PaymentItem } from '@features/payments'
import { Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import styled from 'styled-components'

const PaymentListWrapper = styled.div`
    width: 100%;
    min-width: 380px;
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
        margin-bottom: 10px;
        width: 100%;
        overflow-y: auto;
        height: 200px;
        padding-right: 5px;
        box-shadow: var(--schedule-shadow);
        border-radius: calc(var(--brSemi) - 7px);

        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1400px) {
        min-width: 330px;
    }

    @media (max-width: 1225px) {
        max-width: 100%;
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
    return !!payments.length ? (
        <PaymentListWrapper>
            <div className="all-payments">
                <span>Поступившие платежи</span>
                <span>
                    {payments
                        ?.reduce((acc, curr) => {
                            return acc + getCorrectNumberFormat(curr.value)
                        }, 0)
                        .toFixed(1)}{' '}
                    руб.
                </span>
            </div>
            <div className="payment-list">
                {payments.map((payment: IPaymentItem, index) => {
                    return <PaymentItem {...payment} key={index} />
                })}
            </div>
        </PaymentListWrapper>
    ) : (
        <PaymentListWrapper>
            <Title size={4}>Нет платежей</Title>
        </PaymentListWrapper>
    )
}

export default PaymentList
