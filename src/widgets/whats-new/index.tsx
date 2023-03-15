import React from 'react'
import {
    ALERTS_ROUTE,
    ALL_STUDENTS_ROUTE,
    ALL_TEACHERS_ROUTE,
    PROJECT_ACTIVITIES_ROUTE,
} from '@app/routes/general-routes'
import { Colors } from '@consts'
import { userModel } from '@entities/user'
import { Button, Title } from '@ui/atoms'
import { DotPages } from '@ui/molecules'
import limitNumber from '@utils/limit-number'
import { useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { WhatsNewTemplate } from './ui'
import { menuModel } from '@entities/menu'

const WhatsNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 500px;
        height: 500px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`

const WhatsNew = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const { close } = useModal()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { visibleRoutes } = menuModel.selectors.useMenu()
    const pages = [
        <WhatsNewTemplate
            key={0}
            list={[
                {
                    icon: visibleRoutes?.['all-students'].icon ?? '',
                    title: visibleRoutes?.['all-students'].title ?? '',
                    color: visibleRoutes?.['all-students'].color ?? 'blue',
                    visible: true,
                    goTo: ALL_STUDENTS_ROUTE,
                },
                {
                    icon: visibleRoutes?.['all-teachers'].icon ?? '',
                    title: visibleRoutes?.['all-teachers'].title ?? '',
                    color: visibleRoutes?.['all-teachers'].color ?? 'blue',
                    visible: true,
                    goTo: ALL_TEACHERS_ROUTE,
                },
                {
                    icon: visibleRoutes?.['project-activity'].icon ?? '',
                    title: visibleRoutes?.['project-activity'].title ?? '',
                    color: visibleRoutes?.['project-activity'].color ?? 'blue',
                    visible: user?.user_status !== 'staff',
                    goTo: PROJECT_ACTIVITIES_ROUTE,
                },
                {
                    icon: visibleRoutes?.['alerts'].icon ?? '',
                    title: visibleRoutes?.['alerts'].title ?? '',
                    color: visibleRoutes?.['alerts'].color ?? 'blue',
                    visible: true,
                    goTo: ALERTS_ROUTE,
                },
            ]}
        />,
    ]

    return (
        <WhatsNewWrapper>
            <Title size={2}>Что нового</Title>
            <div className="content">{pages[currentPage]}</div>
            <DotPages amount={pages.length} current={currentPage} />
            <div className="buttons">
                <Button
                    onClick={() => setCurrentPage((prev) => limitNumber(prev - 1, pages.length - 1))}
                    text="Назад"
                    width="100%"
                    isActive={currentPage !== 0}
                />
                {currentPage === pages.length - 1 ? (
                    <Button
                        onClick={close}
                        text="Готово"
                        width="100%"
                        background={Colors.blue.light1}
                        textColor="#fff"
                    />
                ) : (
                    <Button
                        onClick={() => setCurrentPage((prev) => limitNumber(prev + 1, pages.length - 1))}
                        text="Далее"
                        width="100%"
                    />
                )}
            </div>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
