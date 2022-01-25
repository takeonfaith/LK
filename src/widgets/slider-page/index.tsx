import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Slider } from 'widgets'

const SliderPageWrapper = styled.div<{ width?: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
    height: 100%;

    & > div {
        display: flex;
        width: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    .slider-content {
        height: 100%;
        overflow-y: auto;
        margin-top: 10px;
        width: 100%;
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`

interface Page {
    title: string
    condition?: boolean
    content: React.ReactNode
}

interface Props {
    pages: Page[]
    currentPage?: number
    width?: string
    className?: string
    sliderWidth?: string
}

const SliderPage = ({ pages, currentPage = 0, width, className, sliderWidth }: Props) => {
    const [page, setPage] = useState(currentPage)
    const { width: screenWidth } = useResize()
    const sliderContentRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = () => {
        if (sliderContentRef?.current && screenWidth <= 1000) {
            setPage(Math.round(sliderContentRef.current?.scrollLeft / screenWidth))
        }
    }

    const handleChangePage = (page: number) => {
        setPage(page)

        if (sliderContentRef?.current) {
            if (screenWidth <= 1000) sliderContentRef.current.scrollLeft = screenWidth * page
            else sliderContentRef.current.scrollLeft = (screenWidth / 1.3) * page
        }
    }

    useEffect(() => {
        handleChangePage(page)
    }, [currentPage, screenWidth])

    return (
        <SliderPageWrapper width={width}>
            <Slider
                pages={pages.map(({ title, condition }) => ({
                    title,
                    condition,
                }))}
                currentPage={page}
                setCurrentPage={handleChangePage}
                sliderWidth={sliderWidth}
            />
            <div className={className ?? 'slider-content'} ref={sliderContentRef} onScroll={handleScroll}>
                {pages.map((page) => (
                    <div className="slider-page" key={page.title}>
                        {page.content}
                    </div>
                ))}
            </div>
        </SliderPageWrapper>
    )
}

export default SliderPage
