import styled from 'styled-components'
import { StyledProps } from './types'
import { SCREEN_IPHONE_XR } from '@shared/consts'
import Flex from '@shared/ui/flex'

const getTop = ({ startTimeShift, startDayShift, scale }: StyledProps) => {
    const top = (startTimeShift - startDayShift) * scale

    return `${top}px`
}

export const EventItemStyled = styled.div<StyledProps>`
    width: ${({ width }) => `calc(${width}% - 1px)`};
    height: ${({ duration, scale }) => `${duration * scale}px`};
    border-radius: 5px;
    padding: ${({ shortInfo, scale }) => (!shortInfo ? `${scale * 11}px` : '8px')};
    display: flex;
    position: relative;
    overflow: hidden;
    color: ${({ color }) => color};
    filter: ${({ otherIsCurrent }) => otherIsCurrent && 'grayscale(0.8)'};
    cursor: pointer;
    position: absolute;
    transform: translateX(${({ leftShift }) => `calc(${leftShift}% + ${1 * (leftShift / 100)}px)`});
    left: 0;
    top: ${getTop};

    &:hover {
        filter: brightness(0.95);
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        padding: ${({ shortInfo, scale }) => (!shortInfo ? `${scale * 10}px` : '4px')};
    }
`

export const IconSection = styled.div<{ scale: number }>`
    min-width: 35px;
    height: 100%;

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`

export const EventFront = styled(Flex)<{ shortInfo: boolean; scale: number }>`
    gap: ${({ shortInfo, scale }) => (!shortInfo ? `${8 * scale}px` : '4px')};

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        gap: ${({ shortInfo, scale }) => (!shortInfo ? `${4 * scale}px` : '4px')};
    }
`

export const EventTitle = styled.span<{ shortInfo: boolean; scale: number }>`
    font-weight: 500;
    font-size: ${({ shortInfo, scale }) => (!shortInfo ? `${0.85 * scale}rem` : '0.85rem')};
    padding-top: 2px;
    white-space: ${({ shortInfo }) => !shortInfo && 'nowrap'};
    text-overflow: ${({ shortInfo }) => !shortInfo && 'ellipsis'};
    overflow: ${({ shortInfo }) => !shortInfo && 'hidden'};
    hyphens: auto;
    width: ${({ shortInfo }) => (!shortInfo ? 'fit-content' : '100%')};

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        font-size: ${({ shortInfo, scale }) => (!shortInfo ? `${0.95 * scale}rem` : '0.7rem')};
    }
`

export const MobileIcon = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    width: 100%;
    justify-content: center;
    align-items: center;

    svg {
        width: 40%;
        height: auto;
    }

    /* @media (max-width: ${SCREEN_IPHONE_XR}) {
        display: flex;
    } */
`
