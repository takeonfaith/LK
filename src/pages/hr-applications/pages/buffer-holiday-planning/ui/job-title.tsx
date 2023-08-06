import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getBufferHolidayPlanningColumns } from '../lib/get-buffer-holiday-planning-columns'
import { BufferHolidayPlanning } from '../types'

interface Props {
    //info: BufferHolidayPlanning['employeeVacations'][0]
    info: WorkerApplication
    index: number
    data: BufferHolidayPlanning['employeeVacations']
}

const JobTitle: React.FC<Props> = ({ info, index, data }) => {
    //const { notTaken} = info

    const { jobTitle, subDivision, rate } = info

    const [opened, setOpened] = useState<boolean>(false)
    // console.log('info')
    // console.log(info)
    //console.log(data)
    // console.log(data)

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
                {/* Вид места работы: добавим */}
            </JobDescription>
            {opened && (
                <ActionBlock>
                    <Link to={`/hr-applications/holiday-planning/${index}`}>
                        <Button
                            text="Отпуск по этой должности"
                            background="rgb(236,95,107)"
                            textColor="#fff"
                            width={'250px'}
                            minWidth={'150px'}
                            height="36px"
                        />
                    </Link>
                    {/* {!!data[index].notTaken.length && (
                        <StyledTable
                            columns={getBufferHolidayPlanningColumns()}
                            data={data[index].notTaken}
                            maxOnPage={10}
                        />
                    )} */}
                    {data.map((workerInfo, index) => {
                        if (workerInfo.employeeGuid == info.jobGuid) {
                            const filteredData = data[index].notTaken.filter((item) => {
                                if (
                                    item.vacation.status.orderStatus != 'false' &&
                                    item.vacation.status.orderStatus != ''
                                )
                                    return item.vacation.status.orderStatus
                            })
                            return (
                                <StyledTable
                                    key={workerInfo.jobTitle}
                                    columns={getBufferHolidayPlanningColumns()}
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
