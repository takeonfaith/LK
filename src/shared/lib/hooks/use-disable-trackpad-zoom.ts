import { useEffect, useRef } from 'react'

export const useDisableTrackpadZoom = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollRef.current?.addEventListener('wheel', stopScroll)

        return () => scrollRef.current?.removeEventListener('wheel', stopScroll)
    }, [])

    const stopScroll = (e: Event) => {
        e.preventDefault()
    }

    return scrollRef
}
