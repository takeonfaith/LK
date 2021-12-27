import { paymentsModel } from '@entities/payments'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import { SliderPage } from 'widgets'
import { DormitoryPayments, InfoPayments } from './pages'

const PaymentsPage = () => {
    const { data, loading, error } = paymentsModel.selectors.usePayments()

    return (
        <Wrapper loading={loading} load={paymentsModel.effects.getPaymentsFx} error={error} data={data?.contracts[0]}>
            <SliderPage
                pages={[
                    { title: 'Общежитие', content: <DormitoryPayments /> },
                    { title: 'Информация', content: <InfoPayments /> },
                ]}
                sliderWidth={'600px'}
                currentPage={0}
            />
        </Wrapper>
    )
}

export default PaymentsPage
