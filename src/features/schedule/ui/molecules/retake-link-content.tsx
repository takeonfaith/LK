import React from 'react'
import { PageLinkWrapper as ContentWrapper } from '@features/all-pages/ui/molecules/page-link-content'
import { Icon } from '@features/all-pages'
import { RetakeLinkProps } from './retake-link'

const RetakeLinkContent = ({ title, icon, color }: RetakeLinkProps) => {
    return (
        <ContentWrapper
            padding="0"
            width={'100%'}
            maxWidth={'100%'}
            height={'135px'}
            justifyContent="center"
            color={color.length ? color : 'blue'}
            isVertical={true}
            hasNotifications={false}
        >
            <div className="outside">
                <Icon color={color.length ? color : 'blue'}>{icon}</Icon>
                <b>{title}</b>
            </div>
        </ContentWrapper>
    )
}

export default RetakeLinkContent
