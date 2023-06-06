import { SETTINGS_PERSONAl_ROUTE } from '@app/routes/general-routes'
import { Button, CenterPage, Title, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import LkNotificationList from 'widgets/lk-notification-list'

const LkNotificationsPage = () => {
    return (
        <Wrapper load={() => null} error={null} data={[]} loading={false}>
            <CenterPage height="100%">
                <Block height="100%" orientation="vertical" maxWidth="650px" gap="24px" justifyContent="flex-start">
                    <Flex>
                        <Title size={2} align="left">
                            Уведомления
                        </Title>
                        <Link to={SETTINGS_PERSONAl_ROUTE}>
                            <Button icon={<FiSettings />} minWidth="40px" />
                        </Link>
                    </Flex>
                    <LkNotificationList />
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default LkNotificationsPage
