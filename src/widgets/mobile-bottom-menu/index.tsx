import React from 'react'
import styled from 'styled-components'
import { menuModel } from '@entities/menu'
import { DEFAULT_STUDENT_MOBILE_CONFIG, DEFAULT_STAFF_MOBILE_CONFIG } from '@entities/menu/model'
import { ListWrapper } from '@ui/list/styles'
import { SkeletonShape } from '@ui/skeleton-shape'
import { LeftsideBarItem } from 'widgets/leftside-bar/ui'
import Flex from '@shared/ui/flex'
import { MEDIA_QUERIES } from '@shared/constants'
import { userModel } from '@entities/user'
import { useLocation } from 'react-router'

const MobileBottomMenuWrapper = styled(ListWrapper)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--block);
    border-top: 1px solid var(--theme-2);
    padding: 0px 10px;
    display: none;

    ${MEDIA_QUERIES.isTablet} {
        display: flex;
    }
`

const LinkSkeleton = () => {
    return (
        <Flex d="column" gap="8px">
            <SkeletonShape shape="circle" size={{ width: '20px', height: '20px' }} margin="0" />
            <SkeletonShape shape="rect" size={{ width: '35px', height: '10px' }} margin="0" />
        </Flex>
    )
}

const MobileBottomMenu = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const location = useLocation()

    if (!allRoutes || !user) {
        return (
            <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly" verticalAlign="center">
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
                <LinkSkeleton />
            </MobileBottomMenuWrapper>
        )
    }

    const config = user?.user_status === 'stud' ? DEFAULT_STUDENT_MOBILE_CONFIG : DEFAULT_STAFF_MOBILE_CONFIG

    return (
        <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly">
            {config.map((id) => {
                return (
                    <LeftsideBarItem
                        key={id}
                        {...allRoutes[id]}
                        isCurrent={location.pathname.includes(allRoutes[id].path)}
                    />
                )
            })}
        </MobileBottomMenuWrapper>
    )
}

export default MobileBottomMenu
