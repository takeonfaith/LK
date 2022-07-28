import React, { memo } from 'react'
import styled from 'styled-components'

const SliderItemWrapper = styled.div<{ size: number; condition: boolean }>`
    width: 100%;
    height: 100%;
    min-width: calc(100% / ${({ size }) => size});
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ condition }) => (condition ? 0.7 : 0.3)};
    transition: 0.2s opacity, 0.2s transform;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    color: var(--text);

    & > b {
        word-break: normal;
        text-overflow: ellipsis;
    }

    &:hover {
        filter: ${({ condition }) => condition && 'brightness(0.8)'};
    }

    &.active {
        opacity: 1;
    }

    &:active {
        transform: scale(0.97);
    }
`

interface Props {
    id: number
    currentPage: number
    setCurrentPage: (page: number) => void
    pageTitle: string
    size: number
    condition?: boolean
}

const SliderItem = ({ id, currentPage, setCurrentPage, pageTitle, size, condition = true }: Props) => {
    return (
        <SliderItemWrapper
            className={`SliderItem ${id === currentPage ? 'active' : ''}`}
            onClick={() => condition && setCurrentPage(id)}
            size={size}
            condition={condition}
        >
            <b>{pageTitle}</b>
        </SliderItemWrapper>
    )
}

export default memo(SliderItem)
