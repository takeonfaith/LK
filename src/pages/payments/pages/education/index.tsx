import { paymentsModel } from '@entities/payments'
import { Contract, LeftBlock, PageWrapper, PaymentList, PaymentsInfo, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'

const EducationPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()

    return (
        <PageWrapper>
            {data?.education.map((education, i) => {
                return (
                    <div className="blocks-wrapper" key={i}>
                        <LeftBlock>
                            <Title size={2} align="left" bottomGap>
                                Оплата за образование
                            </Title>
                            <div className="payment-block-content">
                                <PaymentList payments={education?.payments ?? []} />
                                <PaymentsInfo
                                    balanceCurrDate={getCorrectNumberFormat(education?.balance_currdate ?? '0')}
                                    monthly={100000}
                                    startDate={education?.startDate ?? ''}
                                    endDate={education?.endDatePlan ?? ''}
                                    sum={Number(education?.sum) ?? 0}
                                    allPayments={
                                        education?.payments?.reduce((acc, curr) => {
                                            return acc + getCorrectNumberFormat(curr.value)
                                        }, 0) ?? 0
                                    }
                                    qr_current={education.qr_current}
                                    qr_total={education.qr_total}
                                />
                            </div>
                        </LeftBlock>
                        <RightBlock>
                            <Title size={2} align="left" bottomGap>
                                Реквизиты договора
                            </Title>
                            <Contract contract={education} />
                        </RightBlock>
                    </div>
                )
            })}
        </PageWrapper>
    )
}

export default EducationPayments
