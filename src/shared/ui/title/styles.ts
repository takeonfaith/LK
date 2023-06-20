import { Align } from '@ui/types'
import styled from 'styled-components'

export const TitleWrapper = styled.div<{ align: Align; bottomGap: boolean | string; iconColor?: string; size: number }>`
    width: 100%;
    text-align: ${({ align }) => align};
    margin-bottom: ${({ bottomGap }) => (typeof bottomGap === 'string' ? bottomGap : bottomGap ? '10px' : '0')};
    display: inline-flex;
    align-items: center;
    justify-content: ${({ align }) =>
        align ? (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : align) : 'center'};

    svg {
        min-width: ${({ size }) => `${58 - size * 10}px`};
        height: ${({ size }) => `${58 - size * 10}px`};
        margin-right: 8px;
        color: ${({ iconColor }) => iconColor};
    }
`

export const RedStar = styled.span`
    color: var(--red);
    margin-right: 5px;
`
export const ChildrenWrapper = styled.div<{ width?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    width: ${({ width }) => width};
    width: 115px; // text-overflow не работает с динамическими значениями (?)
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
`
