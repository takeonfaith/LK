import React from 'react'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@consts'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import addPageToSidebar from '@features/all-pages/lib/add-page-to-sidebar'
import deletePageFromSidebar from '@features/all-pages/lib/delete-page-from-sidebar'
import { Title } from '@ui/title'
import useResize from '@utils/hooks/use-resize'
import LeftsideBarListWrapper from 'widgets/leftside-bar/ui/atoms/leftside-bar-list-wrapper'
import { CustomizeLeftsideBarItem } from '../molecules'

const CustomizeLeftsideBarList = () => {
    const { settings } = settingsModel.selectors.useSettings()
    const menu = menuModel.selectors.useMenu()

    // const { setting: shortCutMenu, change: shortCutChange } = useSettings<ShortCutLinksType>('shortCutLinks')
    const { data } = userModel.selectors.useUser()
    const { height } = useResize()

    if (!menu.leftsideBarRoutes || !menu.allRoutes) return null

    const currentRoute: IRoutes = menu.allRoutes

    const enabledLeftsideBarItems = menu.leftsideBarRoutes
    // const enabledShortCutMenu = useMemo(() => getChosenRoutes(shortCutMenu, data), [shortCutMenu])

    const requiredLeftsideBarItems =
        data.user?.user_status === 'staff' ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG

    const switchChosen = (id: string) => {
        if (enabledLeftsideBarItems[id]) {
            deletePageFromSidebar(id, settings, requiredLeftsideBarItems)
        } else {
            addPageToSidebar(id, settings, Object.keys(enabledLeftsideBarItems).length, requiredLeftsideBarItems)
        }
    }

    return (
        <LeftsideBarListWrapper style={{ height }}>
            <Title size={2} align="left" bottomGap>
                Настройка меню
            </Title>
            {Object.values(currentRoute).map((el: IRoute, index) => {
                return (
                    <CustomizeLeftsideBarItem
                        {...el}
                        key={index}
                        chosen={!!enabledLeftsideBarItems[el.id]}
                        switchMenuItem={switchChosen}
                    />
                )
            })}
        </LeftsideBarListWrapper>
    )
}

export default CustomizeLeftsideBarList
