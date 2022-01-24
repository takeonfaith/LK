import { paymentsModel } from '@entities/payments'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import { SliderPage } from 'widgets'
import { DormitoryPayments, EducationPayments, InfoPayments } from './pages'

const PaymentsPage = () => {
    const { data, loading, error } = paymentsModel.selectors.usePayments()

    return (
        <Wrapper
            loading={loading}
            load={paymentsModel.effects.getPaymentsFx}
            error={error}
            data={data && data?.contracts[0]}
        >
            {
                <SliderPage
                    pages={[
                        {
                            title: 'Общежитие',
                            condition: !!data?.contracts?.find((contract) => contract.type === 'Общежитие'),
                            content: <DormitoryPayments />,
                        },
                        {
                            title: 'Обучение',
                            condition: !!data?.contracts.find((contract) => contract.type === 'Обучение'),
                            content: <EducationPayments />,
                        },
                        { title: 'Информация', condition: true, content: <InfoPayments /> },
                    ]}
                    sliderWidth={'600px'}
                    currentPage={0}
                />
            }
        </Wrapper>
    )
}

export default PaymentsPage
