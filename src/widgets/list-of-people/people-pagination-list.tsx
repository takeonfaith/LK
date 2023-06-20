import { SelectPage } from '@features/select'
import PagintaionList from '@shared/ui/pagination-list'
import { Hint } from '@shared/ui/search'
import { Store, Event } from 'effector'
import { useStore } from 'effector-react'
import React from 'react'
import User from 'widgets/user'

type TUser = {
    id: string
    division?: string
    group?: string
    fio: string
    avatar?: string
    faculty?: string
}

type Props<T extends TUser> = {
    paginationList: {
        $items: Store<T[] | null>
        $isPending: Store<boolean>
        $hasNext: Store<boolean>
        next: Event<ServerListRequest<SelectPage | null>>
        load: Event<ServerListRequest<SelectPage | null>>
    }
    noResultContent?: JSX.Element | null
    filter?: Hint | null
}

const PeoplePaginationList = <T extends TUser>({ filter, paginationList, noResultContent }: Props<T>) => {
    const { $items, $isPending, $hasNext, next, load } = paginationList
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)

    const handleNext = () => {
        next({ filter })
    }

    const handleReload = () => {
        load({ filter })
    }

    return (
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
    )
}

function renderItem<T extends TUser>(item: T, isMe: boolean, index?: number) {
    return (
        <User
            name={item.fio}
            type={item.division ? 'staff' : 'stud'}
            key={index}
            avatar={item.avatar}
            faculty={item.faculty}
            group={item.group}
            isMe={isMe}
            division={item.division}
            indexNumber={(index ?? 0) + 1}
        />
    )
}

export default PeoplePaginationList
