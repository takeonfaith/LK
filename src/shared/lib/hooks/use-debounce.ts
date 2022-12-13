import { useEffect, useState } from 'react'

type Props = {
    defaultValue?: string
    onDebounce: (value: string) => void
    onClear?: (value: string) => void
    deps?: string[]
    delay?: number
}

const DEFAULT_DELAY = 300

const useDebounce = ({
    defaultValue,
    onDebounce,
    onClear,
    deps = [],
    delay = DEFAULT_DELAY,
}: Props): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
    const [value, setValue] = useState<string | null>(defaultValue ?? null)

    useEffect(() => {
        if (value !== null) {
            if (value.length) {
                const delayedSearch = setTimeout(() => {
                    onDebounce(value)
                }, delay)

                return () => clearTimeout(delayedSearch)
            } else onClear?.(value)
        }
    }, [value])

    useEffect(() => {
        if (deps.length) {
            const delayedSearch = setTimeout(() => {
                onDebounce(value ?? '')
            }, delay)

            return () => clearTimeout(delayedSearch)
        }
    }, [...deps])

    return [value, setValue]
}

export default useDebounce