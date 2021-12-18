import { paymentsModel } from '@entities/payments'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import SliderPage from 'widgets/slider/organisms/slider-page'
import { DormitoryPayments, EducationPayments, InfoPayments } from './pages'

const PaymentsPage = () => {
    const { data, loading, error } = paymentsModel.selectors.usePayments()

    const findPages = () => {
        const pages = [{ title: 'Информация', content: <InfoPayments /> }]

        for (let index = 0; index < (data?.contracts ?? []).length ?? 0; index++) {
            const el = data?.contracts[index]
            if (el?.type === 'Общежитие') pages.unshift({ title: 'Общежитие', content: <DormitoryPayments /> })
            if (el?.type === 'Бакалавриат' || el?.type === 'Магистратура')
                pages.unshift({ title: 'Образование', content: <EducationPayments /> })
        }
        return pages
    }

    return (
        <Wrapper loading={loading} load={paymentsModel.effects.getPaymentsFx} error={error} data={data?.contracts}>
            <SliderPage pages={findPages()} sliderWidth={'600px'} />
        </Wrapper>
    )
}

export default PaymentsPage
