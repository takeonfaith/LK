import React from 'react'
import { userModel } from '@entities/user'
import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'
import styled from 'styled-components'
import { SliderPage } from 'widgets'

const UserInfoWrapper = styled.div`
    font-size: 0.9em;
    width: 100%;
`

const UserInfo = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    const teacherPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} /> },
        // {
        //     title: 'Сведения о вакцинации',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={VAX_ROUTE} />
        //         </div>
        //     ),
        // },
        // {
        //     title: 'Дети и внуки',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={CHILDREN_ROUTE} />
        //         </div>
        //     ),
        // },
    ]

    const studentPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} /> },
        { title: 'Приказы', content: <Orders orders={user.orders} /> },
    ]

    return (
        <UserInfoWrapper>
            <SliderPage
                appearance={false}
                align="left"
                width="fit-content"
                maxWidth="100%"
                sliderWidth="500px"
                pages={user.user_status === 'stud' ? studentPages : teacherPages}
            />
        </UserInfoWrapper>
    )
}

export default UserInfo
