import { Payments } from '@api/model'
import { PAYMENTS_ROUTE } from '@app/routes/general-routes'
import { Colors, IColors } from '@consts'
import { paymentsModel } from '@entities/payments'
import PaymentButton from '@features/payment-button'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import { Message } from '@ui/message'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import React from 'react'
import { FiCheck, FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PaymentsWidgetWrapper = styled.div<{ background?: keyof IColors }>`
    max-width: 400px;
    width: 100%;
    height: 156px;
    background: var(--scheduleBg);
    border-radius: 15px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;

    .payment-info {
        width: 100%;
        height: 100%;
        background: var(--schedule);
        border-radius: 11px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        .top-info {
            h3 {
                color: ${({ background }) => (background ? Colors[background].main : '')};
            }

            .section-name {
                font-size: 0.8em;
                opacity: 0.6;
            }

            p {
                font-size: 0.9em;
            }

            a {
                position: absolute;
                top: 6px;
                right: 6px;
            }
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }
`

const SkeletonLoading = () => {
    return (
        <PaymentsWidgetWrapper>
            <div className="payment-info education">
                <div>
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '100px',
                            height: '10px',
                        }}
                        margin="0 0 6px 0"
                    />
                    <SkeletonShape
                        shape={'rect'}
                        size={{
                            width: '150px',
                            height: '25px',
                        }}
                        margin="0"
                    />
                </div>
                <SkeletonShape
                    shape={'rect'}
                    size={{
                        width: '100%',
                        height: '35px',
                    }}
                    margin="0"
                />
            </div>
        </PaymentsWidgetWrapper>
    )
}

const ErrorMessage = () => {
    return (
        <PaymentsWidgetWrapper>
            <Error text={'Ошибка '} size="70px" />
        </PaymentsWidgetWrapper>
    )
}

const TopMessage = ({
    data,
    balance,
    section,
}: {
    data: Payments['dormitory'] | Payments['education']
    balance: number
    section: 'Обучение' | 'Общежитие'
}) => {
    if (!data.length) return null

    const { qr_current, qr_total } = data[0]

    return (
        <div className="payment-info">
            <div className="top-info">
                <span className="section-name">{section}</span>
                <Title size={3} align="left" bottomGap="4px">
                    {Math.abs(balance)} руб.
                </Title>
                <Link to={PAYMENTS_ROUTE}>
                    <Button icon={<FiInfo />} background="transparent" />
                </Link>
            </div>
            {balance > 0 && <PaymentButton qr_current={qr_current} qr_total={qr_total} />}
            {balance <= 0 && (
                <Message type="success" title={'Оплачено'} width="100%" align="center" icon={<FiCheck />} />
            )}
        </div>
    )
}

const PaymentsWidget = () => {
    const { data, error } = paymentsModel.selectors.usePayments()

    if (error) return <ErrorMessage />

    if (!data) return <SkeletonLoading />

    if (!!data && !data.dormitory.length && !data.education.length) return null

    const dormPayment = +data?.dormitory[0]?.balance_currdate
    const eduPayment = +data?.education[0]?.balance_currdate

    const hasToPay = dormPayment > 0 || eduPayment > 0

    return (
        <PaymentsWidgetWrapper background={hasToPay ? 'red' : 'green'}>
            <TopMessage data={data.dormitory} balance={dormPayment} section={'Общежитие'} />
            <TopMessage data={data.education} balance={eduPayment} section={'Обучение'} />
        </PaymentsWidgetWrapper>
    )
}

export default PaymentsWidget
