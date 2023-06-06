import useResize from '@utils/hooks/use-resize'
import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { CurrentPage, SliderItem } from './ui/atoms'

interface ISlider {
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    sliderWidth?: string
    appearance?: boolean
}

const SliderWrapper = styled.div<{ size: number; sliderWidth?: string; appearance: boolean }>`
    max-width: ${({ sliderWidth }) => sliderWidth ?? '100%'};
    width: 100%;
    min-height: 50px;
    padding: ${({ appearance }) => appearance && '3px'};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({ appearance }) => appearance && 'var(--search2)'};
    border-radius: ${({ appearance }) => appearance && 'var(--brLight)'};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    @media (max-width: 1000px) {
        font-size: 11px;
        min-height: 40px;
        border-radius: var(--brLight);

        .slider-body {
            height: 34px;
        }
    }
`

const Slider = ({ pages, currentPage, setCurrentPage, sliderWidth, appearance = true }: ISlider) => {
    const [size, setSize] = useState(5)
    const sliderRef = useRef<HTMLDivElement>(null)

    const { width } = useResize()

    useEffect(() => {
        const innerWidth = sliderRef?.current?.offsetWidth ?? width
        if (innerWidth > 800) setSize(5)
        else if (innerWidth > 600 && innerWidth <= 800) setSize(4)
        else if (innerWidth > 400 && innerWidth <= 600) setSize(4)
        else if (innerWidth <= 400) setSize(3)
    }, [width, sliderRef.current])

    return (
        <SliderWrapper ref={sliderRef} size={size} sliderWidth={sliderWidth} appearance={appearance}>
            <div className="slider-body">
                <CurrentPage appearance={appearance} pages={pages} currentPage={currentPage} size={size} />
                {pages.map((page, index: number) => {
                    return (
                        <SliderItem
                            id={index}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageTitle={page.title}
                            condition={page.condition}
                            size={size}
                            key={index}
                        />
                    )
                })}
            </div>
        </SliderWrapper>
    )
}

export default memo(Slider)
