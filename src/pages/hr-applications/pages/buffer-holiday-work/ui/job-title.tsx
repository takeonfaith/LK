import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
// import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import getHrApplicationsColumns from '../lib/get-hr-applications-columns'
// import { BufferHolidayWork } from '../types'

interface Props {
    //info?: BufferHolidayPlanning
    // jobTitleInfo: WorkerApplication
    info: WorkerApplication
    index: number
}

const JobTitle: React.FC<Props> = ({ info, index }) => {
    const { jobTitle, subDivision, rate } = info

    const [opened, setOpened] = useState<boolean>(false)

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
                Структурное подразделение: {subDivision}
                <br />
                Ставка: {rate}
                <br />
                {/* Вид места работы: добавим */}
            </JobDescription>
            {opened && (
                <ActionBlock>
                    {true && (
                        <Link to={`/hr-applications/holiday-work/${index}`}>
                            <Button
                                text="Выйти в выходной день"
                                background="rgb(236,95,107)"
                                textColor="#fff"
                                width={'250px'}
                                minWidth={'150px'}
                                height="36px"
                            />
                        </Link>
                    )}
                    {/* {!!dismissalApplications.length && (
                        <StyledTable columns={getHrApplicationsColumns()} data={dismissalApplications} maxOnPage={10} />
                    )} */}
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

// const StyledTable = styled(Table)`
//     width: 100%;
// `

const ActionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
`
