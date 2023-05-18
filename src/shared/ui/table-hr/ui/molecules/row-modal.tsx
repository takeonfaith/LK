import { KeyValue } from '@ui/atoms/key-value'
import displayWithType from '@ui/table/lib/display-with-type'
import { ColumnProps } from '@ui/table/types'
import { Title } from '@ui/title'
import { IndexedProperties } from '@utility-types/indexed-properties'
import React from 'react'
import styled from 'styled-components'

const RowModalWrapper = styled.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`

interface Props {
    title: string
    obj: IndexedProperties
    columns: ColumnProps[]
}

const RowModal = ({ title, obj, columns }: Props) => {
    return (
        <RowModalWrapper>
            <Title size={3} align="left" bottomGap>
                {title}
            </Title>
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
