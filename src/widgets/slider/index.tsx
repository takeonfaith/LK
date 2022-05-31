import useResize from '@utils/hooks/use-resize'
import React, { memo, useEffect, useState } from 'react'
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
    border-radius: 17px;
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

    const { width } = useResize()

    useEffect(() => {
        if (width > 1200) setSize(6)
        else if (width > 1000 && width <= 1200) setSize(5)
        else if (width > 600 && width <= 1000) setSize(4)
        else if (width <= 600) setSize(3)
    }, [width])

    return (
        <SliderWrapper size={size} sliderWidth={sliderWidth} appearance={appearance}>
            <div className="slider-body">
                <CurrentPage pages={pages} currentPage={currentPage} size={size} />
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
