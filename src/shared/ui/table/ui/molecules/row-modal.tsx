import KeyValue from '@ui/atoms/key-value'
import displayWithType from '@ui/table/lib/display-with-type'
import { ColumnProps } from '@ui/table/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import React from 'react'
import styled from 'styled-components'

const RowModalWrapper = styled.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`

interface Props {
    obj: IndexedProperties
    columns: ColumnProps[]
}

const RowModal = ({ obj, columns }: Props) => {
    return (
        <RowModalWrapper>
            {columns.map((column) => {
                return (
                    <KeyValue
                        keyStr={column.title}
                        value={
                            column.render
                                ? column.render(obj[column.field], obj)
                                : displayWithType(obj[column.field], column.type)
                        }
                        key={column.title}
                    />
                )
            })}
        </RowModalWrapper>
    )
}

export default RowModal
