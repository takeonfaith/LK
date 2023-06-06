import SearchWithHints from '@features/search-with-hints'
import { SelectPage } from '@features/select'
import GlobalSearch from '@shared/ui/global-search'
import { Hint } from '@shared/ui/search'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import { AxiosResponse } from 'axios'
import { Event, Store } from 'effector'
import React, { useState } from 'react'
import styled from 'styled-components'
import PeoplePaginationList from './people-pagination-list'

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`

type TUser = {
    id: string
    division?: string
    group?: string
    fio: string
    avatar?: string
}

type Props<T extends TUser> = {
    title: string
    searchPlaceholder?: string
    paginationList: {
        $items: Store<T[] | null>
        $isPending: Store<boolean>
        $hasNext: Store<boolean>
        next: Event<ServerListRequest<SelectPage | null>>
        load: Event<ServerListRequest<SelectPage | null>>
    }
    filter?: string
    underSearchText?: (filter: SelectPage | null) => string | null
    noResultContent?: JSX.Element | null
    defaultFilter: string
    filterPlaceholder?: string
    customMask?: (value: string, prevValue?: string) => string
    filterRequest?: (value: string) => Promise<AxiosResponse<{ items: string[] }, any>>
    search?: boolean
}

const ListOfPeople = <T extends TUser>({
    title,
    searchPlaceholder,
    paginationList,
    defaultFilter,
    noResultContent,
    filterPlaceholder,
    filterRequest,
    underSearchText,
    customMask,
    search = true,
}: Props<T>) => {
    const { load } = paginationList
    const [groupSearch, setGroupSearch] = useState(defaultFilter)
    const [filter, setFilter] = useState<Hint | null>({ id: groupSearch, value: groupSearch, title: groupSearch })
    const under = underSearchText?.(filter)

    const handleSearch = async (value: string) => {
        await load({ filter, search: value })
    }

    const onHintClick = (hint: Hint | undefined) => {
        setFilter(hint ?? null)
    }

    const onValueEmpty = () => {
        setFilter(null)
    }

    return (
        <ListWrapper>
            <Title size={2} align="left" bottomGap>
                {title}
            </Title>
            <div className="search-and-filter">
                {search && (
                    <GlobalSearch
                        triggerSearchOn={[filter?.id ?? '']}
                        placeholder={searchPlaceholder ?? 'Поиск'}
                        searchApi={handleSearch}
                        validationCheck
                    />
                )}
                {filterRequest && (
                    <SearchWithHints
                        value={groupSearch}
                        setValue={setGroupSearch}
                        onHintClick={onHintClick}
                        onValueEmpty={onValueEmpty}
                        customMask={customMask}
                        placeholder={filterPlaceholder ?? 'Поиск'}
                        request={filterRequest}
                    />
                )}
            </div>
            <Subtext visible={!!under}>{under}</Subtext>
            <PeoplePaginationList paginationList={paginationList} noResultContent={noResultContent} filter={filter} />
        </ListWrapper>
    )
}

export default ListOfPeople
