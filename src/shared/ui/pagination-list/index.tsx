import { userModel } from '@entities/user'
import { SelectPage } from '@features/select'
import { Loading } from '@ui/loading'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { Divider } from '../divider'
import { Error } from '../error'
import { Title } from '../title'

const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;

    .scrolable-content {
        width: 100%;
    }

    .alpabet-letter {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .title-wrapper {
            width: fit-content;
            color: var(--theme-mild-opposite);
        }
    }
`

type PagintaionListProps<T> = {
    hasNext?: boolean
    isPending?: boolean
    handleNext?: (filter: SelectPage | null) => void
    handleReload?: (filter: SelectPage | null) => void
    items: Nullable<T[]>
    renderItem: (item: T, isMe: boolean, index?: number) => ChildrenType
    offset?: number
    filter?: SelectPage | null
    showAlphabetLetters?: boolean
    noResultContent?: JSX.Element | null
}

export const PAGINATION_OFFSET = 50

export function PagintaionList<T extends { id: string; fio?: string; avatar?: string }>({
    items,
    renderItem,
    hasNext,
    isPending,
    handleNext,
    filter,
    showAlphabetLetters,
    noResultContent,
    offset = PAGINATION_OFFSET,
}: PagintaionListProps<T>) {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    let lastLetter = ''
    const scrollHandler = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
            const containerHeight = event.currentTarget.clientHeight
            const scrollHeight = event.currentTarget.scrollHeight

            const scrollTop = event.currentTarget.scrollTop

            if (scrollHeight - offset < scrollTop + containerHeight) {
                if (hasNext && !isPending) {
                    handleNext?.(filter ?? null)
                }
            }
        },
        [handleNext, hasNext, isPending, filter],
    )

    if (!isPending && (!items || items?.length === 0)) return <Error text="Нет результатов">{noResultContent}</Error>

    return (
        <List onScroll={scrollHandler}>
            <div className="scrolable-content">
                {(items || []).map((item, index) => {
                    const showLetter = showAlphabetLetters ? lastLetter !== item.fio?.charAt(0) : false
                    if (showLetter) lastLetter = item.fio?.charAt(0) ?? '-'
                    return (
                        <>
                            {showLetter && (
                                <div className="alpabet-letter">
                                    <Title size={4} align="left">
                                        {lastLetter}
                                    </Title>
                                    <Divider />
                                </div>
                            )}
                            {renderItem(item, user?.id.toString() === item.id, index)}
                        </>
                    )
                })}
            </div>
            {hasNext && isPending && <Loading width="40px" height="40px" />}
            {hasNext && !isPending && <Button onClick={() => handleNext?.(filter ?? null)} text="Загрузить еще" />}
        </List>
    )
}

export default PagintaionList
