import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useResize from '../../../shared/lib/hooks/use-resize'
import { SliderItem } from '../atoms/slider-item'

interface ISlider {
    pages: string[]
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

const SliderWrapper = styled.div<{ size: number }>`
    width: 100%;
    height: 50px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--search2);
    border-radius: 17px;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
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
            /* background: red; */
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
    }
`

const Slider: React.FC<ISlider> = ({ pages, currentPage, setCurrentPage }) => {
    const [size, setSize] = useState(5)
    const moreThanNeeded = pages?.length > size
    const { width } = useResize()
    const currentPageRef = useRef<any>(null)

    useEffect(() => {
        if (width > 1200) setSize(6)
        else if (width > 1000 && width <= 1200) setSize(5)
        else if (width > 600 && width <= 1000) setSize(4)
        else if (width <= 600) setSize(3)
    }, [width])

    return (
        <SliderWrapper size={size}>
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

export default React.memo(Slider)
