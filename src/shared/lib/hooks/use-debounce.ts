import { useEffect, useState } from 'react'

type Props = {
    defaultValue?: string
    onDebounce: (value: string) => Promise<void> | void
    onClear?: (value: string) => void
    deps?: string[]
    delay?: number
    triggerDelay?: number
    triggerOn?: (value: string) => boolean
}

const DEFAULT_DELAY = 300

const useDebounce = ({
    defaultValue,
    onDebounce,
    onClear,
    triggerOn,
    triggerDelay,
    deps = [],
    delay = DEFAULT_DELAY,
}: Props): [string, React.Dispatch<React.SetStateAction<string>>, boolean] => {
    const [value, setValue] = useState<string>(defaultValue ?? '')
    const [prevValue, setPrevValue] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (value !== null) {
            if (value.length) {
                setLoading(true)

                const delayedSearch = setTimeout(async () => {
                    await onDebounce(value)
                    setPrevValue(value)
                    setLoading(false)
                }, delay)

                return () => clearTimeout(delayedSearch)
            } else if (prevValue.length !== 0) {
                onClear?.(value)
                setValue('')
                setLoading(false)
            }
        }
    }, [value])

    useEffect(() => {
        if (deps.length && (triggerOn?.(value) ?? true)) {
            setLoading(true)
            const delayedSearch = setTimeout(async () => {
                await onDebounce(value)
                setLoading(false)
            }, triggerDelay ?? delay)

            return () => clearTimeout(delayedSearch)
        }
    }, [...deps])

    return [value, setValue, loading]
}

export default useDebounce
