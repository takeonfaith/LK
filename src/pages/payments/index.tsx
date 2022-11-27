import { paymentsModel } from '@entities/payments'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import { SliderPage } from 'widgets'
import { DormitoryPayments, EducationPayments } from './pages'

const PaymentsPage = () => {
    const { data, loading, error } = paymentsModel.selectors.usePayments()

    return (
        <Wrapper
            loading={loading}
            load={paymentsModel.effects.getPaymentsFx}
            error={error}
            data={data && (!!data?.dormitory.length || !!data?.education.length)}
            noDataCheck={!data?.dormitory.length}
        >
            {!!data?.dormitory.length || !!data?.education.length ? (
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
                    ]}
                    sliderWidth={'600px'}
                    appearance={false}
                    currentPage={!!data?.dormitory.length ? 0 : !!data?.education.length ? 1 : 0}
                />
            ) : (
                <></>
            )}
        </Wrapper>
    )
}

export default PaymentsPage
