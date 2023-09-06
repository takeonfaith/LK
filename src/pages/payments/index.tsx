import { paymentsModel } from '@entities/payments'
import { popUpMessageModel } from '@entities/pop-up-message'
import PageBlock from '@shared/ui/page-block'
import { Error, Message, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { SliderPage } from 'widgets'
import PaymentsTemplate from './payments-template'

const PaymentsPage = () => {
    const { data, loading, error } = paymentsModel.selectors.usePayments()
    const paymentType =
        !!data?.dormitory.length && !!data?.education.length
            ? 'both'
            : !!data?.dormitory.length
            ? 'dormitory'
            : !!data?.education.length
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
            data={data}
            noDataCheck={!data?.dormitory.length}
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
                                content: <PaymentsTemplate contracts={data?.dormitory} />,
                            },
                            {
                                title: 'Обучение',
                                content: <PaymentsTemplate contracts={data?.education} />,
                            },
                        ]}
                        appearance={false}
                    />
                )}
                {paymentType === 'dormitory' && <PaymentsTemplate contracts={data?.dormitory} />}
                {paymentType === 'education' && <PaymentsTemplate contracts={data?.education} />}
            </PageBlock>
        </Wrapper>
    )
}

export default PaymentsPage
