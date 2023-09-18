import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const NextDayScheduleStyled = styled.div`
    --time-width: 55px;

    ${MEDIA_QUERIES.isNotMobile} {
        width: 500px;
        height: 500px;
    }

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
        height: 600px;
    }

    position: relative;

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
