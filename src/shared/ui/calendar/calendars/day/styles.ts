import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'
import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE, CALENDAR_HEIGHT_TABLET } from '@pages/schedule/consts'
import { Wrapper } from '../../ui/wrapper'

export const DayCalendarWrapper = styled(Wrapper)`
    height: ${CALENDAR_HEIGHT_DESKTOP};

    ${MEDIA_QUERIES.isTablet} {
        height: ${CALENDAR_HEIGHT_TABLET};
    }

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`

export const EventInfo = styled.div`
    min-width: 340px;
    max-width: 340px;
    height: 100%;
    z-index: 10;
    background: var(--form);
    border-radius: 10px;
    top: 0;
    overflow: hidden;
    box-shadow: var(--schedule-shadow);

    ${MEDIA_QUERIES.isSmallTesktop} {
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
