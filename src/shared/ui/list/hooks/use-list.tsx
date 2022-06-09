import { useEffect, useRef, useState } from 'react'

const useList = (gap?: number) => {
    const listRef = useRef<HTMLDivElement | null>(null)
    const [leftArrow, setLeftArrow] = useState<boolean>(false)
    const [rightArrow, setRightArrow] = useState<boolean>(false)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pageOffset = listRef.current?.clientWidth ?? 1
    const amountOfPages = Math.ceil((listRef.current?.scrollWidth ?? 0) / (pageOffset + (gap ?? 0)))

    // console.log(amountOfPages)

    useEffect(() => {
        // console.log(listRef.current?.scrollLeft)
        if (listRef.current) {
            listRef.current.scrollLeft = scrollLeft

            if (listRef.current.clientWidth < listRef.current.scrollWidth) {
                setLeftArrow(true)

                setRightArrow(true)
            }
        }
    }, [scrollLeft, listRef.current?.scrollLeft])

    return { listRef, leftArrow, rightArrow, setScrollLeft, pageOffset, amountOfPages, currentPage, setCurrentPage }
}

export default useList
