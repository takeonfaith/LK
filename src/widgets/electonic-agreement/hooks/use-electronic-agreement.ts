import { pepApi } from '@api'
import { useEffect, useState } from 'react'
import { popUpMessageModel } from '@entities/pop-up-message'

interface Props {
    isDone: boolean
    submit: () => Promise<void> | void | any
    setData?: React.Dispatch<any>
}

export function useElectronicAgreement({ isDone, submit, setData }: Props) {
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [done, setDone] = useState(isDone ?? false)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            await submit()
            setLoading(false)
            setCompleted(true)
            setDone(true)
        } catch (error) {
            setLoading(false)
            popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось подписать', type: 'failure' })
        }
    }

    useEffect(() => {
        if (setData) {
            pepApi.get().then((res) => setData(res.data[0]))
        }
    }, [])

    return {
        done,
        open,
        loading,
        completed,
        setCompleted,
        handleSubmit,
    }
}
