import styled from 'styled-components'
import { DateWrapperProps, getBackground, getColor } from '../../ui/week-days/styles'
import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE } from '@pages/schedule/consts'
import { MEDIA_QUERIES } from '@shared/constants'

export const MonthCalendarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${CALENDAR_HEIGHT_DESKTOP};
    position: relative;

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`

export const Cells = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px solid var(--theme-3);
    border-top: 1px solid var(--theme-3);
    border-bottom: 1px solid var(--theme-3);
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 90px;

    ${MEDIA_QUERIES.isMiddleTesktop} {
        &::-webkit-scrollbar {
            display: none;
        }
    }

    ${MEDIA_QUERIES.isMobile} {
        border: none;
        scroll-padding-top: 50px;
    }
`

export const DayCell = styled.div<{ disabled: boolean }>`
    padding: 6px;
    width: calc(100% / 6);
    height: calc((100vh / 6) - 13px);
    background: transparent;
    border-right: 1px solid var(--almostTransparentOpposite);
    border-bottom: 1px solid var(--almostTransparentOpposite);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
    background: ${({ disabled }) => (disabled ? 'var(--theme-1t)' : 'transparent')};
    scroll-snap-align: center;

    ${MEDIA_QUERIES.isMobile} {
        padding: 12px;
        gap: 4px;
        height: calc((100vw / 6) - 5.5px);
        border-right: none;
    }
`

export const DateSection = styled.div`
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;

    ${MEDIA_QUERIES.isMobile} {
        justify-content: center;
    }
`

export const DateWrapper = styled.div<DateWrapperProps>`
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: ${getBackground};
    color: ${getColor};
`

export const MonthStartName = styled.div`
    position: sticky;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    top: 0px;
    padding: 10px;
    z-index: 100;
    margin: 4px 0;
    background: var(--block);

    ${MEDIA_QUERIES.isMobile} {
        background: var(--theme);
    }
`
