import { userModel } from '@entities/user'
import UserInfo from '@features/home/ui/organisms/user-info'
import { Content } from '@pages/home/ui/atoms/content'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import getGreetingMessage from '../home/lib/get-greeting-message'

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    if (!user) return null

    getGreetingMessage(user.name)
    return (
        <Wrapper
            load={function (): void {
                throw new Error('Function not implemented.')
            }}
            error={error}
            data={user}
        >
            <Content>
                <UserInfo user={user} />
            </Content>
        </Wrapper>
    )
}

export default ProfilePage
