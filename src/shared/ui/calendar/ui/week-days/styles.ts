import { MEDIA_QUERIES } from '@shared/consts'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'

export type DateWrapperProps = { isCurrent?: boolean; isCurrentChosenDay?: boolean }

export const getBackground = ({ isCurrent, isCurrentChosenDay }: DateWrapperProps) => {
    if (isCurrentChosenDay && !isCurrent) return 'var(--text)'

    if (isCurrent && isCurrentChosenDay) return 'var(--reallyBlue)'
}

export const getColor = ({ isCurrent, isCurrentChosenDay }: DateWrapperProps) => {
    if (isCurrent && isCurrentChosenDay) return '#fff'

    if (isCurrentChosenDay) return 'var(--invert-text)'

    if (isCurrent) return 'var(--blue)'

    return 'var(--text)'
}

export const WeekDaysWrapper = styled(Flex)`
    padding-left: var(--time-width);
`

export const WeekDay = styled.div<{ showColumns: boolean }>`
    width: 100%;
    font-weight: 500;
    height: 44px;
    border-radius: 4px;
    font-size: 0.86rem;
    cursor: pointer;

    &:hover {
        background: var(--leftside-bar);
    }

    &::before,
    &::after {
        content: '';
        display: ${({ showColumns }) => (showColumns ? 'block' : 'none')};
        height: calc(100% - 64px);
        top: 54px;
        width: 1.5px;
        position: absolute;
        background: var(--leftside-bar);
    }

    &::after {
        right: 0;
    }

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.8rem;
        height: 70px;

        &::after,
        &::before {
            top: 80px;
            height: calc(100% - 88px);
        }
    }
`

export const WeekDayTop = styled(Flex)`
    margin: 2px 0;

    ${MEDIA_QUERIES.isMobile} {
        flex-direction: column;
        margin: 6px 0;
    }
`

export const DayWrapper = styled.span<{ showDates?: boolean; isCurrentChosenDay: boolean; isCurrent: boolean }>`
    margin-left: auto;
    margin-right: ${({ showDates }) => (!showDates ? 'auto' : '0')};
    background: ${({ showDates }) => !showDates && getBackground};
    color: ${({ showDates }) => (!showDates ? getColor : 'var(--grey)')};
    padding: 5px;
    border-radius: 25px;

    ${MEDIA_QUERIES.isMobile} {
        margin-right: auto;
        padding: 4px;
    }
`

export const DateWrapper = styled.span<DateWrapperProps>`
    height: 26px;
    min-width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-right: auto;
    margin-left: 2px;
    background: ${getBackground};
    color: ${getColor};
    font-weight: ${({ isCurrent, isCurrentChosenDay }) => isCurrent && isCurrentChosenDay && '600'};

    ${MEDIA_QUERIES.isMobile} {
        margin-left: auto;
        margin-top: 4px;
        font-size: ${({ isCurrent }) => isCurrent && '0.8rem'};
    }
`
