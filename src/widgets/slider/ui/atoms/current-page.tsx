import React from 'react'
import { memo, useMemo } from 'react'
import styled from 'styled-components'

const CurrentPageWrapper = styled.span<{
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    size: number
    moreThanNeeded: boolean
    appearance?: boolean
}>`
    min-width: 80px;
    height: calc(100% - 0px);
    background: ${({ appearance }) => (appearance ? 'var(--theme)' : 'var(--mild-theme)')};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(var(--brLight) - 2px);
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
    appearance?: boolean
}

const CurrentPage = ({ currentPage, pages, size, appearance }: Props) => {
    const moreThanNeeded = useMemo(() => pages.length > size, [pages.length, size])

    return (
        <CurrentPageWrapper
            currentPage={currentPage}
            appearance={appearance}
            moreThanNeeded={moreThanNeeded}
            pages={pages}
            size={size}
        />
    )
}

export default memo(CurrentPage)
