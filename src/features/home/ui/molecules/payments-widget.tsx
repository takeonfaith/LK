import { PAYMENTS_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { paymentsModel } from '@entities/payments'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import List from '@ui/list'
import { SkeletonShape } from '@ui/skeleton-shape'
import { Title } from '@ui/title'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const PaymentsWidgetWrapper = styled.div<{ background?: string }>`
    width: 100%;
    max-width: 400px;
    height: 156px;
    background: var(--scheduleBg);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 6px;

    .top {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 5px;
        align-items: center;
        margin-bottom: 6px;

        .payment-info {
            width: 100%;
            height: 100%;
            background: var(--schedule);
            border-radius: 11px;
            padding: 10px;

            h4 {
                color: ${({ background }) => (background ? Colors[background].main : '')};
            }

            span {
                font-size: 0.8em;
                opacity: 0.5;
            }
        }
    }
`

const SkeletonLoading = () => {
    return (
        <PaymentsWidgetWrapper>
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '129px',
                }}
                margin="0 0 6px 0"
            />
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '55px',
                }}
                margin="0"
            />
        </PaymentsWidgetWrapper>
    )
}

const ErrorMessage = () => {
    return (
        <PaymentsWidgetWrapper>
            <Error text={'Ошибка '} />
        </PaymentsWidgetWrapper>
    )
}

const PaymentsWidget = () => {
    const { data, error } = paymentsModel.selectors.usePayments()
    const history = useHistory()
    console.log(data)

    if (error) return <ErrorMessage />

    if (!data) return <SkeletonLoading />

    if (!!data && !data.dormitory.length && !data.education.length) return null

    const dormPayment = +data?.dormitory[0]?.balance_currdate
    const eduPayment = +data?.education[0]?.balance_currdate
    const hasToPay = dormPayment > 0 || eduPayment > 0

    return (
        <PaymentsWidgetWrapper background={hasToPay ? 'red' : 'green'}>
            <div className="top">
                {!!data?.dormitory.length && (
                    <div className="payment-info dormitory">
                        <Title size={4} align="left">
                            {dormPayment}
                        </Title>
                    </div>
                )}
                {!!data?.education.length && (
                    <div className="payment-info education">
                        <span>Образование</span>
                        <Title size={4} align="left" bottomGap>
                            {eduPayment} руб.
                        </Title>
                        <p>
                            {eduPayment < 0 ? 'Переплата' : 'Долг'} на {localizeDate(new Date().toString())}
                        </p>
                    </div>
                )}
            </div>
            <List width="100%" gap="6px" direction="horizontal">
                <Button
                    text="Подробнее"
                    width="100%"
                    onClick={() => history.push(PAYMENTS_ROUTE)}
                    background="var(--schedule)"
                />
                {hasToPay && <Button text="Оплатить" width="100%" textColor="#fff" background={Colors.green.main} />}
            </List>
        </PaymentsWidgetWrapper>
    )
}

export default PaymentsWidget
