import React from 'react'
import paginationList from '@features/all-teachers/model'
import Block from '@shared/ui/block'
import { CenterPage, Wrapper } from '@ui/atoms'
import { useStore } from 'effector-react'
import ListOfPeople from 'widgets/list-of-people'
import styled from 'styled-components'
import { SelectPage } from '@features/select'
import { DIVISIONS } from './const'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`

const prepareFilters = (divisions: string[]): SelectPage[] => {
    const filters = [{ id: 'Все', title: 'Все' }]

    const sorted = divisions.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    for (let i = 0; i < sorted.length; i++) {
        const division = sorted[i]
        filters.push({ id: division, title: division })
    }

    return filters
}

const AllTeachersPage = () => {
    const { $isPending, $items } = paginationList
    const isPending = useStore($isPending)
    const items = useStore($items)

    const filters: SelectPage[] = prepareFilters(DIVISIONS)

    const underSearchText = (filter: SelectPage | null) => {
        if (filter?.title === 'Все') return null

        return `Кафедра: ${filter?.title} • Всего: ${items?.length ?? 0}`
    }

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <CenterPage>
                <PageWrapper>
                    <Block maxWidth="700px" orientation="vertical" height="100%" maxHeight="100%" justifyContent="none">
                        <ListOfPeople
                            title="Сотрудники"
                            searchPlaceholder="Поиск сотрудников"
                            paginationList={paginationList}
                            filters={filters}
                            underSearchText={underSearchText}
                        />
                    </Block>
                </PageWrapper>
            </CenterPage>
        </Wrapper>
    )
}

export default AllTeachersPage
