import { paymentsModel } from '@entities/payments'
import { popUpMessageModel } from '@entities/pop-up-message'
import PageBlock from '@shared/ui/page-block'
import { Error, Message, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { SliderPage } from 'widgets'
import PaymentsTemplate from './payments-template'

const PaymentsPage = () => {
    const {
        data: { payments },
        loading,
        error,
    } = paymentsModel.selectors.useData()
    const paymentType =
        !!payments?.dormitory.length && !!payments?.education.length
            ? 'both'
            : !!payments?.dormitory.length
            ? 'dormitory'
            : !!payments?.education.length
            ? 'education'
            : 'none'

    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            type: 'alert',
            time: 10000,
            message: 'В связи с техническими работами отображение данных по произведенным оплатам может быть не полным',
        })
    }, [])

    return (
        <Wrapper
            loading={loading}
            load={paymentsModel.effects.getPaymentsFx}
            error={error}
            data={payments}
            noDataCheck={!payments?.dormitory.length}
        >
            <PageBlock>
                <Message type={'alert'} title="Внимание!">
                    Ведутся доработки по информации о долге по оплате и суммам оплат
                </Message>
                {paymentType === 'none' && <Error text="Нет данных" />}
                {paymentType === 'both' && (
                    <SliderPage
                        pages={[
                            {
                                title: 'Общежитие',
                                content: <PaymentsTemplate contracts={payments?.dormitory} />,
                            },
                            {
                                title: 'Обучение',
                                content: <PaymentsTemplate contracts={payments?.education} />,
                            },
                        ]}
                        appearance={false}
                    />
                )}
                {paymentType === 'dormitory' && <PaymentsTemplate contracts={payments?.dormitory} />}
                {paymentType === 'education' && <PaymentsTemplate contracts={payments?.education} />}
            </PageBlock>
        </Wrapper>
    )
}

export default PaymentsPage
