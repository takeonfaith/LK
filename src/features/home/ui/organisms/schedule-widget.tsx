import { scheduleModel } from '@entities/schedule'
import { MEDIA_QUERIES } from '@shared/consts'
import React from 'react'
import styled from 'styled-components'

const ScheduleWidgetStyled = styled.div`
    --time-width: 30px;

    position: relative;
    width: 100%;
    height: 156px;
    padding: 6px;
    border-radius: 12px;
    background: var(--scheduleBg);

    ${MEDIA_QUERIES.isMobile} {
        --time-width: 35px;
        min-width: 100%;
    }
`

export const ScheduleWidget = () => {
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()

    return <ScheduleWidgetStyled>{schedule?.today.length === 0 && 'Сегодня адыхаем'}</ScheduleWidgetStyled>
}
