import { IRoute, privateRoutes } from '@app/routes/routes'
import { teachersPrivateRoutes } from '@app/routes/techers-routes'
import { ShortCutLinksType, SHORT_CUT_LINKS_LIMIT_SIZE } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import { useSettings } from '@utils/contexts/settings-context'
import useIsAccessibleRoute from '@utils/hooks/use-is-accessible-route'
import useResize from '@utils/hooks/use-resize'
import React, { useMemo } from 'react'
import getChosenRoutes from 'widgets/leftside-bar/lib/get-chosen-routes'
import LeftsideBarListWrapper from 'widgets/leftside-bar/ui/atoms/leftside-bar-list-wrapper'
import { CustomizeLeftsideBarItem } from '../molecules'

const CustomizeLeftsideBarList = () => {
    const { setting, change } = useSettings<number[]>('menu')
    const { setting: shortCutMenu, change: shortCutChange } = useSettings<ShortCutLinksType>('shortCutLinks')
    const { data } = userModel.selectors.useUser()
    const { height } = useResize()
    const isAccessible = useIsAccessibleRoute()
    const enabledLeftsideBarItems = getChosenRoutes(setting, data)
    const enabledShortCutMenu = useMemo(() => getChosenRoutes(shortCutMenu, data), [shortCutMenu])

    const switchChosen = (id: number) => {
        if (enabledLeftsideBarItems[id]) {
            const newSettings = setting.filter((settingId: number) => settingId !== id)
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент убран из навигационного меню',
                type: 'success',
            })
            change(newSettings)
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент добавлен в навигационное меню',
                type: 'success',
            })
            setting.push(id)
            change([...setting])
        }
    }

    const switchShortChosen = (id: number) => {
        if (enabledShortCutMenu[id]) {
            const newSettings = shortCutMenu.filter((settingId: number) => settingId !== id)

            shortCutChange(newSettings)
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент убран c начального экрана',
                type: 'success',
            })
        } else {
            if (shortCutMenu.length < SHORT_CUT_LINKS_LIMIT_SIZE) {
                shortCutMenu.push(id)
                shortCutChange([...shortCutMenu])
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Элемент добавлен на начальный экран',
                    type: 'success',
                })
            } else {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Нельзя добавить больше 4 элементов',
                    type: 'failure',
                })
            }
        }
    }

    return (
        <LeftsideBarListWrapper style={{ height: height - 200 }}>
            {Object.values(!data?.user?.subdivisions ? privateRoutes : teachersPrivateRoutes).map(
                (el: IRoute, index) => {
                    return (
                        isAccessible(el.title) && (
                            <CustomizeLeftsideBarItem
                                {...el}
                                key={index}
                                chosen={!!enabledLeftsideBarItems[el.id]}
                                shortItemChosen={!!enabledShortCutMenu[el.id]}
                                switchShortChosen={switchShortChosen}
                                switchMenuItem={switchChosen}
                            />
                        )
                    )
                },
            )}
        </LeftsideBarListWrapper>
    )
}

export default CustomizeLeftsideBarList
