import React from 'react'
import { paginationList } from '@entities/all-students'
import { SelectPage } from '@features/select'
import Block from '@shared/ui/block'
import { CenterPage, Wrapper } from '@ui/atoms'
import { useStore } from 'effector-react'
import ListOfPeople from 'widgets/list-of-people'
import { userModel } from '@entities/user'
import styled from 'styled-components'

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 20px);

    @media (max-width: 1000px) {
        height: calc(100vh - 80px);
    }
`

const AllStudentsPage = () => {
    const { $isPending, $items } = paginationList
    const isPending = useStore($isPending)
    const items = useStore($items)
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const filter: SelectPage[] = [
        { id: user?.group ?? '', title: 'Моя группа' },
        { id: '1', title: 'Все' },
    ]
    const underSearchText = (filter: SelectPage | null) => {
        if (filter?.title === 'Все') return null

        return `Группа: ${filter?.id} • Всего: ${items?.length ?? 0}`
    }

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <CenterPage>
                <PageWrapper>
                    <Block maxWidth="700px" orientation="vertical" height="100%" maxHeight="100%" justifyContent="none">
                        <ListOfPeople
                            title="Студенты"
                            searchPlaceholder="Поиск студентов"
                            paginationList={paginationList}
                            filters={user?.user_status === 'stud' ? filter : undefined}
                            underSearchText={underSearchText}
                        />
                    </Block>
                </PageWrapper>
            </CenterPage>
        </Wrapper>
    )
}

export default AllStudentsPage
