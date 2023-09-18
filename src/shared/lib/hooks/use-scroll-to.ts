import { useLayoutEffect, useRef } from 'react'

type Props = {
    getScrollTopValue: (element: HTMLDivElement) => number
    deps?: any[]
    condition?: boolean
}

export const useScrollTo = ({ deps, getScrollTopValue, condition = true }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (ref.current && condition) {
            const scrollTop = getScrollTopValue(ref.current)
            ref.current.scrollTop = scrollTop
        }
    }, [ref, ...(deps ?? [])])

    return ref
}
