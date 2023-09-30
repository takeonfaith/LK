import { IRoute } from '@app/routes/general-routes'
import LinkMoreButton from '@features/link-more-button'
import Notification from '@ui/notification'
import React from 'react'
import LeftsideBarItemWrapper from '../atoms/leftside-bar-item-wrapper'

type Props = IRoute & { isCurrent: boolean }

const LeftsideBarItem = (props: Props) => {
    const { menuPath, path, icon, title, isCurrent, isAdmin, color, notifications } = props

    return (
        <LeftsideBarItemWrapper
            to={menuPath ?? path}
            className="leftside-bar-item"
            color={color}
            isCurrent={isCurrent}
            title={title}
        >
            <Notification className="notification" top="50%" visible={isAdmin} right="-20px" color="pink">
                A
            </Notification>
            <Notification
                className="notification"
                top="50%"
                visible={!!notifications}
                right={isAdmin ? '0px' : '-20px'}
                color="red"
            >
                {notifications}
            </Notification>
            {icon}
            <span className="title">{title}</span>
            <LinkMoreButton route={props} />
        </LeftsideBarItemWrapper>
    )
}

export default React.memo(LeftsideBarItem)
