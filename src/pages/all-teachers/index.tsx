import { paginationList } from '@entities/all-teachers'
import { userModel } from '@entities/user'
import { SelectPage } from '@features/select'
import { getDivisions } from '@shared/api/teacher-api'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import { useStore } from 'effector-react'
import React from 'react'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import ListOfPeople from 'widgets/list-of-people'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--header-height) - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`

const AllTeachersPage = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { $isPending, $items } = paginationList
    const route: { params: { filter?: string } } = useRouteMatch()

    const isPending = useStore($isPending)
    const items = useStore($items)
    const filter = route.params.filter ?? user?.subdivisions?.[0].subdivision ?? ''

    const underSearchText = (filter: SelectPage | null) => {
        if (!filter?.title) return null

        return `Кафедра: ${filter?.title} • Всего: ${items?.length ?? 0}`
    }

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <PageWrapper>
                <PageBlock>
                    <ListOfPeople
                        searchPlaceholder="Поиск сотрудников"
                        paginationList={paginationList}
                        filterRequest={getDivisions}
                        defaultFilter={filter}
                        filterPlaceholder="Подразделения"
                        underSearchText={underSearchText}
                    />
                </PageBlock>
            </PageWrapper>
        </Wrapper>
    )
}

export default AllTeachersPage
