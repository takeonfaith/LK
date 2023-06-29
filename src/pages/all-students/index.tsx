import { paginationList } from '@entities/all-students'
import { userModel } from '@entities/user'
import { SelectPage } from '@features/select'
import { getGroups } from '@shared/api/student-api'
import Masks from '@shared/lib/masks'
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
        height: calc(100vh - 125px);
    }
`

const AllStudentsPage = () => {
    const { $isPending, $items } = paginationList
    const isPending = useStore($isPending)
    const route: { params: { filter?: string } } = useRouteMatch()
    const items = useStore($items)
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const filter = route.params.filter ?? user?.group ?? ''

    const underSearchText = (filter: SelectPage | null) => {
        if (filter?.title === 'Все' || !filter?.id) return null

        return `Группа: ${filter?.id} • Всего: ${items?.length ?? 0}`
    }

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <PageWrapper>
                <PageBlock>
                    <ListOfPeople
                        searchPlaceholder="Поиск студентов"
                        paginationList={paginationList}
                        filterRequest={getGroups}
                        filterPlaceholder="Группа"
                        defaultFilter={filter}
                        filter={user?.user_status === 'stud' ? filter : undefined}
                        customMask={Masks.groupMask}
                        underSearchText={underSearchText}
                    />
                </PageBlock>
            </PageWrapper>
        </Wrapper>
    )
}

export default AllStudentsPage
