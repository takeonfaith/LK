import styled from 'styled-components'
import { StyledProps } from './types'
import { SCREEN_IPHONE_XR } from '@shared/consts'

export const EventItemStyled = styled.div<StyledProps>`
    width: ${({ width, listView }) => (listView ? '100%' : `calc(${width}% - 1px)`)};
    height: ${({ duration, scale, listView }) => (listView ? '120px' : `${(duration + 3) * scale}px`)};
    border-radius: 5px;
    padding: ${({ shortInfo }) => (!shortInfo ? '12px' : '8px')};
    display: flex;
    position: relative;
    overflow: hidden;
    background: var(--schedule);
    color: ${({ color, listView }) => (listView ? 'var(--text)' : color)};
    filter: ${({ otherIsCurrent }) => otherIsCurrent && 'grayscale(0.8)'};
    cursor: pointer;
    position: ${({ listView }) => (listView ? 'static' : 'absolute')};
    margin: ${({ listView }) => (listView ? '4px' : '0')};
    transform: translateX(${({ leftShift }) => `calc(${leftShift}% + ${1 * (leftShift / 100)}px)`});
    left: 0;
    top: ${({ startTimeShift, startDayShift, scale }) =>
        `${startTimeShift - startDayShift + ((startTimeShift - startDayShift) / (60 * scale)) * 3}px`};

    &:hover {
        filter: brightness(0.95);
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        padding: ${({ shortInfo }) => (!shortInfo ? '12px' : '4px')};
    }
`

export const IconSection = styled.div`
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

export const EventTitle = styled.span<{ shortInfo: boolean }>`
    font-weight: 500;
    font-size: ${({ shortInfo }) => (!shortInfo ? '0.95rem' : '0.85rem')};
    padding-top: 2px;
    white-space: ${({ shortInfo }) => !shortInfo && 'nowrap'};
    text-overflow: ${({ shortInfo }) => !shortInfo && 'ellipsis'};
    overflow: ${({ shortInfo }) => !shortInfo && 'hidden'};
    hyphens: auto;
    width: ${({ shortInfo }) => (!shortInfo ? 'calc(100% - 40px)' : '100%')};

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        font-size: ${({ shortInfo }) => (shortInfo ? '0.7rem' : '0.9rem')};
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
