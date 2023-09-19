import { scheduleRoutes } from '@app/routes/general-routes'
import { scheduleModel } from '@entities/schedule'
import { TeacherGroupSearch } from '@features/teacher-group-search'
import { Button } from '@shared/ui/button'
import { Divider } from '@shared/ui/divider'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import { NewPageLink } from './new-page-link'
import { SideMenuProps } from './types'
import { useLocation } from 'react-router'

export const SideMenuContent = ({
    handleReturnToMySchedule,
    baseSearchValue,
    handleValue,
    onHintClick,
}: SideMenuProps) => {
    const {
        data: { searchValue, filter },
    } = scheduleModel.selectors.useSchedule()
    const location = useLocation()

    return (
        <>
            <Subtext>Группа или преподаватель</Subtext>
            <TeacherGroupSearch value={searchValue} setValue={handleValue} onHintClick={onHintClick} />
            {baseSearchValue !== searchValue && (
                <Button
                    text="Мое расписание"
                    onClick={handleReturnToMySchedule}
                    icon={<HiOutlineChevronLeft />}
                    background="var(--block)"
                    textColor="var(--blue)"
                />
            )}
            <Divider margin="16px 0" width="100%" />
            <Flex d="column" gap="2px" ai="flex-start">
                {Object.keys(scheduleRoutes ?? {}).map((key) => {
                    const route = scheduleRoutes[key]
                    const { id, path } = route
                    const normalizedPath = filter ? `${path}/${filter}` : path

                    return (
                        <NewPageLink
                            key={id}
                            disabled={id === 'schedule-retake' && !!filter}
                            isCurrent={location.pathname === normalizedPath}
                            route={{ ...route, path: normalizedPath }}
                        />
                    )
                })}
            </Flex>
        </>
    )
}
