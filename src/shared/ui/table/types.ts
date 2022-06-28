import { SelectPage } from '@features/select'
import { Align } from '@ui/types'
import { IndexedProperties } from '@utility-types/indexed-properties'

export type SortType = 'desc' | 'asc' | null

export type TableSearchType = { value: string; column: Nullable<ColumnProps> } | null
export type TableCatalogType = { [field: string]: { value: SelectPage; column: Nullable<ColumnProps> } } | null
export type TableSortType = { value: SortType; column: Nullable<ColumnProps> } | null

export type ColumnType = 'date' | 'rub'

export interface ColumnProps {
    title: string
    field: string
    priority?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
    showFull?: boolean
    width?: string
    align?: Align
    search?: boolean
    sort?: boolean
    catalogs?: SelectPage[]
    type?: ColumnType
    render?: (value: any, obj: IndexedProperties) => ChildrenType
}

export type Footer = (props: { [key: string]: any[] } | null) => IndexedProperties

export interface TableProps {
    columns: ColumnProps[]
    footer?: Footer
    data: Nullable<IndexedProperties[]>
    maxOnPage?: number
    onRowClick?: (obj: IndexedProperties) => void
    loading?: boolean
}
