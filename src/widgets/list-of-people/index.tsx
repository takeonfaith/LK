import React from 'react'
import { SelectPage } from '@features/select'
import { Title } from '@shared/ui/title'
import PagintaionList from '@ui/pagination-list'
import { Event, Store } from 'effector'
import { useStore } from 'effector-react'
import { useState } from 'react'
import styled from 'styled-components'
import { User } from 'widgets'
import GlobalSearch from '@shared/ui/global-search'
import Subtext from '@shared/ui/subtext'
import { Hint } from '@shared/ui/search'
import SearchWithHints from '@features/search-with-hints'

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
    filterRequest: (value: string) => Promise<string[]>
}

const ListOfPeople = <T extends TUser>({
    title,
    searchPlaceholder,
    paginationList,
    defaultFilter,
    noResultContent,
    filterRequest,
    filterPlaceholder,
    underSearchText,
}: Props<T>) => {
    const { $items, $isPending, $hasNext, next, load } = paginationList
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)
    const [groupSearch, setGroupSearch] = useState(defaultFilter)
    const [filter, setFilter] = useState<Hint | null>({ id: groupSearch, value: groupSearch, title: groupSearch })
    const under = underSearchText?.(filter)

    const handleNext = () => {
        next({ filter })
    }

    const handleReload = () => {
        load({ filter })
    }

    const handleSearch = (value: string) => {
        load({ filter, search: value })
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
                <GlobalSearch
                    triggerSearchOn={[filter?.id ?? '']}
                    placeholder={searchPlaceholder ?? 'Поиск'}
                    searchApi={handleSearch}
                    validationCheck
                />
                {filterRequest && (
                    <SearchWithHints
                        value={groupSearch}
                        setValue={setGroupSearch}
                        onHintClick={onHintClick}
                        onValueEmpty={onValueEmpty}
                        placeholder={filterPlaceholder ?? 'Поиск'}
                        request={filterRequest}
                    />
                )}
            </div>
            <Subtext visible={!!under}>{under}</Subtext>
            <PagintaionList
                items={$items.getState()}
                renderItem={renderItem}
                handleNext={handleNext}
                isPending={isPending}
                hasNext={hasNext}
                filter={filter}
                handleReload={handleReload}
                showAlphabetLetters
                noResultContent={noResultContent}
            />
        </ListWrapper>
    )
}

export default ListOfPeople

function renderItem<T extends TUser>(item: T, isMe: boolean, index?: number) {
    return (
        <User
            name={item.fio}
            type={item.division ? 'teacher' : 'student'}
            key={index}
            group={item.group}
            isMe={isMe}
            division={item.division}
            indexNumber={(index ?? 0) + 1}
        />
    )
}
