import { paymentsModel } from '@entities/payments'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import SliderPage from 'widgets/slider/organisms/slider-page'
import { DormitoryPayments, EducationPayments, InfoPayments } from './pages'

const PaymentsPage = () => {
    const { loading, error } = paymentsModel.selectors.usePayments()

    return (
        <Wrapper loading={loading} load={paymentsModel.effects.getPaymentsFx} error={error}>
            <SliderPage
                pages={[
                    { title: 'Общежитие', content: <DormitoryPayments /> },
                    { title: 'Образование', content: <EducationPayments /> },
                    { title: 'Информация', content: <InfoPayments /> },
                ]}
                sliderWidth={'600px'}
            />
        </Wrapper>
    )
}

export default PaymentsPage
