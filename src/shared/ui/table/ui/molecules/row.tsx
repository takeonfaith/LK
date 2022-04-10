import { ColumnProps } from '@ui/table'
import { IndexedProperties } from '@utility-types/indexed-properties'
import React from 'react'
import { useModal } from 'widgets'
import { RowWrapper } from '../atoms'
import Column from '../atoms/column'
import RowModal from './row-modal'

interface Props {
    el: { [key: string]: any }
    index: number
    columns: ColumnProps[]
    onRowClick?: (obj: IndexedProperties) => void
}

const Row = ({ columns, el, index, onRowClick }: Props) => {
    const { open } = useModal()
    const defaultOnClick = () => open(<RowModal title={'Информация'} obj={el} columns={columns} />)
    return (
        <RowWrapper even={index % 2 === 0} onClick={() => (onRowClick ? onRowClick(el) : defaultOnClick())}>
            {columns.map((column) => {
                return (
                    <Column
                        width={column.width}
                        className={column.priority?.toString() ?? 'one'}
                        key={column.field}
                        align={column.align}
                    >
                        {column.render ? column.render(el[column.field], el) : el[column.field]}
                    </Column>
                )
            })}
        </RowWrapper>
    )
}

export default Row
