import { IColorPalette, MEDIA_QUERIES } from '@shared/consts'
import React from 'react'
import styled from 'styled-components'

const TimeSquare = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
`

const TimeIndicatorStyled = styled.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`

const TimeIntervalStyled = styled.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.7rem;
    }
`

type Props = {
    timeInterval?: string
    color: IColorPalette
}

export const TimeIndicator = ({ timeInterval, color }: Props) => {
    return (
        <TimeIndicatorStyled>
            <TimeSquare color={color.main} />
            {timeInterval && <TimeIntervalStyled>{timeInterval}</TimeIntervalStyled>}
        </TimeIndicatorStyled>
    )
}
