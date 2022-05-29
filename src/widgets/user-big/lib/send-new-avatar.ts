import { popUpMessageModel } from '@entities/pop-up-message'
import { Effect } from 'effector'

type Args = {
    setLoading: (flag: boolean) => void
    setCompleted: (flag: boolean) => void
    sendFx: Effect<File, { avatar: string }>
    file: File
}

export function sendNewAvatar({ setLoading, setCompleted, sendFx, file }: Args) {
    try {
        sendFx(file)
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
        popUpMessageModel.events.evokePopUpMessage({
            message: `Не удалось отправить новый аватар. Ошибка: ${error as string}`,
            type: 'failure',
            time: 30000,
        })
    }
}
