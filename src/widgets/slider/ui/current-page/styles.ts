import { Size } from '@shared/ui/types'
import styled from 'styled-components'
import { RADIUSES } from 'widgets/slider/consts'
import { getValueFromSize } from 'widgets/slider/lib/get-value-from-size'

export const CurrentPageWrapper = styled.span<{
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    elementsVisible: number
    moreThanNeeded: boolean
    appearance?: boolean
    size: Size
}>`
    height: calc(100% - 0px);
    background: ${({ appearance }) => (appearance ? 'var(--theme)' : 'var(--theme-1)')};
    display: block;
    position: absolute;
    transition: 0.3s left, 0.2s transform;
    z-index: 0;
    border-radius: calc(${getValueFromSize(RADIUSES)} - 3px);
    scroll-snap-align: center;
    left: ${({ currentPage, moreThanNeeded, pages, elementsVisible }) =>
        `calc(${(currentPage * 100) / (!moreThanNeeded ? pages.length : elementsVisible)}%)`};
    width: ${({ moreThanNeeded, pages, elementsVisible }) =>
        `calc(100% / ${!moreThanNeeded ? pages.length : elementsVisible} - ${
            pages.length > elementsVisible ? 3 : 0
        }px)`};

    @media (max-width: 1000px) {
        border-radius: calc(var(--brLight) - 2px);
    }
`
