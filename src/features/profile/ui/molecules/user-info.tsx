import { userModel } from '@entities/user'
import MoreUserInfo from '@features/home/ui/organisms/more-user-info'
import Block from '@ui/block'
import BlockWrapper from '@ui/block/styles'
import React from 'react'
import styled from 'styled-components'

const UserInfo = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    return (
        <Block orientation="vertical" height="100%">
            <MoreUserInfo user={user} />
        </Block>
    )
}

export default UserInfo
