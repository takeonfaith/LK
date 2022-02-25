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
            data={data && data?.dormitory[0]}
            noDataCheck={!data?.dormitory.length}
        >
            {
                <SliderPage
                    pages={[
                        {
                            title: 'Общежитие',
                            condition: !!data?.dormitory?.length,
                            content: <DormitoryPayments />,
                        },
                        {
                            title: 'Обучение',
                            condition: !!data?.education.length,
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
