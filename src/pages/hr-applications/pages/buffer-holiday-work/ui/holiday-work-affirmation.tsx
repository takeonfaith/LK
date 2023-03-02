//import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
// import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import getHrApplicationsColumns from '../lib/get-hr-applications-columns'
import { BufferHolidayWork } from '../types'

interface Props {
    info?: BufferHolidayWork
    // jobTitleInfo: WorkerApplication
    // info: WorkerApplication
    // index: number
}

const HWAssesment: React.FC<Props> = () => {
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
            //background={'#1e1e1e'}
        >
            <BlockHeader>
                <span>{'Вам пришло заявление на выход в выходной день'}</span>
                <Button
                    icon={opened ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => {
                        setOpened((prev) => !prev)
                    }}
                    background="transparent"
                />
            </BlockHeader>
            <JobDescription>
                Дата выхода: 12.12.2023
                <br />
                Вид компенсации: двойная ставка
                <br />
                {/* Вид места работы: добавим */}
            </JobDescription>
            {opened && (
                <ActionBlock>
                    <Button
                        text="Согласиться"
                        background="rgb(60,210,136)"
                        textColor="#fff"
                        width={'250px'}
                        minWidth={'150px'}
                        height="36px"
                    />
                    <Button
                        text="Отказатсья"
                        background="rgb(236,95,107)"
                        textColor="#fff"
                        width={'250px'}
                        minWidth={'150px'}
                        height="36px"
                    />

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
                padding="0px"
            />
        </Block>
    )
}

export default HWAssesment

const JobDescription = styled.div`
    line-height: 2em;
    margin-top: 0px;
    font-weight: normal;
    font-size: 0.9em;
`

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    color: rgb(236, 95, 107);
    gap: 10px;
    align-items: center;
`

// const StyledTable = styled(Table)`
//     width: 100%;
// `

const ActionBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10%;
    align-items: center;
    width: 100%;
`
