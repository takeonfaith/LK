import { MEDIA_QUERIES } from '@shared/consts'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import { StyledProps } from './types'

const getTop = ({ startTimeShift, startDayShift, scale }: StyledProps) => {
    const top = (startTimeShift - startDayShift) * scale

    return `${top}px`
}

export const EventItemStyled = styled.div<StyledProps>`
    width: ${({ quantity }) => `calc(${quantity}% - 1px)`};
    height: ${({ duration, scale }) => `${duration * scale}px`};
    border-radius: 5px;
    padding: ${({ shortInfo, scale }) => (!shortInfo ? `${scale * 8}px` : '8px')};
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

    ${MEDIA_QUERIES.isMobile} {
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

    ${MEDIA_QUERIES.isMobile} {
        min-width: 28px;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`

export const EventFront = styled(Flex)<{ shortInfo: boolean; scale: number }>`
    gap: ${({ shortInfo }) => (!shortInfo ? '10px' : '6px')};

    ${MEDIA_QUERIES.isMobile} {
        gap: ${({ shortInfo }) => (!shortInfo ? '8px' : '6px')};
    }
`

export const EventTitle = styled.span<{ shortInfo: boolean; scale: number }>`
    font-weight: 500;
    font-size: ${({ shortInfo }) => (!shortInfo ? `0.9rem` : '0.85rem')};
    padding-top: 2px;
    white-space: ${({ shortInfo }) => !shortInfo && 'nowrap'};
    text-overflow: ${({ shortInfo }) => !shortInfo && 'ellipsis'};
    overflow: ${({ shortInfo }) => !shortInfo && 'hidden'};
    hyphens: auto;
    width: 100%;
    margin-bottom: 2px;

    ${MEDIA_QUERIES.isMobile} {
        font-size: ${({ shortInfo }) => (!shortInfo ? `0.8rem` : '0.7rem')};
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

    /* ${MEDIA_QUERIES.isMobile} {
        display: flex;
    } */
`

export const EventsWrapper = styled(Flex)`
    height: 100%;
    z-index: 1;
    position: relative;
    margin-top: 19px;
    margin-left: 0px;
    margin-right: 0px;
`
