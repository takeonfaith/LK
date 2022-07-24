import { IRoute, IRoutes } from '@app/routes/general-routes'
import { privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/teachers-routes'
import {
    ADDITIONAL_MENU_ITEMS_LIMIT_SIZE,
    MenuType,
    REQUIRED_LEFTSIDE_BAR_CONFIG,
    REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG,
} from '@consts'
import { adminLinksModel } from '@entities/admin-links'
import { menuModel } from '@entities/menu'
import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import { useSettings } from '@utils/contexts/settings-context'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import getChosenRoutes from 'widgets/leftside-bar/lib/get-chosen-routes'
import LeftsideBarListWrapper from 'widgets/leftside-bar/ui/atoms/leftside-bar-list-wrapper'
import { CustomizeLeftsideBarItem } from '../molecules'

const CustomizeLeftsideBarList = () => {
    const { setting, change } = useSettings<MenuType>('menu')
    // const { setting: shortCutMenu, change: shortCutChange } = useSettings<ShortCutLinksType>('shortCutLinks')
    const { data } = userModel.selectors.useUser()
    const { height } = useResize()
    const currentRoute: IRoutes = !data?.user?.subdivisions ? privateRoutes() : teachersPrivateRoutes()

    const { data: adminLinks } = adminLinksModel.selectors.useAdminLinks()

    const enabledLeftsideBarItems = getChosenRoutes(setting, data)
    // const enabledShortCutMenu = useMemo(() => getChosenRoutes(shortCutMenu, data), [shortCutMenu])

    const requiredLeftsideBarItems =
        data.user?.user_status === 'staff' ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG

    const switchChosen = (id: string) => {
        const { user } = data

        if (enabledLeftsideBarItems[id]) {
            if (!requiredLeftsideBarItems.includes(id)) {
                const newSettings = setting.filter((settingId: string) => settingId !== id)

                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Элемент убран из навигационного меню',
                    type: 'success',
                })
                change(newSettings)

                menuModel.events.defineMenu({ user, adminLinks })
            } else {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Элемент нельзя убрать из навигационного меню',
                    type: 'failure',
                })
            }
        } else {
            const requireLength = requiredLeftsideBarItems.length + ADDITIONAL_MENU_ITEMS_LIMIT_SIZE

            if (Object.keys(enabledLeftsideBarItems).length < requireLength) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Элемент добавлен в навигационное меню',
                    type: 'success',
                })
                setting.push(id)
                change([...setting])

                menuModel.events.defineMenu({ user, adminLinks })
            } else {
                popUpMessageModel.events.evokePopUpMessage({
                    message: `Нельзя добавить больше ${requireLength} элементов`,
                    type: 'failure',
                })
            }
        }
    }

    // const switchShortChosen = (id: number) => {
    //     if (enabledShortCutMenu[id]) {
    //         const newSettings = shortCutMenu.filter((settingId: number) => settingId !== id)

    //         shortCutChange(newSettings)
    //         popUpMessageModel.events.evokePopUpMessage({
    //             message: 'Элемент убран c начального экрана',
    //             type: 'success',
    //         })
    //     } else {
    //         if (shortCutMenu.length < SHORT_CUT_LINKS_LIMIT_SIZE) {
    //             shortCutMenu.push(id)
    //             shortCutChange([...shortCutMenu])
    //             popUpMessageModel.events.evokePopUpMessage({
    //                 message: 'Элемент добавлен на начальный экран',
    //                 type: 'success',
    //             })
    //         } else {
    //             popUpMessageModel.events.evokePopUpMessage({
    //                 message: 'Нельзя добавить больше 4 элементов',
    //                 type: 'failure',
    //             })
    //         }
    //     }
    // }

    return (
        <LeftsideBarListWrapper style={{ height }}>
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
