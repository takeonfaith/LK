import React from 'react'
import styled from 'styled-components'
import { menuModel } from '@entities/menu'
import { DEFAULT_STUDENT_MOBILE_CONFIG, DEFAULT_STAFF_MOBILE_CONFIG } from '@entities/menu/model'
import { ListWrapper } from '@ui/list/styles'
import { SkeletonShape } from '@ui/skeleton-shape'
import { LeftsideBarItem } from 'widgets/leftside-bar/ui'
import { userModel } from '@entities/user'

const MobileBottomMenuWrapper = styled(ListWrapper)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: var(--mobile-bottom-menu-height);
    background: var(--schedule);
    border-top: 1px solid var(--scheduleBg);
    padding: 0px 10px;
    display: none;

    @media (max-width: 1000px) {
        display: flex;
    }
`

const MobileBottomMenu = () => {
    const { allRoutes, currentPage } = menuModel.selectors.useMenu()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!allRoutes || !user) {
        return (
            <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly" verticalAlign="center">
                <SkeletonShape shape="rect" size={{ width: '55px', height: '40px' }} margin="0" />
                <SkeletonShape shape="rect" size={{ width: '55px', height: '40px' }} margin="0" />
                <SkeletonShape shape="rect" size={{ width: '55px', height: '40px' }} margin="0" />
                <SkeletonShape shape="rect" size={{ width: '55px', height: '40px' }} margin="0" />
                <SkeletonShape shape="rect" size={{ width: '55px', height: '40px' }} margin="0" />
            </MobileBottomMenuWrapper>
        )
    }

    const config = user?.user_status === 'stud' ? DEFAULT_STUDENT_MOBILE_CONFIG : DEFAULT_STAFF_MOBILE_CONFIG

    return (
        <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly">
            {config.map((id) => {
                return <LeftsideBarItem key={id} {...allRoutes[id]} isCurrent={currentPage?.id === id} />
            })}
        </MobileBottomMenuWrapper>
    )
}

export default MobileBottomMenu
