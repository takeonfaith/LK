import { FilterElementList } from '@ui/added-elements-list'
import { TableCatalogType, TableSearchType, TableSortType } from '@ui/table/types'
import { IndexedProperties } from '@utility-types/indexed-properties'
import normalizeString from '@utils/normalize-string'
import { useCallback, useEffect, useState } from 'react'
import displayWithType from '../display-with-type'

const findWhatToDelete = (filterList: FilterElementList, matchStr: string) => {
    if (!filterList) return null

    return Object.keys(filterList).find((key) => {
        return filterList[key].title === matchStr
    })
}

const useFilter = (data: Nullable<IndexedProperties[]>) => {
    const [search, setSearch] = useState<TableSearchType>(null)
    const [filter, setFilter] = useState<TableCatalogType>(null)
    const [sort, setSort] = useState<TableSortType>(null)
    const [filterList, setFilterList] = useState<FilterElementList>(null)
    const [resultData, setResultData] = useState(data)

    const onRemoveOne = useCallback(
        (id: string) => {
            setFilter((prev) => {
                if (prev && prev[id]) delete prev[id]
                return { ...prev }
            })

            if (id === search?.column?.field) setSearch(null)

            if (id === sort?.column?.field) setSort(null)
        },
        [search, filter, sort],
    )

    const onRemoveAll = useCallback(() => {
        setFilter(null)
        setSearch(null)
        setSort(null)
    }, [])

    useEffect(() => {
        if (!!filter) {
            if (!filterList)
                setFilterList((prev) => {
                    const el = Object.values(filter)[0].column
                    prev = { [el?.field ?? '']: { id: el?.field ?? '', title: 'Фильтр: ' + el?.title ?? '' } }

                    return { ...prev }
                })
            else {
                const newEl = Object.values(filter).find((el) => !filterList[el.column?.field ?? ''])
                if (newEl) {
                    setFilterList((prev) => {
                        const id = newEl.column?.field ?? ''
                        const title = 'Фильтр: ' + newEl.column?.title ?? ''
                        if (prev) prev[id] = { id, title }
                        return { ...prev }
                    })
                }
            }
        }

        if (!!search) {
            setFilterList((prev) => {
                const id = search.column?.field ?? ''
                const title = 'Поиск'

                if (prev) prev[id] = { id, title }
                else prev = { [id]: { id, title } }
                return { ...prev }
            })
        }

        if (!!sort) {
            setFilterList((prev) => {
                const id = sort.column?.field ?? ''
                const title = 'Сортировка'
                if (prev) prev[id] = { id, title }
                else prev = { [id]: { id, title } }
                return { ...prev }
            })
        }
    }, [search, filter, sort])

    useEffect(() => {
        const col = search?.column
        const field = search?.column?.field
        if (!!search && field) {
            const found = data?.filter((el) => {
                return normalizeString(displayWithType(el[field], col?.type)).includes(
                    normalizeString(displayWithType(search.value, col?.type)),
                )
            })
            setResultData(found)
        } else {
            setResultData(data)
        }
    }, [search])

    useEffect(() => {
        if (filter) {
            const found = data?.filter((el) => {
                return !Object.values(filter).find((col) => {
                    return el[col.column?.field ?? ''] !== col.value.title
                })
            })
            setResultData(found)
        } else {
            setFilterList((prev) => {
                // if (prev) delete prev[filter]
                return { ...prev }
            })
            setResultData(data)
        }
    }, [filter])

    useEffect(() => {
        const col = sort?.column?.field ?? ''
        if (!!sort) {
            setResultData((prev) => {
                const newArr = [...(prev ?? [])]
                newArr?.sort((a, b) => {
                    if (b[col] < a[col]) {
                        return sort.value === 'asc' ? 1 : -1
                    }
                    if (b[col] > a[col]) {
                        return sort.value === 'asc' ? -1 : 1
                    }
                    return 0
                })
                return newArr
            })
        } else {
            setFilterList((prev) => {
                const deletedId = findWhatToDelete(prev, 'Сортировка')
                if (prev && deletedId) delete prev[deletedId]
                return { ...prev }
            })
            setResultData(data)
        }
    }, [sort?.value])

    useEffect(() => {
        setResultData(data)
    }, [data])

    return {
        sort,
        setSort,
        search,
        setSearch,
        resultData,
        filter,
        setFilter,
        filterList,
        setFilterList,
        onRemoveOne,
        onRemoveAll,
    }
}

export default useFilter
