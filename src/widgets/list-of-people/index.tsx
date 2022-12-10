import React from 'react'
import Select, { SelectPage } from '@features/select'
import { Title } from '@shared/ui/title'
import { LocalSearch } from '@ui/molecules'
import PagintaionList from '@ui/pagination-list'
import { Event, Store } from 'effector'
import { Gate, useStore } from 'effector-react'
import { useState } from 'react'
import styled from 'styled-components'
import { User } from 'widgets'

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .search-and-filter {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`

type TUser = {
    id: string
    division?: string
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
    filters?: SelectPage[]
    gate: Gate<SelectPage | null>
}

const ListOfPeople = <T extends TUser>({ title, searchPlaceholder, paginationList, filters }: Props<T>) => {
    const { $items, $isPending, $hasNext, next, load } = paginationList
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)

    const [filter, setFilter] = useState<SelectPage | null>(filters?.[0] ?? null)

    const handleNext = () => {
        next({ filter })
    }

    const handleReload = () => {
        load({ filter })
    }

    return (
        <ListWrapper>
            <Title size={2} align="left" bottomGap>
                {title}
            </Title>
            <div className="search-and-filter">
                <LocalSearch
                    whereToSearch={undefined}
                    searchEngine={() => null}
                    setResult={() => null}
                    placeholder={searchPlaceholder ?? 'Поиск'}
                />
                {filters && <Select items={filters} setSelected={(data: any) => setFilter(data)} selected={filter} />}
            </div>
            <PagintaionList
                items={$items.getState()}
                renderItem={renderItem}
                handleNext={handleNext}
                isPending={isPending}
                hasNext={hasNext}
                filter={filter}
                handleReload={handleReload}
                showAlphabetLetters
            />
        </ListWrapper>
    )
}

export default ListOfPeople

function renderItem<T extends TUser>(item: T, isMe: boolean, index?: number) {
    return <User name={item.fio} type={item.division ? 'teacher' : 'student'} key={index} isMe={isMe} />
}
