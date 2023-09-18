import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const ScheduleWidgetStyled = styled.div<{ noSchedule: boolean }>`
    --time-width: 30px;

    position: relative;
    width: 100%;
    max-width: calc(50% - 5px);
    height: 156px;
    padding: 6px;
    border-radius: 14px;
    background: var(--scheduleBg);

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`

export const ScheduleList = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    border-radius: 10px;
    scroll-snap-type: y mandatory;

    & > *:not(:last-child) {
        margin-bottom: 6px;
    }

    & > * {
        background-color: var(--theme);
        scroll-snap-align: center;
        color: var(--text);
    }

    ${MEDIA_QUERIES.isNotMobile} {
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
