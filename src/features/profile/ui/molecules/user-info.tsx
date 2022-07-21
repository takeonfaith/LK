import { userModel } from '@entities/user'
import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'
import React from 'react'
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

    return (
        <UserInfoWrapper>
            <SliderPage
                appearance={false}
                align="left"
                sliderWidth="400px"
                pages={[
                    { title: 'Учетная карточка', content: <AllInfo user={user} /> },
                    { title: 'Приказы', content: <Orders orders={user.orders} /> },
                ]}
            />
        </UserInfoWrapper>
    )
}

export default UserInfo
