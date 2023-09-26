import { Size } from '@shared/ui/types'
import useResize from '@utils/hooks/use-resize'
import React, { memo, useEffect, useRef, useState } from 'react'
import { SliderWrapper } from './styles'
import { CurrentPage, SliderItem } from './ui'

interface ISlider {
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    sliderWidth?: string
    appearance?: boolean
    size?: Size
}

const Slider = ({ pages, currentPage, setCurrentPage, sliderWidth, appearance = true, size = 'middle' }: ISlider) => {
    const [elementsVisible, setElementsVisible] = useState(5)
    const sliderRef = useRef<HTMLDivElement>(null)

    const { width } = useResize()

    useEffect(() => {
        const innerWidth = sliderRef?.current?.offsetWidth ?? width
        if (innerWidth > 800) setElementsVisible(5)
        else if (innerWidth > 600 && innerWidth <= 800) setElementsVisible(4)
        else if (innerWidth > 400 && innerWidth <= 600) setElementsVisible(4)
        else if (innerWidth <= 400) setElementsVisible(3)
    }, [width, sliderRef.current])

    return (
        <SliderWrapper
            ref={sliderRef}
            elementsVisible={elementsVisible}
            sliderWidth={sliderWidth}
            appearance={appearance}
            size={size}
        >
            <div className="slider-body">
                <CurrentPage
                    size={size}
                    appearance={appearance}
                    pages={pages}
                    currentPage={currentPage}
                    elementsVisible={elementsVisible}
                />
                {pages.map((page, index: number) => {
                    return (
                        <SliderItem
                            size={size}
                            id={index}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageTitle={page.title}
                            condition={page.condition}
                            elementsVisible={elementsVisible}
                            key={index}
                        />
                    )
                })}
            </div>
        </SliderWrapper>
    )
}

export default memo(Slider)
