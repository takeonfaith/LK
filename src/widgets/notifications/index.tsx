import { Notifications } from '@api/model/notification'
import { personalNotificationModel } from '@entities/notification'
import Select, { SelectPage } from '@features/select'
import { CenterPage, Title, Wrapper } from '@ui/atoms'
import Block from '@ui/block'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import Input from '../../shared/ui/atoms/input'
import SliderPage from '../slider-page'
import checkNotifications from './lib/filter-notification'
import { ListNotification } from './ui/atoms'

const ElementsControlNotification = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

interface Props {
    title: string
    type: 'notifications' | 'docs'
}

const NotificationsPage = ({ title, type }: Props) => {
    const { data: notifications, error } = personalNotificationModel.selectors.usePersonalNotifications()
    const [foundNotification, setFoundNotification] = useState<Notifications>()
    const [searchValue, setSearchValue] = useState<string>('')
    const [selected, setSelected] = useState<SelectPage | null>({ id: 'all', title: 'Все' })
    useEffect(() => {
        setFoundNotification(JSON.parse(JSON.stringify(notifications)))
    }, [notifications])

    useEffect(() => {
        !!notifications &&
            setFoundNotification(
                checkNotifications(searchValue, selected?.id ?? '', JSON.parse(JSON.stringify(notifications))),
            )
    }, [selected, searchValue])

    const items = [
        { id: 'all', title: 'Все' },
        { id: 'current', title: 'Актуальные' },
    ]

    return (
        <Wrapper
            load={() => {
                personalNotificationModel.effects.setNotificationsType(type)
                personalNotificationModel.effects.getPersonalNotificationsFx()
            }}
            error={error}
            data={foundNotification}
        >
            <CenterPage padding="0 0 10px 0">
                <Block maxWidth={'725px'} orientation="vertical" gap="10px" height="fit-content" noAppearanceInMobile>
                    <Title size={2} align="left">
                        {title}
                    </Title>
                    <ElementsControlNotification>
                        <Input
                            value={searchValue}
                            setValue={setSearchValue}
                            placeholder={'Поиск'}
                            leftIcon={<FiSearch />}
                        />
                        <Select items={items} selected={selected} setSelected={setSelected} />
                    </ElementsControlNotification>
                    {type === 'docs' && foundNotification?.docs ? (
                        <ListNotification listNotification={foundNotification?.docs} typeList="docs" />
                    ) : (
                        <SliderPage
                            pages={[
                                {
                                    title: 'Отпуск',
                                    condition: !!notifications?.vacation?.length,
                                    content: foundNotification?.vacation && (
                                        <ListNotification
                                            listNotification={foundNotification?.vacation}
                                            typeList="vacation"
                                        />
                                    ),
                                },
                                {
                                    title: 'Увольнение',
                                    condition: !!notifications?.fire?.length,
                                    content: foundNotification?.fire && (
                                        <ListNotification listNotification={foundNotification?.fire} typeList="fire" />
                                    ),
                                },
                                {
                                    title: 'Командировка',
                                    condition: !!notifications?.businesstrip?.length,
                                    content: foundNotification?.businesstrip && (
                                        <ListNotification
                                            listNotification={foundNotification?.businesstrip}
                                            typeList="businesstrip"
                                        />
                                    ),
                                },
                            ]}
                            className="slider-list-notification"
                        />
                    )}
                </Block>
            </CenterPage>
        </Wrapper>
    )
}

export default NotificationsPage
