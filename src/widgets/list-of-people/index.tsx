import React from 'react'
import Select, { SelectPage } from '@features/select'
import { Title } from '@shared/ui/title'
import { LocalSearch } from '@ui/molecules'
import PagintaionList from '@ui/pagination-list'
import { Event, Store } from 'effector'
import { useStore } from 'effector-react'
import { useState } from 'react'
import styled from 'styled-components'
import { User } from 'widgets'

const ListWrapper = styled.div`
    width: 100%;
    height: fit-content;
    overflow-y: auto;
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
        next: Event<void>
        load: Event<ServerListRequest<EmptyObject>>
    }
}

const ListOfPeople = <T extends TUser>({ title, searchPlaceholder, paginationList }: Props<T>) => {
    const { $items, $isPending, $hasNext, next } = paginationList
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)

    const [filters, setFilters] = useState<SelectPage[] | null>(null)

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
                <Select
                    items={[
                        {
                            id: 0,
                            title: 'Сфера',
                            children: [
                                { id: 1, title: 'Сфера 1' },
                                { id: 2, title: 'Сфера 2' },
                            ],
                        },
                        {
                            id: 1,
                            title: 'Группа',
                            children: [
                                { id: 3, title: 'Моя группа' },
                                { id: 4, title: 'Сфера' },
                            ],
                        },
                    ]}
                    multiple
                    setSelected={(data: any) => setFilters(data)}
                    selected={filters}
                />
            </div>
            <PagintaionList
                items={$items.getState()}
                renderItem={renderItem}
                handleNext={next}
                isPending={isPending}
                hasNext={hasNext}
            />
        </ListWrapper>
    )
}

export default ListOfPeople

function renderItem<T extends TUser>(item: T, index?: number) {
    return <User name={item.fio} type={item.division ? 'teacher' : 'student'} key={index} />
}
