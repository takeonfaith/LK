import { ListWrapper } from '@ui/list/styles'
import { Loading } from '@ui/loading'
import React, { useCallback } from 'react'
import styled from 'styled-components'

const List = styled(ListWrapper)`
    .scrolable-content {
        width: 100%;
    }
`

type PagintaionListProps<T> = {
    hasNext?: boolean
    isPending?: boolean
    handleNext?: () => void
    items: Nullable<T[]>
    renderItem: (item: T, index?: number) => ChildrenType
    offset?: number
}

export const PAGINATION_OFFSET = 50

export function PagintaionList<T>({
    items,
    renderItem,
    hasNext,
    isPending,
    handleNext,
    offset = PAGINATION_OFFSET,
}: PagintaionListProps<T>) {
    const scrollHandler = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
            const containerHeight = event.currentTarget.clientHeight
            const scrollHeight = event.currentTarget.scrollHeight

            const scrollTop = event.currentTarget.scrollTop

            if (scrollHeight - offset < scrollTop + containerHeight) {
                if (hasNext && !isPending) {
                    handleNext?.()
                }
            }
        },
        [handleNext, hasNext, isPending],
    )

    return (
        <List innerPadding="10px 0" width="100%" height="100%" onScroll={scrollHandler}>
            <div className="scrolable-content">{(items || []).map((item, index) => renderItem(item, index))}</div>
            {hasNext && isPending && <Loading width="40px" height="40px" />}
            {hasNext && !isPending && <div onClick={handleNext}>load</div>}
        </List>
    )
}

export default PagintaionList
