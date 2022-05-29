import { SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { UserInfo } from '@features/profile'
import { Button } from '@ui/button'
import { Error } from '@ui/error'
import { ListWrapper } from '@ui/list/styles'

import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserBig from 'widgets/user-big'

const ProfileWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileTop = styled(ListWrapper)`
    min-height: 300px;
    width: 100%;
`

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!user || !allRoutes) return null

    if (!!error) return <Error text={error} />

    return (
        <ProfileWrapper>
            <ProfileTop horizontalAlign="center" verticalAlign="center" direction="vertical">
                <UserBig size="120px" avatar={user.avatar} name={user.fullName} />
                <Link to={SETTINGS_ROUTE}>
                    <Button icon={<FiSettings />} text={allRoutes['settings'].title} background="transparent" />
                </Link>
            </ProfileTop>
            <UserInfo />
        </ProfileWrapper>
    )
}

export default ProfilePage
