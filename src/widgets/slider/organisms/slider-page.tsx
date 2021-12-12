import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from '../molecules/slider'

const SliderPageWrapper = styled.div<{ width?: string }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
    height: 100%;

    .slider-content {
        height: 100%;
        overflow-y: auto;
        margin-top: 10px;
        width: 100%;
    }
`

interface Page {
    title: string
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

    return (
        <SliderPageWrapper width={width}>
            <Slider
                pages={pages.map(({ title }) => title)}
                currentPage={page}
                setCurrentPage={setPage}
                sliderWidth={sliderWidth}
            />
            <div className={className ?? 'slider-content'}>{pages[page].content}</div>
        </SliderPageWrapper>
    )
}

export default SliderPage
