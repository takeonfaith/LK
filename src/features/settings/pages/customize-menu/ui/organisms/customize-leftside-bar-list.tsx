import React, { useMemo } from 'react'
import { privateRoutes } from '@app/routes/routes'
import getChosenRoutes from 'widgets/leftside-bar/lib/get-chosen-routes'
import LeftsideBarListWrapper from 'widgets/leftside-bar/ui/atoms/leftside-bar-list-wrapper'
import { useSettings } from '@utils/contexts/settings-context'
import { CustomizeLeftsideBarItem } from '../molecules'
import { ShortCutLinksType, SHORT_CUT_LINKS_LIMIT_SIZE } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'

const CustomizeLeftsideBarList = () => {
    const { setting, change } = useSettings<number[]>('menu')
    const { setting: shortCutMenu, change: shortCutChange } = useSettings<ShortCutLinksType>('shortCutLinks')

    const enabledLeftsideBarItems = getChosenRoutes(setting)
    const enabledShortCutMenu = useMemo(() => getChosenRoutes(shortCutMenu), [shortCutMenu])

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
        <LeftsideBarListWrapper>
            {Object.values(privateRoutes).map((el, index) => {
                return (
                    <CustomizeLeftsideBarItem
                        {...el}
                        key={index}
                        chosen={!!enabledLeftsideBarItems[el.id]}
                        shortItemChosen={!!enabledShortCutMenu[el.id]}
                        switchShortChosen={switchShortChosen}
                        switchMenuItem={switchChosen}
                    />
                )
            })}
        </LeftsideBarListWrapper>
    )
}

export default CustomizeLeftsideBarList
