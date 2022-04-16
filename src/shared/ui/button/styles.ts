import { Align, Direction } from '@ui/types'
import styled from 'styled-components'

export const ButtonWrapper = styled.button<{
    text: boolean
    isChosen?: boolean
    width?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    direction?: Direction
    align?: Align
    isActive: boolean
    height?: string
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ align = 'center' }) => align};
    border: none;
    color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};
    text-decoration: none;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    height: ${({ height = '40px' }) => height};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({ hoverBackground, isChosen, background }) =>
            hoverBackground ?? (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    }

    svg {
        margin-right: ${({ text, direction }) => (text && direction === 'horizontal' ? '7px' : '0')};
        width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        height: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        margin-bottom: ${({ direction }) => direction === 'vertical' && '4px'};
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;

        svg {
            width: ${({ direction }) => (direction === 'vertical' ? '30px' : '14px')};
            height: ${({ direction }) => (direction === 'vertical' ? '30px' : '14px')};
            margin-right: ${({ shrinkTextInMobile, text, direction }) =>
                shrinkTextInMobile || direction === 'vertical' || !text ? '0px' : '7px'};
        }

        span {
            display: ${({ shrinkTextInMobile }) => (shrinkTextInMobile ? 'none' : 'flex')};
        }
    }
`
