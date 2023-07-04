import useResize from '@shared/lib/hooks/use-resize'
import { useEffect, useRef, useState } from 'react'

const useList = (gap?: number) => {
    const { width } = useResize()
    const listRef = useRef<HTMLDivElement | null>(null)
    const [leftArrow, setLeftArrow] = useState<boolean>(false)
    const [rightArrow, setRightArrow] = useState<boolean>(false)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pageOffset = listRef.current?.clientWidth ?? 1
    const amountOfPages = Math.ceil((listRef.current?.scrollWidth ?? 0) / (pageOffset + (gap ?? 0)))

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft

            if (listRef.current.clientWidth < listRef.current.scrollWidth) {
                setLeftArrow(true)
                setRightArrow(true)
            } else {
                setRightArrow(false)
                setLeftArrow(false)
            }
        }
    }, [scrollLeft, listRef.current?.clientWidth, width])

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setCurrentPage(Math.ceil(e.currentTarget.scrollLeft / (pageOffset + (gap ?? 0))))
    }

    return {
        listRef,
        leftArrow,
        rightArrow,
        setScrollLeft,
        pageOffset,
        amountOfPages,
        currentPage,
        setCurrentPage,
        handleScroll,
    }
}

export default useList
