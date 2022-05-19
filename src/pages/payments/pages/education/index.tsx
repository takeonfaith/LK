import { paymentsModel } from '@entities/payments'
import {
    Contract,
    ElectronicAgreementList,
    PageWrapper,
    PaymentGraph,
    PaymentList,
    PaymentsInfo,
} from '@features/payments'
import getEducationPaygraphColumns from '@pages/payments/lib/get-education-paygraph-columns'
import { Divider, LinkButton, Title } from '@ui/atoms'
import Block from '@ui/block'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const EducationPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()

    if (!data?.education) return null

    return (
        <PageWrapper>
            {data?.education.map((education, i) => {
                return (
                    <React.Fragment key={education.number}>
                        <div className="blocks-wrapper" key={i}>
                            <Block orientation="vertical" maxWidth="800px">
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
                                        bill={education.bill}
                                    />
                                </div>
                            </Block>
                            <Block orientation="vertical" maxWidth="380px">
                                <Title size={2} align="left" bottomGap width="100%">
                                    Реквизиты договора
                                    <LinkButton
                                        onClick={() => null}
                                        href={education.file ?? ''}
                                        icon={<FiDownload />}
                                        width="40px"
                                    />
                                </Title>
                                <Contract contract={education} />
                            </Block>
                        </div>
                        <div className="blocks-wrapper">
                            <Block orientation="vertical" maxWidth="1190px" height="fit-content">
                                <Title size={2} align="left" bottomGap>
                                    График платежей
                                </Title>
                                <PaymentGraph
                                    columns={getEducationPaygraphColumns()}
                                    paygraph={education?.paygraph ?? []}
                                />
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
                        {i !== data.education.length - 1 && <Divider margin="20px 0" />}
                    </React.Fragment>
                )
            })}
        </PageWrapper>
    )
}

export default EducationPayments
