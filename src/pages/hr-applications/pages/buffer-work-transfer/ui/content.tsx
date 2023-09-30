import React from 'react'
import { applicationsModel } from '@entities/applications'
import { useState } from 'react'
import History from './history'
import JobTitle from './job-title'
import styled from 'styled-components'

const Content = () => {
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    const [historyIsEmpty, setHistoryIsEmpty] = useState<boolean>(true)

    if (!dataWorkerApplication) {
        return null
    }
    // async function fetchData() {
    //     const data = await getDivisions()
    //     //console.log(data.data) // { hello: 'world' }
    // }
    // fetchData()
    // getDivisions().then((data) => {
    //     let items
    //     data.data.divisions.map((item: any, index: number) => {
    //         items[index] = { id: index, title: item.divisionName }
    //     })
    // })

    return (
        <Wrapper>
            {dataWorkerApplication.map((jobTitleInfo, index) => {
                if (jobTitleInfo.isDismissal) {
                    historyIsEmpty && setHistoryIsEmpty(false)
                    return null
                } else return <JobTitle info={jobTitleInfo} index={index} />
            })}
            {/* {data.map((info, index) => {
                return <JobTitle info={info} index={index} />
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
