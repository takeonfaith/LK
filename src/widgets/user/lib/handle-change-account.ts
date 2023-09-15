import { confirmModel } from '@entities/confirm'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

const handleChangeAccount = (token: string) => {
    if (token) {
        return () => {
            confirmModel.events.evokeConfirm({
                message: 'Вы уверены, что хотите сменить аккаунт?',
                onConfirm: () => {
                    localStorage.setItem(BrowserStorageKey.Token, token)
                    location.reload()
                },
            })
        }
    }
}

export default handleChangeAccount
