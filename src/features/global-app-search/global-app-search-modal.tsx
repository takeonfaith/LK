import PerhapsYouMeant from '@features/perhaps-you-meant'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import Search from '@shared/ui/search'
import React from 'react'
import { FiEyeOff, FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import Slider from 'widgets/slider'
import useGlobalAppSearch from './hooks/use-global-app-search'
import getDataLength from './lib/get-data-length'
import getSearchHistoryHints from './lib/get-search-history-hints'
import SearchSkeleton from './skeleton'

const GlobalAppSearchModalStyled = styled.div`
    @media (max-width: 1000px) {
        height: 600px;
    }

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`

const GlobalAppSearchModal = () => {
    const {
        showMessage,
        showSearchResult,
        searchValue,
        setSearchValue,
        currentPage,
        setCurrentPage,
        loading,
        config,
        searchHistory,
    } = useGlobalAppSearch()

    const searchHints = getSearchHistoryHints(loading, searchValue, searchHistory)

    const { isOpen } = useModal()

    return (
        <GlobalAppSearchModalStyled>
            <Flex d="column" gap="8px" h="100%">
                <Search
                    value={searchValue}
                    setValue={setSearchValue}
                    loading={loading}
                    focusOn={isOpen}
                    hints={searchHints}
                />
                <Slider
                    pages={config.map(({ title }) => ({ title }))}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <PerhapsYouMeant value={searchValue} setValue={setSearchValue} />

                {showMessage && (
                    <Flex h="100%">
                        <Error
                            size="60px"
                            text={'Введите что-нибудь. Например, "Цифровые сервисы"'}
                            image={<FiSearch />}
                        />
                    </Flex>
                )}
                {!loading && searchValue.length !== 0 && !showMessage && !getDataLength(config[currentPage].data) && (
                    <Flex h="100%">
                        <Error size="60px" text="Ничего не было найдено" image={<FiEyeOff />} />
                    </Flex>
                )}
                {loading &&
                    Array(10)
                        .fill(0)
                        .map((_, i) => {
                            return <SearchSkeleton key={i} />
                        })}

                {showSearchResult && <>{config[currentPage].content}</>}
            </Flex>
        </GlobalAppSearchModalStyled>
    )
}

export default GlobalAppSearchModal
