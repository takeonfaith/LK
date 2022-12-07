import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'

const addPageToHome = (id: string, settings: settingsModel.Param) => {
    if (settings) {
        if (id !== 'home') {
            const newPages = settings['settings-home-page'].property['pages'] as string[]
            settingsModel.events.updateSetting({
                nameSettings: 'settings-home-page',
                nameParam: 'pages',
                value: [...newPages, id],
            })
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Нельзя добавить этот раздел на домашний экран',
                type: 'failure',
            })
        }
    }
}

export default addPageToHome
