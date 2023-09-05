import React from 'react'
import styled from 'styled-components'
import { menuModel } from '@entities/menu'
import { DEFAULT_MOBILE_CONFIG } from '@entities/menu/model'
import { ListWrapper } from '@ui/list/styles'
import { SkeletonShape } from '@ui/skeleton-shape'
import { LeftsideBarItem } from 'widgets/leftside-bar/ui'
import Flex from '@shared/ui/flex'
import { MEDIA_QUERIES } from '@shared/consts'

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
    const { allRoutes, currentPage } = menuModel.selectors.useMenu()

    if (!allRoutes) {
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

    return (
        <MobileBottomMenuWrapper direction="horizontal" horizontalAlign="evenly">
            {DEFAULT_MOBILE_CONFIG.map((id) => {
                return <LeftsideBarItem key={id} {...allRoutes[id]} isCurrent={currentPage?.id === id} />
            })}
        </MobileBottomMenuWrapper>
    )
}

export default MobileBottomMenu
