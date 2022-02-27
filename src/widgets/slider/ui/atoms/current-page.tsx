import React, { memo, useMemo } from 'react'
import styled from 'styled-components'

const CurrentPageWrapper = styled.span<{
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    size: number
    moreThanNeeded: boolean
}>`
    min-width: 80px;
    height: calc(100% - 0px);
    background: var(--theme);
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: 14px;
    scroll-snap-align: center;
    left: ${({ currentPage, moreThanNeeded, pages, size }) =>
        `calc(${(currentPage * 100) / (!moreThanNeeded ? pages.length : size)}%)`};
    width: ${({ moreThanNeeded, pages, size }) =>
        `calc(100% / ${!moreThanNeeded ? pages.length : size} - ${pages.length > size ? 3 : 0}px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`

interface Props {
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    size: number
}

const CurrentPage = ({ currentPage, pages, size }: Props) => {
    const moreThanNeeded = useMemo(() => pages.length > size, [pages.length, size])

    return <CurrentPageWrapper currentPage={currentPage} moreThanNeeded={moreThanNeeded} pages={pages} size={size} />
}

export default memo(CurrentPage)
