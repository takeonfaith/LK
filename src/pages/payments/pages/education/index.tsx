import { paymentsModel } from '@entities/payments'
import { Contract, LeftBlock, PageWrapper, PaymentList, PaymentsInfo, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'

const EducationPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()
    const bachelor = data?.contracts[1]
    const magistracy = data?.contracts[2]

    return (
        <PageWrapper>
            {!!magistracy && (
                <div className="blocks-wrapper">
                    <LeftBlock>
                        <Title size={2} align="left" bottomGap>
                            Оплата за магистратуру
                        </Title>
                        <div className="payment-block-content">
                            <PaymentList payments={magistracy?.payments ?? []} />
                            <PaymentsInfo
                                balanceCurrDate={getCorrectNumberFormat(magistracy?.balance_currdate ?? '0')}
                                monthly={100000}
                                startDate={magistracy?.startDate ?? ''}
                                endDate={magistracy?.endDatePlan ?? ''}
                                sum={Number(magistracy?.sum) ?? 0}
                                allPayments={
                                    magistracy?.payments?.reduce((acc, curr) => {
                                        return acc + getCorrectNumberFormat(curr.value)
                                    }, 0) ?? 0
                                }
                            />
                        </div>
                    </LeftBlock>
                    <RightBlock>
                        <Title size={2} align="left" bottomGap>
                            Реквизиты договора
                        </Title>
                        <Contract contract={magistracy} />
                    </RightBlock>
                </div>
            )}
            {!!bachelor && (
                <div className="blocks-wrapper">
                    <LeftBlock>
                        <Title size={2} align="left" bottomGap>
                            Оплата за бакалавриат
                        </Title>
                        <div className="payment-block-content">
                            <PaymentList payments={bachelor?.payments ?? []} />
                            <PaymentsInfo
                                balanceCurrDate={getCorrectNumberFormat(bachelor?.balance_currdate ?? '0')}
                                monthly={100000}
                                startDate={bachelor?.startDate ?? ''}
                                endDate={bachelor?.endDatePlan ?? ''}
                                sum={Number(bachelor?.sum) ?? 0}
                                allPayments={
                                    bachelor?.payments?.reduce((acc, curr) => {
                                        return acc + getCorrectNumberFormat(curr.value)
                                    }, 0) ?? 0
                                }
                            />
                        </div>
                    </LeftBlock>
                    <RightBlock>
                        <Title size={2} align="left" bottomGap>
                            Реквизиты договора
                        </Title>
                        <Contract contract={bachelor} />
                    </RightBlock>
                </div>
            )}
        </PageWrapper>
    )
}

export default EducationPayments
