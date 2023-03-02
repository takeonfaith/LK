import React from 'react'
import { Divider } from '@ui/divider'
import { ColumnProps, Footer as IFooter } from '@ui/table/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import { Row } from '../molecules'

type Props = {
    columns: ColumnProps[]
    footer: IFooter | undefined
    data: Nullable<IndexedProperties[]>
}
// []{ k: v}

// const data = [
//     {
//         x: 23,
//         y: 321,
//         z: 1234512,
//     },
//     {
//         x: 23,
//         y: 321,
//         z: 1234512,
//     },
//     {
//         x: 23,
//         y: 321,
//         z: 1234512,
//     },
//     {
//         x: 23,
//         y: 321,
//         z: 1234512,
//     },
// ]

const aggregateColumns = (data: Nullable<IndexedProperties[]>, columns: ColumnProps[]) => {
    if (!data) return {}

    // K + N * 2K

    const fields = columns.reduce((acc, { field }) => {
        acc[field] = []
        return acc
    }, {} as { [key: string]: any[] })

    data?.forEach((value) => {
        Object.entries(value).forEach(([key, value]) => {
            if (fields[key] && value) {
                fields[key].push(value)
            }
        })
    })

    return fields
}

function prepareAggregateData(data: IndexedProperties): ColumnProps[] {
    return Object.keys(data).map((key) => ({ title: '', field: key }))
}
const Footer = ({ footer, columns, data }: Props) => {
    if (!footer) return null

    const footerData = footer(aggregateColumns(data, columns))

    return (
        <>
            <Divider />
            <Row onRowClick={() => null} columns={prepareAggregateData(footerData)} el={footerData} index={1} />
        </>
    )
}

export default Footer
