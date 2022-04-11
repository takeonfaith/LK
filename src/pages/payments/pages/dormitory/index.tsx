import { paymentsModel } from '@entities/payments'
import {
    Contract,
    ElectronicAgreementList,
    PageWrapper,
    PaymentGraph,
    PaymentList,
    PaymentsInfo,
} from '@features/payments'
import getDormitoryPaygraphColumns from '@pages/payments/lib/get-dormitory-paygraph-columns'
import { Title } from '@ui/atoms'
import { LinkButton } from '@ui/atoms'
import Block from '@ui/block'
import getCorrectNumberFormat from '@utils/get-correct-number-format'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const DormitoryPayments = () => {
    const { data } = paymentsModel.selectors.usePayments()

    if (!data?.dormitory) return null

    return (
        <PageWrapper>
            {data.dormitory.map((dormitory, i) => {
                return (
                    <React.Fragment key={dormitory.number}>
                        <div className="blocks-wrapper" key={i}>
                            <Block orientation="vertical" maxWidth="800px">
                                <Title size={2} align="left" bottomGap>
                                    Оплата за общежитие
                                </Title>
                                <div className="payment-block-content">
                                    <PaymentList payments={dormitory?.payments ?? []} />
                                    <PaymentsInfo
                                        balanceCurrDate={getCorrectNumberFormat(dormitory?.balance_currdate ?? '0')}
                                        monthly={650}
                                        bill={dormitory?.bill}
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
                            </Block>
                            <Block orientation="vertical" maxWidth="380px">
                                <Title size={2} align="left" bottomGap width="100%">
                                    Реквизиты договора
                                    <LinkButton
                                        onClick={() => null}
                                        href={dormitory.file ?? ''}
                                        icon={<FiDownload />}
                                        width="40px"
                                    />
                                </Title>
                                <Contract contract={dormitory} />
                            </Block>
                        </div>
                        <div className="blocks-wrapper">
                            <Block orientation="vertical" maxWidth="1190px" height="fit-content">
                                <Title size={2} align="left" bottomGap>
                                    График платежей
                                </Title>
                                <PaymentGraph
                                    columns={getDormitoryPaygraphColumns()}
                                    paygraph={dormitory?.paygraph ?? []}
                                />
                            </Block>
                        </div>
                        {!!dormitory.agreements && !!dormitory.agreements.length && (
                            <div className="blocks-wrapper">
                                <Block orientation="vertical" maxWidth="1190px" height="fit-content">
                                    <Title size={2} align="left" bottomGap>
                                        Доп. соглашение
                                    </Title>
                                    <ElectronicAgreementList
                                        electronicAgreements={dormitory.agreements.filter(
                                            (item) => new Date(item?.date) > new Date('2022-02-1'),
                                        )}
                                    />
                                </Block>
                            </div>
                        )}
                    </React.Fragment>
                )
            })}
        </PageWrapper>
    )
}

export default DormitoryPayments
