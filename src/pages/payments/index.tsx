import { paymentsModel } from '@entities/payments'
import SliderPage from 'widgets/slider/organisms/slider-page'
import { Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { DormitoryPayments, EducationPayments, InfoPayments } from './pages'

const PaymentsPage = () => {
    const { loading } = paymentsModel.selectors.usePayments()

    useEffect(() => {
        paymentsModel.effects.getPaymentsFx()
    }, [])
    return (
        <Wrapper loading={loading}>
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
