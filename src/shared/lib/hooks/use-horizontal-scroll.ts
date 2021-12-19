import { useEffect, useRef } from 'react'

const useHorizontalScroll = () => {
    const elRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const el = elRef.current
        if (el) {
            const onWheel = (e: any) => {
                if (e.deltaY == 0) return
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 8,
                })
            }
            el.addEventListener('mousedown', onWheel)
            return () => el.removeEventListener('mousedown', onWheel)
        }
    }, [])
    return elRef
}

export default useHorizontalScroll
