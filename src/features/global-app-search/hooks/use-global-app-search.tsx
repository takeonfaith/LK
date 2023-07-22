import useDebounce from '@shared/lib/hooks/use-debounce'
import { useMemo, useState } from 'react'
import useSearchConfig from './use-search-config'
import getSearchHistory from '../lib/get-search-history'
import getDataLength from '../lib/get-data-length'
import isValidEnglishText from '@shared/ui/search/lib/is-valid-english-text'
import englishToRussianKeyboard from '@shared/ui/search/lib/english-to-russian-keyboard'

const useGlobalAppSearch = () => {
    const config = useSearchConfig()
    const [currentPage, setCurrentPage] = useState(0)
    const [lastSearch, setLastSearch] = useState('')

    const searchHistory = useMemo(() => {
        return getSearchHistory()
    }, [])

    const onSearch = async (value: string) => {
        config[currentPage].clear()
        const normalizedValue = isValidEnglishText(value) ? englishToRussianKeyboard(value) : value

        await config[currentPage].search(normalizedValue)
        if (normalizedValue.length > 0 && !searchHistory.includes(normalizedValue)) {
            searchHistory.unshift(normalizedValue)
            if (searchHistory.length > 8) {
                searchHistory.pop()
            }

            localStorage.setItem('search_history', JSON.stringify(searchHistory))
        }
    }

    const [searchValue, setSearchValue, loading] = useDebounce({
        onDebounce: onSearch,
        delay: 400,
        defaultValue: '',
        deps: [currentPage.toString()],
        triggerDelay: 200,
        triggerOn: (val) => {
            setLastSearch(val)
            return val.length > 0 && (lastSearch !== val || !config[currentPage].data)
        },
    })

    const showMessage = !loading && !searchValue.length
    const showSearchResult = !!searchValue.length && !loading && !!getDataLength(config[currentPage].data)

    return {
        showMessage,
        showSearchResult,
        searchValue,
        setSearchValue,
        currentPage,
        setCurrentPage,
        config,
        loading,
        searchHistory,
    }
}

export default useGlobalAppSearch
