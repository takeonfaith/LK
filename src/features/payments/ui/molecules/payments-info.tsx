import { Colors } from '@consts'
import { Button, LinkButton } from '@ui/atoms'
import { Divider } from '@ui/divider'
import localizeDate from '@utils/localize-date'
import React, { useCallback } from 'react'
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
    qr_current: string
    qr_total: string
    bill?: string
}

const PaymentsInfo = ({ endDate, sum, allPayments, bill, balanceCurrDate, qr_current, qr_total }: Props) => {
    const { open } = useModal()

    const handleModal = useCallback(() => {
        open(
            <SliderPage
                pages={[
                    { title: 'Текущая залолженность', content: <QrCode qrCode={qr_current} /> },
                    { title: 'Общая залолженность', content: <QrCode qrCode={qr_total} /> },
                ]}
            />,
        )
    }, [open])

    return (
        <PaymentsInfoWrapper paymentDifference={balanceCurrDate}>
            <div>
                <p>
                    {balanceCurrDate < 0 ? 'Переплата' : 'Долг'} на {localizeDate(new Date().toString())}{' '}
                    <span className="debt-or-overpay">{balanceCurrDate} руб.</span>
                    {/* Следующий платеж -{' '}
                    <span className="monthly">{monthly} руб.</span> */}
                </p>
                <br />
                <p>
                    К выплате до конца действия договора (до {localizeDate(endDate)} г.):
                    <span className="rest-money"> {(sum - allPayments).toFixed(2)} руб.</span> (без учета индексации)
                </p>
                <br />
                <Button
                    onClick={handleModal}
                    text={'Оплатить через QR-код Сбербанк онлайн'}
                    width={'100%'}
                    background={Colors.green.main}
                    textColor="#fff"
                />
                <Divider />
                {bill && (
                    <LinkButton
                        text="Сформировать квитанцию на оплату"
                        background="#7460f4"
                        textColor="#bdbdbd"
                        align="center"
                        width="100%"
                        href={bill}
                        onClick={() => null}
                    />
                )}
            </div>
        </PaymentsInfoWrapper>
    )
}

export default PaymentsInfo
