import { Direction, VerticalAlign } from '@ui/types'
import styled from 'styled-components'
import { ModifiedAlign } from '.'
import convertHorizontalAlign from './lib/convert-horizontal-align'
import convertVerticalAlign from './lib/convert-vertical-align'

export interface StyleProps {
    direction?: Direction
    width?: string
    minWidth?: string
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

export const Wrapper = styled.div<{ padding?: string; width?: string; minWidth?: string; height?: string }>`
    padding: ${({ padding }) => padding ?? '0'};
    position: relative;
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? 'fit-content'};
    min-width: ${({ minWidth }) => minWidth};

    .bottom-wrapper {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`

export const ListWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    max-height: 100%;
    align-items: center;
    height: ${({ height }) => height ?? 'fit-content'};
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
    min-width: ${({ minWidth, width }) => minWidth ?? width};
    color: var(--text);
    font-size: ${({ fontSize }) => fontSize ?? '1em'};
    overflow-x: ${({ scroll }) => scroll && 'auto'};
    flex-wrap: ${({ wrap }) => wrap && 'wrap'};
    padding: ${({ innerPadding }) => innerPadding ?? '0'};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: ${({ direction }) => direction === 'horizontal' && 'none'};
    }

    @media (max-width: 1000px) {
        flex-wrap: ${({ wrapOnMobile }) => (wrapOnMobile ? 'wrap' : 'nowrap')};
    }
`
