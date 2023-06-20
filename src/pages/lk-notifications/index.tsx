import { SETTINGS_NOTIFICATIONS } from '@app/routes/general-routes'
import { Button, CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LkNotificationList from 'widgets/lk-notification-list'

const LkNotificationsPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock
                topRightCornerElement={
                    <Link to={SETTINGS_NOTIFICATIONS}>
                        <Button icon={<FiSettings />} height="35px" />
                    </Link>
                }
            >
                <LkNotificationList />
            </PageBlock>
        </CenterPage>
    )
}

export default LkNotificationsPage
