import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useResize from '../../../shared/lib/hooks/use-resize'
import { SliderItem } from '../atoms/slider-item'

interface ISlider {
    pages: string[]
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    sliderWidth?: string
}

const SliderWrapper = styled.div<{ size: number; sliderWidth?: string }>`
    max-width: ${({ sliderWidth }) => sliderWidth ?? '100%'};
    width: 100%;
    min-height: 50px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--search2);
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
    .SliderItem {
        width: 100%;
        height: 100%;
        min-width: calc(100% / ${({ size }) => size});
        padding: 10px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        transition: 0.2s opacity, 0.2s transform;
        z-index: 1;
        cursor: pointer;
        user-select: none;
        color: var(--text);
        &:hover {
            filter: brightness(0.8);
        }
        &.active {
            opacity: 1;
        }
        &:active {
            transform: scale(0.97);
        }
    }
    .currentPage {
        min-width: 80px;
        height: calc(100% - 6px);
        background: var(--theme);
        display: block;
        position: absolute;
        transition: 0.3s left, 0.2s transform;
        z-index: 0;
        border-radius: 14px;
        scroll-snap-align: center;
        height: 100%;
    }

    @media (max-width: 1000px) {
        font-size: 0.7em;
        min-height: 40px;
        border-radius: var(--brLight);

        .currentPage {
            border-radius: calc(var(--brLight) - 2px);
        }

        .slider-body {
            height: 34px;
        }
    }
`

const Slider = ({ pages, currentPage, setCurrentPage, sliderWidth }: ISlider) => {
    const [size, setSize] = useState(5)
    const moreThanNeeded = pages.length > size
    const { width } = useResize()
    const currentPageRef = useRef<any>(null)

    useEffect(() => {
        if (width > 1200) setSize(6)
        else if (width > 1000 && width <= 1200) setSize(5)
        else if (width > 600 && width <= 1000) setSize(4)
        else if (width <= 600) setSize(3)
    }, [width])

    return (
        <SliderWrapper size={size} sliderWidth={sliderWidth}>
            <div className="slider-body">
                <span
                    className="currentPage"
                    ref={currentPageRef}
                    style={{
                        left: `calc(${(currentPage * 100) / (!moreThanNeeded ? pages.length : size)}%`,
                        width: `calc(100% / ${!moreThanNeeded ? pages.length : size} - ${
                            pages.length > size ? 3 : 0
                        }px)`,
                    }}
                />
                {pages.map((page: string, index: number) => {
                    return (
                        <SliderItem
                            id={index}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageTitle={page}
                            key={index}
                        />
                    )
                })}
            </div>
        </SliderWrapper>
    )
}

export default memo(Slider)
