import { ADDITIONAL_MENU_ITEMS_LIMIT_SIZE } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'

const addPageToSidebar = (
    id: string,
    settings: settingsModel.Param,
    sideBarLinksLength: number,
    requiredLeftsideBarItems: string[],
) => {
    if (settings) {
        const requireLength = requiredLeftsideBarItems.length + ADDITIONAL_MENU_ITEMS_LIMIT_SIZE

        if (sideBarLinksLength < requireLength) {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент добавлен в навигационное меню',
                type: 'success',
            })
            const newPages = settings['settings-customize-menu'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-customize-menu',
                nameParam: 'pages',
                value: [...newPages, id],
            })

            // menuModel.events.defineMenu({ user, adminLinks })
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                message: `Нельзя добавить больше ${requireLength} элементов`,
                type: 'failure',
            })
        }
    }
}

export default addPageToSidebar
