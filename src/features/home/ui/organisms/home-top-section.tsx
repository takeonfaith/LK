import { ALERTS_ROUTE } from '@app/routes/general-routes'
import { userModel } from '@entities/user'
import Notification from '@shared/ui/notification'
import React from 'react'
import { MdOutlineNotifications } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import UserBig from 'widgets/user-big'

const HomeTopSectionStyled = styled.div`
    .notification {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--brLight);

        &:hover {
            background: var(--almostTransparent);
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
    }
`

const HomeTopSection = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <HomeTopSectionStyled>
            <Link className="notification" to={ALERTS_ROUTE}>
                <Notification
                    outline="none"
                    box-shadow="0px 0px 0px 3px var(--schedule)"
                    color="red"
                    top="13px"
                    right="4px"
                    visible={user?.hasAlerts}
                    className="notification-circle"
                ></Notification>
                <MdOutlineNotifications />
            </Link>
        </HomeTopSectionStyled>
    )
}

export default HomeTopSection
