import { paymentsModel } from '@entities/payments'
import { Contract, ElectronicAgreementList, PageWrapper, PaymentList, PaymentsInfo } from '@features/payments'
import { Title } from '@ui/atoms'
import Block from '@ui/block'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'

const EducationPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()

    if (!data?.education) return null

    return (
        <PageWrapper>
            {data?.education.map((education, i) => {
                return (
                    <>
                        <div className="blocks-wrapper" key={i}>
                            <Block orientation="vertical" maxWidth="800px" height="fit-content">
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
                            </Block>
                            <Block orientation="vertical" maxWidth="380px">
                                <Title size={2} align="left" bottomGap>
                                    Реквизиты договора
                                </Title>
                                <Contract contract={education} />
                            </Block>
                        </div>
                        {education.agreements && !!education.agreements.length && (
                            <div className="blocks-wrapper">
                                <Block orientation="vertical" maxWidth="1190px" height="fit-content">
                                    <Title size={2} align="left" bottomGap>
                                        Доп. соглашение
                                    </Title>
                                    <ElectronicAgreementList
                                        electronicAgreements={education.agreements.filter(
                                            (item) => new Date(item?.date) > new Date('2022-02-01'),
                                        )}
                                    />
                                </Block>
                            </div>
                        )}
                    </>
                )
            })}
        </PageWrapper>
    )
}

export default EducationPayments
