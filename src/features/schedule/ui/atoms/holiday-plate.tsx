import React from 'react'
import styled from 'styled-components'
import Sleep from '../../../../shared/images/sleep.gif'
import { Button } from '@shared/ui/button'
import { Colors } from '@shared/constants'

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
    gap: 6px;
    font-weight: 500;
    text-align: center;

    img {
        width: 60px;
        height: 60px;
    }
`

const HolidayPlate = () => {
    return (
        <HolidayPlateWrapper>
            <img src={Sleep} alt="дед наелся и спит" />
            <span>В этот день пар нет</span>
            <Button
                text="Посмотреть следующий"
                textColor="var(--blue)"
                background="var(--form)"
                hoverBackground={Colors.blue.transparent3}
            />
        </HolidayPlateWrapper>
    )
}

export default HolidayPlate
