import { Colors } from '@consts'
import { Button, LinkButton } from '@ui/atoms'
import List from '@ui/list'
import localizeDate from '@utils/localize-date'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { SliderPage, useModal } from 'widgets'
import { MoneyNeedToPay } from '../atoms'
import QrCode from '../atoms/qr-code'

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
                    { title: 'Текущая задолженность', content: <QrCode qrCode={qr_current} /> },
                    { title: 'Общая задолженность', content: <QrCode qrCode={qr_total} /> },
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
                <MoneyNeedToPay sum={sum} allPayments={allPayments} endDate={endDate} />
                <br />
                <List gap={8} scroll={false}>
                    <Button
                        onClick={handleModal}
                        text={'Оплатить через QR-код Сбербанк онлайн'}
                        width={'100%'}
                        background={Colors.green.main}
                        textColor="#fff"
                    />
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
