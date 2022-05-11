import useIsInstallApp from '@utils/hooks/use-is-install-app'
import { confirmModel } from '@entities/confirm'

const isInstallApp = useIsInstallApp()
const InstallApp = () => {
    const installationSuggestion = (beforeInstallPromptEvent: any) => {
        // eslint-disable-next-line no-console
        console.log('mir2')
        const installReject = () => {
            localStorage.setItem('isNeedInstallation', 'false')
            confirmModel.events.closeConfirm()
        }
        confirmModel.events.evokeConfirm({
            message: 'Хотите скачать приложение?',
            onConfirm: () => beforeInstallPromptEvent.prompt(),
            onReject: () => installReject(),
        })
    }
    if (isInstallApp) {
        // eslint-disable-next-line no-console
        console.log('mir1')
        window.addEventListener('beforeinstallprompt', installationSuggestion)
        return () => window.removeEventListener('beforeinstallprompt', installationSuggestion)
    }
}

export default InstallApp
