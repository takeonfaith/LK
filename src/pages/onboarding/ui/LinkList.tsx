import { IRoute } from '@app/routes/general-routes'
import { teachersPrivateRoutes } from '@app/routes/teacher-routes'
import { PageLink } from '@features/all-pages'
import Flex from '@shared/ui/flex'
import React from 'react'
import { BiBookOpen, BiGroup, BiPlusMedical, BiWifi } from 'react-icons/bi'
import { MdPsychology } from 'react-icons/md'

export const LinkList = () => {
    const links: IRoute[] = [
        {
            id: 'Социальная среда',
            title: 'Социальная среда',
            color: 'purple',
            Component: () => {
                React.useEffect(() => {
                    window.location.replace('https://profkommospolytech.ru/')
                }, [])

                return null
            },
            icon: <BiGroup />,
            isTemplate: false,
            path: '/social-environment',
        },
        {
            id: 'Психологическая помощь',
            title: 'Психологическая помощь',
            color: 'green',
            Component: () => {
                React.useEffect(() => {
                    window.location.replace(
                        'https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/',
                    )
                }, [])

                return null
            },
            icon: <MdPsychology />,
            isTemplate: false,
            path: '/psychological-help',
        },
        {
            id: 'Медицинская помощь',
            title: 'Медицинская помощь',
            color: 'red',
            Component: () => {
                React.useEffect(() => {
                    window.location.replace(
                        'https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/',
                    )
                }, [])

                return null
            },
            icon: <BiPlusMedical />,
            isTemplate: false,
            path: '/health-care',
            show: false,
        },
        {
            id: 'WI-FI  в университете',
            title: 'WI-FI  в университете',
            color: 'purple',
            Component: () => {
                return null
            },
            icon: <BiWifi />,
            isTemplate: false,
            path: '/wifi-at-the-university',
            show: false,
        },
        {
            id: 'Брендбук',
            title: 'Брендбук',
            color: 'orange',
            Component: () => {
                React.useEffect(() => {
                    window.location.replace('https://mospolytech.ru/ob-universitete/brandbook/')
                }, [])

                return null
            },
            icon: <BiBookOpen />,
            isTemplate: false,
            path: '/brandbook',
            show: false,
        },
    ]
    return (
        <Flex gap="8px" wrap>
            {links.map((el) => {
                return <PageLink key={el.id} {...el} />
            })}
        </Flex>
    )
}
