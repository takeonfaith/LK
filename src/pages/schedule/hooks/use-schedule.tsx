import {
    SCHEDULE_FILTER_ROUTE,
    SCHEDULE_RETAKE_ROUTE,
    SCHEDULE_SEMESTR_ROUTE,
    SCHEDULE_SESSION_ROUTE,
} from '@app/routes/general-routes'
import { getEnrichedTemplatePath } from '@entities/menu/lib/get-enriched-template-path'
import { scheduleModel } from '@entities/schedule'
import { View } from '@entities/schedule/consts'
import { userModel } from '@entities/user'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Hint } from '@shared/ui/search'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useModal } from 'widgets'
import { SideMenuContent } from '../ui/side-menu/side-menu-content'

const useSchedule = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const {
        data: { filter, view },
    } = scheduleModel.selectors.useSchedule()

    const { isTablet, isMobile } = useCurrentDevice()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)
    const location = useLocation()
    const history = useHistory()
    const shouldShowSlider = location.pathname !== SCHEDULE_RETAKE_ROUTE
    const splitted = location.pathname.split('/')
    const urlFilter = splitted.length === 4 ? splitted[splitted.length - 1] : null
    const isGroup = urlFilter ? /\d/.test(urlFilter) : false
    const baseSearchValue = user?.user_status === 'staff' ? user?.fullName ?? '' : user?.group ?? ''
    const isSessionPage = location.pathname.includes(SCHEDULE_SESSION_ROUTE)
    const isSemestrPage = location.pathname.includes(SCHEDULE_SEMESTR_ROUTE)
    const showMonth = isSessionPage || isSemestrPage
    const { open } = useModal()

    const handleReturnToMySchedule = () => {
        if (filter) {
            history.push(getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, { page: location.pathname.split('/')[2] }))
        }

        scheduleModel.events.setSearchValue(baseSearchValue)
        scheduleModel.events.setFilter('')
        scheduleModel.events.resetExternalSchedule()
    }

    useLayoutEffect(() => {
        if (view === View.month && !showMonth) {
            scheduleModel.events.changeView(View.day)
        }
    }, [view, showMonth])

    useEffect(() => {
        if (isMobile || isTablet) {
            setIsSideMenuOpen(false)
        } else {
            setIsSideMenuOpen(true)
        }
    }, [isTablet, isMobile])

    useEffect(() => {
        if (urlFilter) {
            scheduleModel.events.setFilter(urlFilter)
            scheduleModel.events.setSearchValue(urlFilter)
            if (isGroup) {
                scheduleModel.effects.getGroupScheduleFx({ group: urlFilter })
            } else {
                scheduleModel.effects.getTeacherScheduleFx({ fullName: urlFilter })
            }
        } else {
            handleReturnToMySchedule()
        }
    }, [urlFilter])

    useEffect(() => {
        return () => {
            scheduleModel.events.resetExternalSchedule()
        }
    }, [])

    const handleLoad = () => {
        if (user?.user_status === 'staff') {
            scheduleModel.effects.getScheduleFx({ fullName: user.fullName })
        } else {
            scheduleModel.effects.getScheduleFx({ group: user?.group })
        }
    }

    const onHintClick = () => {
        return (hint: Hint | undefined) => {
            if (hint?.id === user?.group) {
                handleReturnToMySchedule()
            }
            if (hint?.id) {
                history.push(
                    getEnrichedTemplatePath(SCHEDULE_FILTER_ROUTE, {
                        page: location.pathname.split('/')[2],
                        filter: hint.value,
                    }),
                )
            }
        }
    }

    const handleValue = (value: string) => {
        scheduleModel.events.setSearchValue(value)
    }

    const handleOpenSideMenu = () => {
        if (isMobile) {
            open(
                <SideMenuContent
                    baseSearchValue={baseSearchValue}
                    handleReturnToMySchedule={handleReturnToMySchedule}
                    onHintClick={onHintClick}
                    handleValue={handleValue}
                />,
            )
        } else {
            setIsSideMenuOpen((prev) => !prev)
        }
    }

    return {
        isSideMenuOpen,
        shouldShowSlider,
        isMobile,
        isSessionPage,
        baseSearchValue,
        showMonth,
        handleValue,
        onHintClick,
        handleReturnToMySchedule,
        handleLoad,
        handleOpenSideMenu,
    }
}

export default useSchedule
