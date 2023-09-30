import { MEDIA_QUERIES } from '@shared/constants'
import { Align, Direction } from '@ui/types'
import styled from 'styled-components'

export const ButtonWrapper = styled.button<{
    text: boolean
    isChosen?: boolean
    width?: string
    minWidth?: string
    background?: string
    padding?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    direction?: Direction
    align?: Align
    isActive: boolean
    fixedInMobile?: boolean
    height?: string
    flipped?: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ align = 'center' }) => align};
    border: none;
    color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--reallyBlue)' : background ?? 'var(--search)')};
    padding: ${({ padding }) => padding ?? '10px'};
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};
    min-width: ${({ minWidth }) => minWidth && minWidth};
    text-decoration: none;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    height: ${({ height = '40px' }) => height};
    ${({ flipped }) => flipped && 'transform: rotate(180deg);'};

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
        filter: brightness(0.97);
    }

    .text {
        margin-top: ${({ direction, text }) => direction === 'vertical' && text && '6px'};
    }

    .icon {
        margin-right: ${({ text, direction }) => (text && direction === 'horizontal' ? '7px' : '0')};
        width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : 'fit-content')};
        min-width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : 'fit-content')};
        height: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 100%;
            height: 100%;
            max-width: 18px;
            max-height: 18px;
            margin-right: 0 !important;
        }
    }

    ${MEDIA_QUERIES.isTablet} {
        font-size: 12px;
        height: ${({ height = '36px' }) => height};
        position: ${({ fixedInMobile }) => fixedInMobile && 'absolute'};
        z-index: ${({ fixedInMobile }) => fixedInMobile && '5'};
        bottom: 10px;
        right: 10px;

        .text {
            margin-top: ${({ direction, shrinkTextInMobile }) =>
                direction === 'vertical' && !shrinkTextInMobile ? '4px' : '0px'};
        }

        .icon {
            width: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};
            min-width: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};

            margin-right: ${({ shrinkTextInMobile, text, direction }) =>
                shrinkTextInMobile || direction === 'vertical' || !text ? '0px' : '7px'};
            height: ${({ direction }) => (direction === 'vertical' ? '30px' : '15px')};

            svg {
                max-width: 23px;
                /* max-height: 23px; */
            }
        }

        span {
            display: ${({ shrinkTextInMobile }) => (shrinkTextInMobile ? 'none' : 'flex')};
        }
    }
`
