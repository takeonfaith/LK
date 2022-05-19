import React from 'react'
import styled from 'styled-components'
import { ItemNotification, NameListNotification } from '@api/model/notification'
import { CardNotification } from './index'
import { Error } from '@ui/error'

const ListNotificationsWrapper = styled.div`
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
    return (
        <ListNotificationsWrapper>
            {listNotification.length ? (
                listNotification.map((notification) => (
                    <CardNotification key={notification.id} data={notification} type={typeList} />
                ))
            ) : (
                <Error text={'По заданным параметрам документ не найден'} />
            )}
        </ListNotificationsWrapper>
    )
}

export default ListNotifications
