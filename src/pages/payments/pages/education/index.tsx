import { paymentsModel } from '@entities/payments'
import { Contract, LeftBlock, PageWrapper, PaymentList, PaymentsInfo, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import React from 'react'

const EducationPayments = () => {
    const { bachelor, magistracy } = paymentsModel.selectors.usePayments()
    return (
        <PageWrapper>
            <div className="blocks-wrapper">
                <LeftBlock>
                    <Title size={2} align="left" bottomGap>
                        Оплата за магистратуру
                    </Title>
                    <div className="payment-block-content">
                        <PaymentList payments={magistracy?.payments ?? []} />
                        <PaymentsInfo
                            monthly={magistracy?.contract.monthly ?? 0}
                            startDate={magistracy?.contract.startDate ?? ''}
                            endDate={magistracy?.contract.endDate ?? ''}
                            sum={magistracy?.contract.sum ?? 0}
                            allPayments={
                                magistracy?.payments?.reduce((acc, curr) => {
                                    return acc + curr.value
                                }, 0) ?? 0
                            }
                        />
                    </div>
                </LeftBlock>
                <RightBlock>
                    <Title size={2} align="left" bottomGap>
                        Реквизиты договора
                    </Title>
                    <Contract contract={magistracy?.contract} />
                </RightBlock>
            </div>
            <div className="blocks-wrapper">
                <LeftBlock>
                    <Title size={2} align="left" bottomGap>
                        Оплата за бакалавриат
                    </Title>
                    <div className="payment-block-content">
                        <PaymentList payments={bachelor?.payments ?? []} />
                        <PaymentsInfo
                            monthly={bachelor?.contract.monthly ?? 0}
                            startDate={bachelor?.contract.startDate ?? ''}
                            endDate={bachelor?.contract.endDate ?? ''}
                            sum={bachelor?.contract.sum ?? 0}
                            allPayments={
                                bachelor?.payments?.reduce((acc, curr) => {
                                    return acc + curr.value
                                }, 0) ?? 0
                            }
                        />
                    </div>
                </LeftBlock>
                <RightBlock>
                    <Title size={2} align="left" bottomGap>
                        Реквизиты договора
                    </Title>
                    <Contract contract={bachelor?.contract} />
                </RightBlock>
            </div>
        </PageWrapper>
    )
}

export default EducationPayments
