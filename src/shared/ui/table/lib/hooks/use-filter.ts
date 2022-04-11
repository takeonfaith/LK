import { TableCatalogType, TableSearchType } from '@ui/table/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import normalizeString from '@utils/normalize-string'
import { useEffect, useState } from 'react'
import displayWithType from '../display-with-type'

const useFilter = (data: Nullable<IndexedProperties[]>) => {
    const [search, setSearch] = useState<TableSearchType>({ value: '', column: null })
    const [resultData, setResultData] = useState(data)
    const [filter, setFilter] = useState<TableCatalogType>(null)

    useEffect(() => {
        const col = search.column
        const field = search.column?.field
        if (search.value.length && field) {
            const found = data?.filter((el) => {
                return normalizeString(displayWithType(el[field], col?.type)).includes(
                    normalizeString(displayWithType(search.value, col?.type)),
                )
            })
            setResultData(found)
        } else setResultData(data)
    }, [search])

    useEffect(() => {
        const col = filter?.column
        if (col) {
            const found = data?.filter((el) => {
                return el[col.field] === filter.value.title
            })

            return setResultData(found)
        } else setResultData(data)
    }, [filter])

    useEffect(() => {
        setResultData(data)
    }, [data])

    return { search, setSearch, resultData, filter, setFilter }
}

export default useFilter
