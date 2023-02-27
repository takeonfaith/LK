import { useState } from 'react'

const useSubmitButton = (active: boolean) => {
    const loading = useState(false)
    const completed = useState(false)
    const error = useState<string | null>(null)
    const isActive = active

    return { loading, error, completed, isActive }
}

export default useSubmitButton
