import normalizeString from '@shared/lib/normalize-string'
import React from 'react'
import { RiHistoryLine } from 'react-icons/ri'

const getSearchHistoryHints = (loading: boolean, searchValue: string, searchHistory: string[]) => {
    if (searchValue.length === 0) {
        return searchHistory.map((el) => ({ id: el, title: el, value: el, icon: <RiHistoryLine /> }))
    }

    if (!loading) return []

    return searchHistory
        .filter((el) => normalizeString(el).includes(normalizeString(searchValue)))
        .map((el) => ({ id: el, title: el, value: el, icon: <RiHistoryLine /> }))
}

export default getSearchHistoryHints
