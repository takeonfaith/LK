import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import { useEffect, useState } from 'react'

/*
    TODO: 
    1. Зум календаря
    2. Придумать, как быть с расписанием сессии
    3. Добавить время в event-item
    4. Неделя и семестр вид для мобилок
    5. Список преподов?
*/

const useSchedule = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true)

    useEffect(() => {
        return () => {
            scheduleModel.events.resetExternalSchedule()
        }
    }, [])

    const handleLoad = () => {
        scheduleModel.effects.getScheduleFx({ group: user?.group })
    }

    const handleOpenSideMenu = () => setIsSideMenuOpen((prev) => !prev)

    return {
        isSideMenuOpen,
        handleLoad,
        handleOpenSideMenu,
    }
}

export default useSchedule
