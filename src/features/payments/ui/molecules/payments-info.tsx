import { Colors } from '@consts'
import { Button } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'
import { SliderPage, useModal } from 'widgets'
import QrCode from '../atoms/qr-code'

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
    endDate?: string
    startDate?: string
    sum: number
    allPayments: number
    balanceCurrDate: number
}

const PaymentsInfo = ({ monthly, endDate, sum, allPayments, balanceCurrDate }: Props) => {
    const { toggle } = useModal(
        <SliderPage
            pages={[
                { title: 'Текущая залолженность', content: <QrCode qrCode={'qr_current'} contract={0} /> },
                { title: 'Общая залолженность', content: <QrCode qrCode={'qr_total'} contract={0} /> },
            ]}
        />,
    )

    return (
        <PaymentsInfoWrapper paymentDifference={balanceCurrDate}>
            <div>
                <p>
                    {balanceCurrDate < 0 ? 'Переплата' : 'Долг'} на {localizeDate(new Date().toString())}{' '}
                    <span className="debt-or-overpay">{balanceCurrDate} руб.</span> Следующий платеж -{' '}
                    <span className="monthly">{monthly} руб.</span>
                </p>
                <br />
                <p>
                    К выплате до конца действия договора (до {localizeDate(endDate)} г.):
                    <span className="rest-money"> {sum - allPayments} руб.</span> (без учета индексации)
                </p>
                <br />
                <Button
                    onClick={() => toggle()}
                    text={'Оплатить через QR-код Сбербанк онлайн'}
                    width={'100%'}
                    background={Colors.green.main}
                    textColor="#fff"
                />
            </div>
        </PaymentsInfoWrapper>
    )
}

export default PaymentsInfo
