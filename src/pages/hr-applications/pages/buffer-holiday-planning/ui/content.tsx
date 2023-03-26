import React from 'react'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from '../model'
import JobTitle from './job-title'

const Content = () => {
    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()

    if (!data) {
        return null
    }

    return (
        <Wrapper>
            {/* {data.map((jobTitleInfo, index) => {
                if (jobTitleInfo.isDismissal) {
                    historyIsEmpty && setHistoryIsEmpty(false)
                    return null
                } else return <JobTitle info={jobTitleInfo} index={index} />
            })} */}
            {data.map((info, index) => {
                return <JobTitle key={index} info={info} index={index} />
            })}
        </Wrapper>
    )
}

export default Content

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
