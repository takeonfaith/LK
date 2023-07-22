import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getMedicalExaminationHistoryColumns } from '../lib/get-medical-examination-columns'
import { bufferMedicalExaminationModel } from '../model'
import { BufferMedicalExaminationOrder } from '../types'
// import getHrApplicationsColumns from '../lib/get-hr-applications-columns'
// import { BufferHolidayWork } from '../types'

interface Props {
    //info?: BufferHolidayPlanning
    // jobTitleInfo: WorkerApplication
    info: WorkerApplication
    index: number
    data: BufferMedicalExaminationOrder[]
}

const JobTitle: React.FC<Props> = ({ info, index }) => {
    const { jobTitle, subDivision, rate } = info
    const { data } = bufferMedicalExaminationModel.selectors.useBufferMedicalExamination()
    const [opened, setOpened] = useState<boolean>(false)
    if (data.length == 0) return null

    return (
        <Block
            orientation={'vertical'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            gap={'10px'}
            width="100%"
            maxWidth="100%"
            height="fit-content"
        >
            <BlockHeader>
                <span>{jobTitle}</span>
                <Button
                    icon={opened ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => {
                        setOpened((prev) => !prev)
                    }}
                    background="transparent"
                />
            </BlockHeader>
            <JobDescription>
                Подразделение: {subDivision}
                <br />
                Ставка: {rate}
                <br />
                {/* Вид места работы: добавим */}
            </JobDescription>
            {opened && (
                <ActionBlock>
                    {true && (
                        <Link to={`/hr-applications/medical-examination/${index}`}>
                            <Button
                                text="Оформить заявление"
                                background="rgb(236,95,107)"
                                textColor="#fff"
                                width={'250px'}
                                minWidth={'150px'}
                                height="36px"
                            />
                        </Link>
                    )}
                    {data.map((workerInfo, index) => {
                        if (workerInfo.employeeGuid == info.jobGuid) {
                            const filteredData = data[index].notTaken.filter((item) => {
                                if (
                                    item.medicalExamination.status.orderStatus != 'false' &&
                                    item.medicalExamination.status.orderStatus != ''
                                )
                                    return item.medicalExamination.status.orderStatus
                            })
                            return (
                                <StyledTable
                                    columns={getMedicalExaminationHistoryColumns()}
                                    data={filteredData}
                                    maxOnPage={10}
                                />
                            )
                        }
                    })}
                </ActionBlock>
            )}
            <Button
                onClick={() => {
                    setOpened((prev) => !prev)
                    // setOpenedHistory(false)
                }}
                text={opened ? 'Скрыть' : 'Подробнее'}
                background="transparent"
                padding="0px"
            />
        </Block>
    )
}

export default JobTitle

const JobDescription = styled.div`
    line-height: 1.5em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const StyledTable = styled(Table)`
    width: 100%;
`

const ActionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`
