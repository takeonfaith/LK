import React, { useEffect, useState } from 'react'
import Select, { SelectPage } from '@features/select'
import { FormBlock, Title, Wrapper } from '@ui/atoms'
import styled from 'styled-components'
import { personnelNotificationModel } from '@entities/notification'
import SliderPage from '../slider-page'
import { ListNotification } from './ui/atoms'
import { Notifications } from '@api/model/notification'
import checkNotifications from './lib/filter-notification'
import { FiSearch } from 'react-icons/fi'
import Input from '../../shared/ui/atoms/input'

const ElementsControlNotification = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`

const PersonnelNotifications = styled.div`
    width: 800px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    padding: 20px;

    @media (max-width: 900px) {
        width: 95%;
        padding: 0;
    }

    .slider-list-notification {
        margin-top: 10px;
    }
`

interface Props {
    title: string
}

const NotificationsPage = ({ title }: Props) => {
    const { data: notifications, error } = personnelNotificationModel.selectors.usePersonnelNotifications()
    const [foundNotification, setFoundNotification] = useState<Notifications>()
    const [searchValue, setSearchValue] = useState<string>('')
    const [selected, setSelected] = useState<SelectPage>({ id: 'all', title: 'Все' })
    useEffect(() => {
        setFoundNotification(JSON.parse(JSON.stringify(notifications)))
    }, [notifications])

    useEffect(() => {
        !!notifications &&
            setFoundNotification(
                checkNotifications(searchValue, selected.id, JSON.parse(JSON.stringify(notifications))),
            )
    }, [selected, searchValue])

    const items = [
        { id: 'all', title: 'Все' },
        { id: 'current', title: 'Актуальные' },
    ]

    return (
        <Wrapper
            loading={true}
            load={() => personnelNotificationModel.effects.getPersonnelNotificationsFx()}
            error={error}
            data={foundNotification}
        >
            <PersonnelNotifications>
                <FormBlock maxWidth={725}>
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
                    <SliderPage
                        pages={[
                            {
                                title: 'Отпуск',
                                condition: !!notifications?.vacation.length,
                                content: foundNotification?.vacation && (
                                    <ListNotification
                                        listNotification={foundNotification?.vacation}
                                        typeList="vacation"
                                    />
                                ),
                            },
                            {
                                title: 'Увольнение',
                                condition: !!notifications?.fire.length,
                                content: foundNotification?.fire && (
                                    <ListNotification listNotification={foundNotification?.fire} typeList="fire" />
                                ),
                            },
                            {
                                title: 'Командировка',
                                condition: !!notifications?.businesstrip.length,
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
                </FormBlock>
            </PersonnelNotifications>
        </Wrapper>
    )
}

export default NotificationsPage
