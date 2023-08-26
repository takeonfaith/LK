import { ElectronicAgreementList, PageWrapper, PaymentList } from '@features/payments'
import Flex from '@shared/ui/flex'
import { Divider, Title } from '@ui/atoms'
import React from 'react'
import DebtAndQr from './debt-and-qr'
import PaygraphTable from './paygraph-table'
import { PaymentsContract } from '@shared/api/model'
import Subtext from '@shared/ui/subtext'

type Props = {
    contracts: PaymentsContract[] | undefined
}

const PaymentsTemplate = ({ contracts }: Props) => {
    if (!contracts) return null

    return (
        <PageWrapper>
            {contracts.map((contract, i) => {
                const { agreements, number, type, paygraph, payments } = contract
                const isDormitory = type === 'Общежитие'
                const electronicAgreements = agreements.filter((item) => new Date(item?.date) > new Date('2022-02-1'))

                return (
                    <React.Fragment key={number}>
                        {contracts.length !== 1 && (
                            <Flex gap="8px">
                                <Flex w="fit-content">
                                    <Title size={3} align="left">
                                        Договор:{' '}
                                    </Title>
                                </Flex>
                                <Subtext fontSize="1rem">
                                    {type}, {number}
                                </Subtext>
                            </Flex>
                        )}
                        <DebtAndQr data={contract} isDormitory={isDormitory} />
                        <PaymentList payments={payments ?? []} />
                        <PaygraphTable paygraph={paygraph} />
                        <ElectronicAgreementList
                            isDormitory={isDormitory}
                            electronicAgreements={electronicAgreements}
                        />
                        {i !== contracts.length - 1 && <Divider margin="0" width="100%" />}
                    </React.Fragment>
                )
            })}
        </PageWrapper>
    )
}

export default PaymentsTemplate
