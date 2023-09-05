import { MEDIA_QUERIES } from '@shared/consts'
import styled from 'styled-components'
import { Wrapper } from '../wrapper'
import { CALENDAR_HEIGHT_DESKTOP, CALENDAR_HEIGHT_MOBILE } from '@pages/schedule/consts'

export const WeekCalendarWrapper = styled(Wrapper)`
    height: ${CALENDAR_HEIGHT_DESKTOP};
    position: relative;

    ${MEDIA_QUERIES.isMobile} {
        height: ${CALENDAR_HEIGHT_MOBILE};
    }
`
