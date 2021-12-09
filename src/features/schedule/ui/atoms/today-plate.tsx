import React from 'react'
import styled from 'styled-components'

const TodayPlateWrapper = styled.div`
    padding: 2px 10px;
    width: fit-content;
    border-radius: 20px;
    color: var(--text);
    font-size: 0.7em;
    font-weight: bold;
`

const TodayPlate = () => {
    return <TodayPlateWrapper>Сегодня</TodayPlateWrapper>
}

export default TodayPlate
