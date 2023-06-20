import getDormitoryPaygraphColumns from '@pages/payments/lib/get-dormitory-paygraph-columns'
import { Paygraph } from '@shared/api/model'
import Flex from '@shared/ui/flex'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'
import React from 'react'
import { FiBarChart2 } from 'react-icons/fi'

type Props = {
    paygraph: Paygraph[] | undefined
}

const PaygraphTable = ({ paygraph }: Props) => {
    return (
        <Flex d="column">
            <Title icon={<FiBarChart2 />} size={4} align="left" bottomGap>
                График платежей
            </Title>
            <Table columns={getDormitoryPaygraphColumns()} data={paygraph ?? []} maxOnPage={3} />
        </Flex>
    )
}

export default PaygraphTable
