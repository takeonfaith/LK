import PaymentButton from '@features/payment-button'
import { LinkButton } from '@ui/atoms'
import List from '@ui/list'
import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'
import { MoneyNeedToPay } from '../atoms'

const PaymentsInfoWrapper = styled.div<{ paymentDifference: number }>`
    display: flex;
    align-items: center;

    .monthly {
        color: var(--blue);
        font-weight: bold;
    }

    .debt-or-overpay {
        color: ${({ paymentDifference }) => (paymentDifference >= 0 ? 'var(--red)' : 'var(--green)')};
        font-weight: bold;
    }
`

interface Props {
    endDate?: string
    startDate?: string
    sum: number
    allPayments: number
    balanceCurrDate: number
    qr_current: string
    qr_total: string
    bill?: string
}

const PaymentsInfo = ({ endDate, sum, allPayments, bill, balanceCurrDate, qr_current, qr_total }: Props) => {
    return (
        <PaymentsInfoWrapper paymentDifference={balanceCurrDate}>
            <div>
                <p>
                    {balanceCurrDate < 0 ? 'Переплата' : 'Долг'} на {localizeDate(new Date().toString())}{' '}
                    <span className="debt-or-overpay">{Math.abs(balanceCurrDate)} руб.</span>
                    {/* Следующий платеж -{' '}
                    <span className="monthly">{monthly} руб.</span> */}
                </p>
                <br />
                <MoneyNeedToPay sum={sum} allPayments={allPayments} endDate={endDate} />
                <br />
                <List gap={8} scroll={false}>
                    <PaymentButton qr_current={qr_current} qr_total={qr_total} />
                    {bill && (
                        <LinkButton
                            text="Сформировать квитанцию на оплату"
                            background="transparent"
                            textColor="var(--grey)"
                            align="center"
                            width="100%"
                            href={bill}
                            onClick={() => null}
                        />
                    )}
                </List>
            </div>
        </PaymentsInfoWrapper>
    )
}

export default PaymentsInfo
