import { Paygraph } from '@api/model'
import Table from '@ui/table'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

interface Props {
    columns: ColumnProps[]
    paygraph: Paygraph[]
}

const PaymentGraph = ({ columns, paygraph }: Props) => {
    return <Table columns={columns} data={paygraph} maxOnPage={8} />
}

export default PaymentGraph
