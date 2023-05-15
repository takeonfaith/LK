import displayWithType from '@ui/table/lib/display-with-type'
import { ColumnProps } from '@ui/table/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import { RowWrapper } from '../atoms'
import Column from '../atoms/column'
import React from 'react'

interface Props {
    el: { [key: string]: any }
    index: number
    columns: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
}

const Row = ({ columns, el, index, onRowClick }: Props) => {
    return (
        <RowWrapper even={!!(index % 2)}>
            {columns.map((column) => {
                return (
                    <Column
                        showFull={column.showFull}
                        width={column.width}
                        className={column.priority?.toString() ?? 'one'}
                        key={column.field}
                        align={column.align}
                        onClick={() => onRowClick?.(el)}
                        clickable={!!onRowClick}
                    >
                        {column.render
                            ? column.render(displayWithType(el[column.field], column.type), el)
                            : displayWithType(el[column.field], column.type)}
                    </Column>
                )
            })}
        </RowWrapper>
    )
}

export default Row
