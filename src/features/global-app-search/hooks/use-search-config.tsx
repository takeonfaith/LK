import { IRoutes } from '@app/routes/general-routes'
import { TNotification, lkNotificationModel } from '@entities/lk-notifications'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { FoundPages } from '@features/all-pages'
import searchFunc from '@features/all-pages/lib/search'
import DivisionsList from '@features/divisions-list'
import GroupsList from '@features/groups-list'
import pages from '@pages/helpful-information/config/pages-config'
import search from '@pages/helpful-information/lib/search'
import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'
import BlocksList from '@pages/helpful-information/ui/molecules/blocks-list'
import { studentApi, teacherApi } from '@shared/api'
import { TStudent, TTeacher } from '@shared/api/model'
import { getGroups } from '@shared/api/student-api'
import normalizeString from '@shared/lib/normalize-string'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React, { useMemo, useState } from 'react'
import { User } from 'widgets'
import NotificationList from 'widgets/lk-notification-list/ui/list'
import getDataLength from '../lib/get-data-length'

type SearchConfig = {
    title: string
    content: ChildrenType
    data: any
    clear: () => void
    search: (value: string) => Promise<void> | void
}[]

const FoundPeople = ({ people, type }: { people: (TTeacher | TStudent)[] | null; type: 'stud' | 'staff' }) => {
    if (!people || people.length === 0) return null

    return (
        <Flex d="column">
            {people.map((s) => (
                <User name={s.fio} type={type} {...s} key={s.id} />
            ))}
        </Flex>
    )
}

const useSearchConfig = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const isStaff = user?.user_status === 'staff'

    const mergedPages = useMemo(
        () =>
            pages.flatMap(({ visible, content }) => {
                if ((visible === 'staff' && isStaff) || (visible === 'student' && !isStaff) || visible === 'all')
                    return content
                return []
            }),
        [isStaff],
    )
    const [groups, setGroups] = useState<string[] | null>(null)
    const [divisions, setDivisions] = useState<string[] | null>(null)
    const [staff, setStaff] = useState<TTeacher[] | null>(null)
    const [students, setStudents] = useState<TStudent[] | null>(null)
    const [foundPages, setFoundPages] = useState<IRoutes | null>(null)
    const [foundNotifications, setFoundNotifications] = useState<TNotification[] | null>(null)
    const [foundHelpfullPages, setFoundHelpfullPages] = useState<HelpfulPage[] | null>(null)

    const preconfig: SearchConfig = [
        {
            title: 'Разделы',
            content: <FoundPages pages={foundPages} showNotFound={false} />,
            clear: () => {
                setFoundPages(null)
            },
            search: (value) => {
                if (allRoutes) {
                    const result = searchFunc(value, allRoutes)
                    setFoundPages(result)
                }
            },
            data: foundPages,
        },
        {
            title: 'Студенты',
            content: <FoundPeople people={students} type="stud" />,
            data: students,
            clear: () => {
                setStudents(null)
            },
            search: async (value) => {
                const { data } = await studentApi.get(value, '', 1, 20)
                setStudents(data.items)
            },
        },
        {
            title: 'Сотрудники',
            content: <FoundPeople people={staff} type="staff" />,
            data: staff,
            clear: () => {
                setStaff(null)
            },
            search: async (value) => {
                const { data } = await teacherApi.get(value, '', 1, 20)
                setStaff(data.items)
            },
        },
        {
            title: 'Группы',
            content: <GroupsList groups={groups} />,
            data: groups,
            clear: () => {
                setGroups(null)
            },
            search: async (value) => {
                const { data } = await getGroups(value)
                setGroups(data.items)
            },
        },
        {
            title: 'Подразделения',
            content: <DivisionsList divisions={divisions} />,
            data: divisions,
            clear: () => {
                setDivisions(null)
            },
            search: async (value) => {
                const { data } = await teacherApi.getDivisions(value)
                setDivisions(data.items)
            },
        },
        {
            title: 'Уведомления',
            content: <NotificationList notifications={foundNotifications} />,
            clear: () => {
                setFoundNotifications(null)
            },
            search: (value) => {
                const found = notifications.filter((n) => normalizeString(n.title).includes(value))
                setFoundNotifications(found)
            },
            data: foundNotifications,
        },
        {
            title: 'Полезная информация',
            content: <BlocksList blocks={foundHelpfullPages} isStaff={isStaff} />,
            clear: () => {
                setFoundHelpfullPages(null)
            },
            search: (value) => {
                const found = search(value, mergedPages)
                setFoundHelpfullPages(found)
            },
            data: foundHelpfullPages,
        },
    ]

    const getAllTab = (): SearchConfig[number] => {
        const { content, clear, data } = preconfig.reduce(
            (acc, el) => {
                if (getDataLength(el.data)) {
                    acc.data.push(el.data)
                    acc.content.push(
                        <>
                            <Title size={4} align="left">
                                {el.title}
                            </Title>
                            {el.content}
                            <Divider />
                        </>,
                    )
                }
                acc.clear.push(el.clear)
                return acc
            },
            { content: [], clear: [], data: [] } as Record<'content' | 'clear' | 'data', any[]>,
        )

        return {
            title: 'Все',
            content,
            clear: () => clear.map((f) => f()),
            search: async (value: string) => {
                // Group Search
                if (value.length <= 8 && /\d|[-]/g.test(value)) {
                    await preconfig[3].search(value)
                } else {
                    preconfig[0].search(value)
                    preconfig[5].search(value)
                    preconfig[6].search(value)
                    if (getDataLength(preconfig[0].data) === 0) {
                        // Other Search
                        await preconfig[1].search(value)
                        await preconfig[2].search(value)
                        await preconfig[4].search(value)
                    }
                }
            },
            data,
        }
    }

    return [getAllTab(), ...preconfig]
}

export default useSearchConfig
