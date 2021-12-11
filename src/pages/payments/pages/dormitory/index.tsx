import { paymentsModel } from '@entities/payments'
import { Contract, LeftBlock, PageWrapper, PaymentList, PaymentsInfo, RightBlock } from '@features/payments'
import { Title } from '@ui/atoms'
import React from 'react'

const DormitoryPayments = () => {
    const { dormitory } = paymentsModel.selectors.usePayments()

    return (
        <PageWrapper>
            <div className="blocks-wrapper">
                <LeftBlock>
                    <Title size={2} align="left" bottomGap>
                        Оплата за общежитие
                    </Title>
                    <div className="payment-block-content">
                        <PaymentList payments={dormitory?.payments ?? []} />
                        <PaymentsInfo
                            monthly={dormitory?.contract.monthly ?? 0}
                            startDate={dormitory?.contract.startDate ?? ''}
                            endDate={dormitory?.contract.endDate ?? ''}
                            sum={dormitory?.contract.sum ?? 0}
                            allPayments={
                                dormitory?.payments?.reduce((acc, curr) => {
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
                    <Contract contract={dormitory?.contract} />
                </RightBlock>
            </div>
        </PageWrapper>
    )
}

export default DormitoryPayments
