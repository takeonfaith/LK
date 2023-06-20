import { baseNotification, businesstripNotification, docsNotification, ItemNotification } from '@api/model/notification'
import { personalNotificationModel } from '@entities/notification'
import Flex from '@shared/ui/flex'
import { Error } from '@ui/error'
import React from 'react'
import { CardDocument, CardNotification } from './index'

interface Props {
    listNotification: ItemNotification[]
}

const ListNotifications = ({ listNotification }: Props) => {
    const type = personalNotificationModel.selectors.useType()

    return (
        <Flex d="column" gap="8px">
            {listNotification.length ? (
                listNotification.map((notification) =>
                    type === 'notifications' ? (
                        <CardNotification
                            key={notification.id}
                            data={notification as baseNotification | businesstripNotification}
                        />
                    ) : (
                        <CardDocument key={notification.id} data={notification as docsNotification} />
                    ),
                )
            ) : (
                <Error text={'По заданным параметрам документ не найден'} />
            )}
        </Flex>
    )
}

export default ListNotifications
