import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import { Hint } from '@shared/ui/search'
import React, { useEffect } from 'react'
import { SideMenuProps } from './types'
import { useHistory, useLocation } from 'react-router'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { SCHEDULE_FILTER_ROUTE, scheduleRoutes } from '@app/routes/general-routes'
import { TeacherGroupSearch } from '@features/teacher-group-search'
import { Button } from '@shared/ui/button'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import Flex from '@shared/ui/flex'
import { Divider } from '@shared/ui/divider'
import { NewPageLink } from './new-page-link'

export const SideMenuContent = ({ search, setSearch, filter, baseSearchValue }: SideMenuProps) => {
    const history = useHistory()
    const location = useLocation()

    const handleReturnToMySchedule = () => {
        if (filter) {
            history.push(getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, { page: location.pathname.split('/')[2] }))
        }

        setSearch(baseSearchValue)

        scheduleModel.events.resetExternalSchedule()
    }

    useEffect(() => {
        if (filter) {
            setSearch(filter)
        }
    }, [filter])

    const {
        data: { user },
    } = userModel.selectors.useUser()

    const onHintClick = (isSearchingGroup: boolean) => {
        return (hint: Hint | undefined) => {
            if (hint?.id === user?.group) {
                scheduleModel.events.resetExternalSchedule()
                return
            }
            if (isSearchingGroup) {
                scheduleModel.effects.getGroupScheduleFx({ group: hint?.value })
            } else {
                scheduleModel.effects.getTeacherScheduleFx({ fullName: hint?.value })
            }
        }
    }
    return (
        <>
            <TeacherGroupSearch value={search} setValue={setSearch} onHintClick={onHintClick} />
            {baseSearchValue !== search && (
                <Button
                    text="Мое расписание"
                    onClick={handleReturnToMySchedule}
                    icon={<HiOutlineChevronLeft />}
                    background="var(--schedule)"
                    textColor="var(--blue)"
                />
            )}
            <Divider margin="16px 0" />
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
