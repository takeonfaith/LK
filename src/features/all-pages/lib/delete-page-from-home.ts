import { settingsModel } from '@entities/settings'

const deletePageFromHome = (id: string, settings: settingsModel.Param) => {
    if (settings) {
        const newPages = settings['settings-home-page'].property['pages'] as string[]
        settingsModel.events.updateSetting({
            nameSettings: 'settings-home-page',
            nameParam: 'pages',
            value: newPages.filter((item) => item !== id),
        })
    }
}

export default deletePageFromHome
