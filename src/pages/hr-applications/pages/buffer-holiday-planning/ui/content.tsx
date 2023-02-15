import React from 'react'
import { applicationsModel } from '@entities/applications'
import { useState } from 'react'
import History from './history'
import JobTitle from './job-title'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from '../model'

const Content = () => {
    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()

    if (!data) {
        return null
    }

    return (
        <Wrapper>
            {data.map((info, index) => {
                return <JobTitle info={info} index={index} />
            })}
            <History />
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
