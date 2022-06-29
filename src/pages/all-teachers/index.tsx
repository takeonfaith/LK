import paginationList, { PageGate } from '@features/all-teachers/model'
import { Content } from '@features/all-teachers/ui'
import { Wrapper } from '@ui/atoms'
import { useGate, useStore } from 'effector-react'
import React from 'react'

const AllTeachersPage = () => {
    const { $isPending, $items } = paginationList
    const isPending = useStore($isPending)
    const items = useStore($items)

    useGate(PageGate)
    return (
        <Wrapper load={function () {}} loading={isPending} error={null} data={items}>
            <Content />
        </Wrapper>
    )
}

export default AllTeachersPage
