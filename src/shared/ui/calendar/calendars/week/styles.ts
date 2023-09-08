import { MEDIA_QUERIES } from '@shared/consts'
import styled from 'styled-components'
import { Wrapper } from '../../ui/wrapper'
import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE, CALENDAR_HEIGHT_TABLET } from '@pages/schedule/consts'

export const WeekCalendarWrapper = styled(Wrapper)`
    height: ${CALENDAR_HEIGHT_DESKTOP};
    position: relative;

    ${MEDIA_QUERIES.isTablet} {
        height: ${CALENDAR_HEIGHT_TABLET};
    }

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`
