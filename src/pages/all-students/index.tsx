import React from 'react'
import paginationList, { PageGate } from '@features/all-students/model'
import Block from '@shared/ui/block'
import { CenterPage, Wrapper } from '@ui/atoms'
import { useGate, useStore } from 'effector-react'
import ListOfPeople from 'widgets/list-of-people'

const AllStudentsPage = () => {
    const { $isPending, $items } = paginationList
    const isPending = useStore($isPending)
    const items = useStore($items)

    useGate(PageGate)

    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <CenterPage>
                <Block maxWidth="700px" orientation="vertical" height="100%" maxHeight="100%" justifyContent="none">
                    <ListOfPeople
                        title="Одногруппники"
                        searchPlaceholder="Поиск студентов"
                        paginationList={paginationList}
                    />
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default AllStudentsPage
