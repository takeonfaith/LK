import React from 'react'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from '../model'
import History from './history'
import JobTitle from './job-title'
import { applicationsModel } from '@entities/applications'
import { useState } from 'react'

const Content = () => {
    //const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    // console.log(data)
    // {
    //     data.map((info, index) => {
    //         if (info.jobTitle == null) data.shift()
    //     })
    // }
    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const [historyIsEmpty, setHistoryIsEmpty] = useState<boolean>(true)
    if (!dataWorkerApplication) {
        return null
    }
    //console.log(dataWorkerApplication)
    return (
        <Wrapper>
            {dataWorkerApplication.map((jobTitleInfo, index) => {
                if (jobTitleInfo.isDismissal) {
                    historyIsEmpty && setHistoryIsEmpty(false)
                    return null
                } else return <JobTitle info={jobTitleInfo} index={index} data={data} />
            })}
            {/* {data.map((info, index) => {
                return <JobTitle key={index} info={info} index={index} />
            })} */}
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
