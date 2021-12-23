import React from 'react'
import styled from 'styled-components'
import Sleep from '../../../../shared/images/sleep.gif'

const HolidayPlateWrapper = styled.div`
    width: 100%;
    background: var(--schedule);
    padding: 20px 15px;
    border-radius: 9px;
    scroll-snap-align: center;
    height: 144px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    text-align: center;

    img {
        width: 70px;
        height: 70px;
    }
`

const HolidayPlate = () => {
    return (
        <HolidayPlateWrapper>
            <img src={Sleep} alt="дед наелся и спит" />
            <span>В этот день пар нет</span>
        </HolidayPlateWrapper>
    )
}

export default HolidayPlate
