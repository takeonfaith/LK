import styled from 'styled-components'
import { Wrapper } from '../ui/wrapper'
import { SCREEN_IPHONE_XR } from '@shared/consts'

export const WeekCalendarWrapper = styled(Wrapper)`
    height: calc(100vh - var(--header-height) - 185px);
    position: relative;

    @media (max-width: ${SCREEN_IPHONE_XR}) {
        height: calc(100vh - var(--header-height) - 200px);
    }
`
