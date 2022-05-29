import { Direction, VerticalAlign } from '@ui/types'
import styled from 'styled-components'
import { ModifiedAlign } from '.'
import convertHorizontalAlign from './lib/convert-horizontal-align'
import convertVerticalAlign from './lib/convert-vertical-align'

export interface StyleProps {
    direction?: Direction
    width?: string
    height?: string
    gap?: number
    horizontalAlign?: ModifiedAlign
    verticalAlign?: VerticalAlign
    padding?: string
    innerPadding?: string
    fontSize?: string
    scroll?: boolean
    wrap?: boolean
    wrapOnMobile?: boolean
}

export const Wrapper = styled.div<{ padding?: string }>`
    padding: ${({ padding }) => padding ?? '0'};
    position: relative;
    .left-button,
    .right-button {
        position: absolute;
        top: 50%;
        z-index: 5;
        transform: translateY(-50%);
    }

    .left-button {
        left: 0;
    }

    .right-button {
        right: 0;
    }
`

export const ListWrapper = styled.div<StyleProps>`
    display: flex;
    height: ${({ height }) => height ?? 'fit-content'};
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: ${({ direction, horizontalAlign, verticalAlign }) =>
        (direction ?? 'vertical') === 'vertical'
            ? convertVerticalAlign(verticalAlign)
            : convertHorizontalAlign(horizontalAlign)};
    align-items: ${({ direction, horizontalAlign, verticalAlign }) =>
        (direction ?? 'vertical') === 'vertical'
            ? convertHorizontalAlign(horizontalAlign)
            : convertVerticalAlign(verticalAlign)};
    gap: ${({ gap }) => (gap ?? 5) + 'px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    color: var(--text);
    font-size: ${({ fontSize }) => fontSize ?? '1em'};
    overflow-x: ${({ scroll }) => scroll && 'auto'};
    flex-wrap: ${({ wrap }) => wrap && 'wrap'};
    padding: ${({ innerPadding }) => innerPadding ?? '0'};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({ wrapOnMobile }) => (wrapOnMobile ? 'wrap' : 'nowrap')};
    }
`
