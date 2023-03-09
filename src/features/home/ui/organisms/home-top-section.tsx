import { userModel } from '@entities/user'
import Notification from '@shared/ui/notification'
import React from 'react'
import { MdOutlineNotifications } from 'react-icons/md'
import styled from 'styled-components'
import { useModal } from 'widgets'
import LkNotificationList from 'widgets/lk-notification-list'
// import UserBig from 'widgets/user-big'

const HomeTopSectionStyled = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--brLight);

    &:hover {
        background: var(--theme-mild-xxl);
    }

    .notification-circle {
        min-width: 10px;
        width: 10px;
        height: 10px;
    }

    svg {
        width: 22px;
        height: 22px;
        color: var(--text);
    }
`

const HomeTopSection = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { open } = useModal()

    const handleClick = () => {
        open(<LkNotificationList />)
    }
    return (
        <HomeTopSectionStyled onClick={handleClick}>
            <Notification
                outline="none"
                box-shadow="0px 0px 0px 3px var(--schedule)"
                color="red"
                top="14px"
                right="5px"
                visible={!user?.hasAlerts}
                pulsing
                className="notification-circle"
            ></Notification>
            <MdOutlineNotifications />
        </HomeTopSectionStyled>
    )
}

export default HomeTopSection
