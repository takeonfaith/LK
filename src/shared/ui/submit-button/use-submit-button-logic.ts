import { useState } from 'react'

const useSubmitButtonLogic = (load: () => Promise<void>, err?: string) => {
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleLoad = async () => {
        try {
            setLoading(true)
            setCompleted(false)
            setError(null)
            await load()
            setLoading(false)
            setCompleted(true)
        } catch (error) {
            setLoading(false)
            setError(err ?? 'Ошибка')
        }
    }

    return { error, loading, completed, setCompleted, handleLoad }
}

export default useSubmitButtonLogic
