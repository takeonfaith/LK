import { SelectPage } from '@features/select'
import { Align } from '@ui/types'
import { IndexedProperties } from '@utility-types/indexed-properties'

export type TableSearchType = { value: string; column: Nullable<ColumnProps> }
export type TableCatalogType = { value: SelectPage; column: Nullable<ColumnProps> } | null

export type ColumnType = 'date' | 'rub'

export interface ColumnProps {
    title: string
    field: string
    priority?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
    showFull?: boolean
    width?: string
    align?: Align
    search?: boolean
    catalogs?: SelectPage[]
    type?: ColumnType
    render?: (value: any, obj: IndexedProperties) => ChildrenType
}

export interface TableProps {
    columns: ColumnProps[]
    data: Nullable<IndexedProperties[]>
    maxOnPage?: number
    onRowClick?: (obj: IndexedProperties) => void
    loading?: boolean
}
