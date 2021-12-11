import { Colors } from '@consts'
import { Button } from '@ui/atoms'
import getMonthDiff from '@utils/get-months-diff'
import React from 'react'
import styled from 'styled-components'

const PaymentsInfoWrapper = styled.div<{ paymentDifference: number }>`
    display: flex;
    align-items: center;

    .rest-money {
        color: var(--red);
        font-weight: bold;
    }

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
    monthly: number
    endDate: string
    startDate: string
    sum: number
    allPayments: number
}

const PaymentsInfo = ({ monthly, endDate, sum, allPayments, startDate }: Props) => {
    const paymentDifference = getMonthDiff(new Date(startDate), new Date()) * monthly - allPayments
    return (
        <PaymentsInfoWrapper paymentDifference={paymentDifference}>
            <div>
                <p>
                    {paymentDifference < 0 ? 'Переплата' : 'Долг'} на {new Date().toString()}{' '}
                    <span className="debt-or-overpay">{paymentDifference.toFixed(1)} руб.</span> Следующий платеж -{' '}
                    <span className="monthly">{monthly} руб.</span> - должен быть не позднее, чем 10.05.2021
                </p>
                <br />
                <p>
                    К выплате до конца действия договора (до {new Date(endDate).toString()} г.):
                    <span className="rest-money"> {sum - allPayments} руб.</span> (без учета индексации)
                </p>
                <br />
                <Button
                    onClick={() => null}
                    text={'Оплатить через QR-код Сбербанк онлайн'}
                    width={'100%'}
                    background={Colors.green.main}
                    whiteText
                />
            </div>
        </PaymentsInfoWrapper>
    )
}

export default PaymentsInfo
