import { User as UserType } from '@api/model'
import paginationList from '@features/all-teachers/model'
import Select, { SelectPage } from '@features/select'
import Block from '@ui/block'
import { LocalSearch } from '@ui/molecules'
import PagintaionList from '@ui/pagination-list'
import { useStore } from 'effector-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { User } from 'widgets'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .search-and-filter {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        margin-bottom: 0.5rem;
    }
`
const Content = () => {
    const { $items, $isPending, $hasNext, next } = paginationList
    const items = useStore($items)
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)

    const [filters, setFilters] = useState<SelectPage[] | null>(null)

    return (
        <PageWrapper>
            <Block maxWidth="800px" orientation="vertical" height="100%" maxHeight="100%" justifyContent="none">
                <div className="search-and-filter">
                    <LocalSearch
                        whereToSearch={undefined}
                        searchEngine={() => null}
                        setResult={() => null}
                        placeholder="Поиск учетелей"
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
                    items={items}
                    renderItem={renderItem}
                    handleNext={next}
                    isPending={isPending}
                    hasNext={hasNext}
                />
            </Block>
        </PageWrapper>
    )
}

export default Content

function renderItem(item: UserType, index?: number) {
    return <User name={item.name} type="teacher" key={index} />
}
