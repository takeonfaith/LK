import React from 'react'
import { baseNotification, businesstripNotification, docsNotification, ItemNotification } from '@api/model/notification'
import { CardNotification, CardDocument } from './index'
import { Error } from '@ui/error'
import { personalNotificationModel } from '@entities/notification'
import List from '@shared/ui/list'

interface Props {
    listNotification: ItemNotification[]
}

const ListNotifications = ({ listNotification }: Props) => {
    const type = personalNotificationModel.selectors.useType()

    return (
        <List direction="vertical" gap={8} scroll={false}>
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
        </List>
    )
}

export default ListNotifications
