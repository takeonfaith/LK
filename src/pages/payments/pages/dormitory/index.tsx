import { Agreement } from '@api/model'
import { paymentsModel } from '@entities/payments'
import {
    AgreementsBlock,
    Contract,
    ElectronicAgreementList,
    LeftBlock,
    PageWrapper,
    PaymentList,
    PaymentsInfo,
    RightBlock,
} from '@features/payments'
import { Title } from '@ui/atoms'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'

const DormitoryPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()

    if (!data?.dormitory) return null

    const agreements = data?.dormitory
        .reduce((acc, { agreements = [] }) => (acc.push(...agreements), acc), [] as Agreement[])
        ?.filter((item) => new Date(item?.date) < new Date('2022-02-22'))

    return (
        <PageWrapper>
            {data.dormitory.map((dormitory, i) => {
                return (
                    <div className="blocks-wrapper" key={i}>
                        <LeftBlock>
                            <Title size={2} align="left" bottomGap>
                                Оплата за общежитие
                            </Title>
                            <div className="payment-block-content">
                                <PaymentList payments={dormitory?.payments ?? []} />
                                <PaymentsInfo
                                    balanceCurrDate={getCorrectNumberFormat(dormitory?.balance_currdate ?? '0')}
                                    monthly={650}
                                    startDate={dormitory?.startDate}
                                    endDate={dormitory?.endDatePlan}
                                    sum={Number(dormitory?.sum) ?? 0}
                                    allPayments={
                                        dormitory?.payments?.reduce((acc, curr) => {
                                            return acc + getCorrectNumberFormat(curr.value)
                                        }, 0) ?? 0
                                    }
                                    qr_current={dormitory.qr_current}
                                    qr_total={dormitory.qr_total}
                                />
                            </div>
                        </LeftBlock>
                        <RightBlock>
                            <Title size={2} align="left" bottomGap>
                                Реквизиты договора
                            </Title>
                            <Contract contract={dormitory} />
                        </RightBlock>
                    </div>
                )
            })}
            {agreements && agreements.length > 1 && (
                <div className="blocks-wrapper">
                    <AgreementsBlock>
                        <Title size={2} align="left" bottomGap>
                            Доп. соглашение
                        </Title>
                        <ElectronicAgreementList electronicAgreements={agreements} />
                    </AgreementsBlock>
                </div>
            )}
        </PageWrapper>
    )
}

export default DormitoryPayments
