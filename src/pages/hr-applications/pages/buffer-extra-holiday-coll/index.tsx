import { Application, WorkerApplication } from '@api/model'
import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import search from '@features/applications/lib/search'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { Button, FormBlock, Message, Title, Wrapper } from '@ui/atoms'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import Table from '@ui/table'
import React, { useState } from 'react'
import { FiInfo, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { Collapse, UnmountClosed } from 'react-collapse'
import { SelectPage } from '@features/select'
import InputArea from '@ui/input-area'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import getHrApplicationsColumns from './lib/get-hr-applications-columns'
import Dismissal from '../dismissal'
import { useHistory } from 'react-router'
import { setCurrentIndex } from '@pages/hr-applications/lib/currentIndex'
import { getWorkerData, postWorkerStatuses } from '@api/application-api'

const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;
    .text {
        line-height: 1.5em;
        margin-top: 0px;
        font-weight: normal;
        font-size: 0.9em;
    }
    .message {
        margin-bottom: -15px;
    }
    .config {
        margin-top: 15px;
        padding-left: 10px;
        font-weight: bold;
    }
    .collapsed {
        padding-left: 10px;
    }
    .label {
        display: flex;
        align-items: center;
    }
    .buttonBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .jobBlocks {
    }

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`

interface Props {
    isTeachers: boolean
}
const parseJobs = () => {
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    console.log(postWorkerStatuses())
    if (!!dataWorkerApplication) {
        const [opened, setOpened] = useState(Array(dataWorkerApplication.length).fill(false))

        return (
            <div className="jobBlocks">
                {dataWorkerApplication.map((object, i) => (
                    <div>
                        <div className="config">
                            <div className="label">
                                {object.jobTitle}
                                <Button
                                    icon={opened[i] ? <HiChevronUp /> : <HiChevronDown />}
                                    onClick={() =>
                                        setOpened((prevState) =>
                                            prevState.map((opened, idx) => (idx === i ? !opened : opened)),
                                        )
                                    }
                                    background="transparent"
                                />
                            </div>
                            <div className="text">
                                    Структурное подразделение: {object.subDivision}
                                    <br />
                                    Ставка: {object.rate}
                                    <br />
                                    Вид места работы: {""}
                                    <br />
                                </div>
                        </div>

                        <Collapse isOpened={opened[i]} className="collapseс">
                            <div className="collapsed">
                                
                                <div className="buttonBlock">
                                    <a href="#/hr-applications/dismissal">
                                        <Button
                                            text="Уволиться с этой должности"
                                            background="rgb(236,95,107)"
                                            textColor="#fff"
                                            onClick={() => {
                                                setCurrentIndex(i)
                                            }}
                                            width={'250px'}
                                            minWidth={'150px'}
                                            height="36px"
                                            fixedInMobile
                                        />
                                    </a>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
        )
    } else return null
}
const ExtraHolidayCollBufferPage = () => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const { open } = useModal()
    const [applications, setApplications] = useState<Application[] | null>(null)
    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <ApplicationPageWrapper>
                <FormBlock maxWidth="1500px">
                    <Title size={2} align="left">
                        Заявление о предоставлении дополнительного отпуска по коллективному договору
                    </Title>
                    <Message type="info" title="Информация" icon={<FiInfo />}>
                        Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                        (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В
                        колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда
                        необходимо приехать за готовым документом.
                    </Message>
                    {parseJobs()}
                    <List direction="horizontal" gap={10} scroll={false}>
                        <LocalSearch<Application[], Application[]>
                            whereToSearch={listApplication ?? []}
                            searchEngine={search}
                            setResult={setApplications}
                            placeholder={'Поиск заявлений'}
                        />
                    </List>
                    <Table
                        loading={!listApplication}
                        columns={getHrApplicationsColumns()}
                        data={applications ?? listApplication}
                        maxOnPage={7}
                    />
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default ExtraHolidayCollBufferPage
function getWorkerPosts(): any {
    throw new Error('Function not implemented.')
}

