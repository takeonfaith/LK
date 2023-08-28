import { SCREEN_IPAD_AIR } from '@shared/consts'
import styled from 'styled-components'
import { Wrapper } from '../ui/wrapper'

export const DayCalendarWrapper = styled(Wrapper)`
    height: calc(100vh - var(--header-height) - 185px);

    @media (max-width: 768px) {
        height: calc(100vh - var(--header-height) - 200px);
    }
`

export const EventInfo = styled.div`
    min-width: 380px;
    max-width: 380px;
    height: 100%;
    z-index: 10;
    background: var(--form);
    border-radius: 10px;
    top: 0;
    overflow: hidden;
    box-shadow: var(--schedule-shadow);

    @media (max-width: ${SCREEN_IPAD_AIR}) {
        display: none;
    }
`

export const EventsCarousel = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    width: 100%;
    gap: 32px;
    display: flex;

    scroll-snap-type: x mandatory;

    & {
        .calendar-wrapper {
            scroll-snap-align: center;
            min-width: 100%;
        }

        .events {
            min-width: 100%;
        }
    }
`
