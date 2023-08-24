import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import { Wrapper } from '../ui/wrapper'
import { SCREEN_IPHONE_XR } from '@shared/consts'

export const WeekCalendarWrapper = styled(Wrapper)`
    height: calc(100vh - var(--header-height) - 185px);
    position: relative;
`

export const WeekDaysWrapper = styled(Flex)`
    padding-left: var(--time-width);
    height: 30px;
`

export const WeekDay = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 500;

    font-size: 0.86rem;

    &::before {
        content: '';
        display: block;
        height: calc(100% - 48px);
        top: 38px;
        width: 1.5px;
        position: absolute;
        background: var(--leftside-bar);
    }

    &::after {
        content: '';
        display: block;
        height: calc(100% - 48px);
        top: 38px;
        right: 0;
        width: 1.5px;
        position: absolute;
        background: var(--leftside-bar);
    }

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        font-size: 0.65rem;
    }
`

export const DayWrapper = styled.span`
    opacity: 0.6;
`

export const DateWrapper = styled.span<{ isCurrent: boolean }>`
    padding: 5px 6px;
    border-radius: 100px;
    background: ${({ isCurrent }) => isCurrent && 'var(--reallyBlue)'};
    color: ${({ isCurrent }) => isCurrent && '#fff'};
    font-weight: ${({ isCurrent }) => isCurrent && '600'};
    font-size: ${({ isCurrent }) => isCurrent && '0.8rem'};
    margin-left: 4px;

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        font-size: ${({ isCurrent }) => isCurrent && '0.65rem'};
    }
`
