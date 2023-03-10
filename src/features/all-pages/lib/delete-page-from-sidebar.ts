import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'

const deletePageFromSidebar = (id: string, settings: settingsModel.Param, requiredLeftsideBarItems: string[]) => {
    if (settings) {
        if (!requiredLeftsideBarItems.includes(id)) {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент убран из навигационного меню',
                type: 'success',
            })

            const newPages = settings['settings-customize-menu'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-customize-menu',
                nameParam: 'pages',
                value: newPages.filter((item) => item !== id),
            })

            //   menuModel.events.defineMenu({ user, adminLinks })
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Элемент нельзя убрать из навигационного меню',
                type: 'failure',
            })
        }
    }
}

export default deletePageFromSidebar
