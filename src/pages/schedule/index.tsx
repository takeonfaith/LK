import { SCHEDULE_CURRENT_ROUTE, SCHEDULE_RETAKE_ROUTE, scheduleRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { scheduleModel } from '@entities/schedule'
import { VIEWS } from '@entities/schedule/consts'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { Button, Wrapper } from '@ui/atoms'
import React, { useState } from 'react'
import { FiSidebar } from 'react-icons/fi'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import { Slider } from 'widgets'
import useTemplateSchedule from './hooks/use-template-schedule'
import { SideMenu } from './ui/side-menu'

const TemplateSchedule = () => {
    const {
        data: { view, schedule },
        loading,
        error,
    } = scheduleModel.selectors.useSchedule()
    const { allRoutes } = menuModel.selectors.useMenu()
    const { handleLoad } = useTemplateSchedule()
    const location = useLocation()

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={schedule}>
            <PageBlock
                topCenterElement={
                    location.pathname !== SCHEDULE_RETAKE_ROUTE && (
                        <Slider
                            size="small"
                            sliderWidth="240px"
                            pages={VIEWS}
                            currentPage={view}
                            setCurrentPage={scheduleModel.events.changeView}
                        />
                    )
                }
                topRightCornerElement={
                    <Flex w="fit-content" gap="8px">
                        <Button
                            icon={<FiSidebar />}
                            width="36px"
                            height="36px"
                            onClick={() => setIsSideMenuOpen((prev) => !prev)}
                        />
                    </Flex>
                }
            >
                {allRoutes && (
                    <Flex gap="16px" ai="flex-start">
                        {isSideMenuOpen && <SideMenu />}
                        <Switch>
                            {Object.keys(scheduleRoutes ?? {}).map((key) => {
                                const { path, id, Component } = scheduleRoutes[key]
                                return (
                                    <Route exact key={id} path={path}>
                                        {<Component />}
                                    </Route>
                                )
                            })}
                            <Redirect to={SCHEDULE_CURRENT_ROUTE} />
                        </Switch>
                    </Flex>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default TemplateSchedule
