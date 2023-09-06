import { SCHEDULE_RETAKE_ROUTE } from '@app/routes/general-routes'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useModal } from 'widgets'
import { SideMenuContent } from '../ui/side-menu/side-menu-content'
import React from 'react'

/*
    TODO: 
*/

const useSchedule = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { isTablet, isMobile } = useCurrentDevice()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)
    const location = useLocation()
    const shouldShowSlider = location.pathname !== SCHEDULE_RETAKE_ROUTE
    const splitted = location.pathname.split('/')
    const filter = splitted.length === 4 ? splitted[splitted.length - 1] : null
    const isGroup = filter ? /\d/.test(filter) : false
    const baseSearchValue = user?.user_status === 'staff' ? user?.fullName ?? '' : user?.group ?? ''
    const [search, setSearch] = useState(baseSearchValue)
    const { open } = useModal()

    useEffect(() => {
        if (isMobile || isTablet) {
            setIsSideMenuOpen(false)
        } else {
            setIsSideMenuOpen(true)
        }
    }, [isTablet, isMobile])

    useEffect(() => {
        if (filter) {
            if (isGroup) {
                scheduleModel.effects.getGroupScheduleFx({ group: filter })
            } else {
                scheduleModel.effects.getTeacherScheduleFx({ fullName: filter })
            }
        } else {
            scheduleModel.events.resetExternalSchedule()
        }
    }, [filter])

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

    const handleOpenSideMenu = () => {
        if (isMobile) {
            open(
                <SideMenuContent
                    filter={filter}
                    isGroup={isGroup}
                    search={search}
                    baseSearchValue={baseSearchValue}
                    setSearch={setSearch}
                />,
            )
        } else {
            setIsSideMenuOpen((prev) => !prev)
        }
    }

    return {
        isSideMenuOpen,
        shouldShowSlider,
        filter,
        isGroup,
        isMobile,
        search,
        baseSearchValue,
        setSearch,
        handleLoad,
        handleOpenSideMenu,
    }
}

export default useSchedule
