import React from 'react'
import styled from 'styled-components'
import {
    baseNotification,
    businesstripNotification,
    docsNotification,
    ItemNotification,
    NameListNotification,
} from '@api/model/notification'
import { CardNotification, CardDocument } from './index'
import { Error } from '@ui/error'
import { personalNotificationModel } from '@entities/notification'

const ListNotificationsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 1px;
    row-gap: 20px;
`

interface Props {
    listNotification: ItemNotification[]
    typeList: NameListNotification
}

const ListNotifications = ({ listNotification, typeList }: Props) => {
    const type = personalNotificationModel.selectors.useType()

    return (
        <ListNotificationsWrapper>
            {listNotification.length ? (
                listNotification.map((notification) =>
                    type === 'notifications' ? (
                        <CardNotification
                            key={notification.id}
                            data={notification as baseNotification | businesstripNotification}
                            type={typeList}
                        />
                    ) : (
                        <CardDocument key={notification.id} data={notification as docsNotification} type={typeList} />
                    ),
                )
            ) : (
                <Error text={'По заданным параметрам документ не найден'} />
            )}
        </ListNotificationsWrapper>
    )
}

export default ListNotifications
