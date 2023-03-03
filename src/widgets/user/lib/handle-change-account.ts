import { confirmModel } from '@entities/confirm'

const handleChangeAccount = (token: string) => {
    if (token) {
        return () => {
            confirmModel.events.evokeConfirm({
                message: 'Вы уверены, что хотите сменить аккаунт?',
                onConfirm: () => {
                    localStorage.setItem(
                        'token',
                        JSON.stringify({
                            token,
                        }),
                    )
                    location.reload()
                },
            })
        }
    }
}

export default handleChangeAccount
