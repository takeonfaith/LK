import { useState } from 'react'
import { Effect } from 'effector'
import { popUpMessageModel } from '@entities/pop-up-message'
import { useStore } from 'effector-react'

interface Props {
    isDone: boolean
    submit: Effect<any, any, Error> | Effect<void, any, Error>
    id?: string
}

export function useElectronicAgreement({ isDone, submit, id }: Props) {
    const loading = useStore(submit.pending)
    const [completed, setCompleted] = useState(false)
    const [done, setDone] = useState(isDone ?? false)

    const handleSubmit = async () => {
        await submit(id)
    }

    submit.done.watch(({ result }) => {
        if (result.preparedData?.result != 'ok')
            popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось подписать', type: 'failure' })
        else {
            setDone(true)
            setCompleted(true)
            popUpMessageModel.events.evokePopUpMessage({
                message: 'Согласие успешно подписано',
                type: 'success',
            })
        }
    })

    submit.fail.watch(() => {
        popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось подписать', type: 'failure' })
    })

    return {
        done,
        open,
        loading,
        completed,
        setCompleted,
        handleSubmit,
    }
}
