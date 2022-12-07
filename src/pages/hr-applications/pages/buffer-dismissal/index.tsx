import React from 'react'
import { applicationsModel } from '@entities/applications'
import { setCurrentIndex } from '@pages/hr-applications/lib/currentIndex'
import { Button, HrBlock, Message, Title, Wrapper } from '@ui/atoms'
import TableHr from '@ui/table-hr'
import { useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import getHrApplicationsColumns from './lib/get-hr-applications-columns'
import { Collapse } from 'react-collapse'

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
        margin-top: 15px;
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
        font-size: 20px;
        font-weight: bold;
    }
    .buttonBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .block {
        border-radius: var(--brSemi);
        background: var(--schedule);
        box-shadow: var(--schedule-shadow);
        height: fit-content;
        padding: 20px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin-bottom: 30px;
    }
    .firstBlock {
        padding-bottom: 40px;
        margin-bottom: 10px;
    }

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
    .order {
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .moreButton {
        margin: -10px;
        margin-top: -30px;
    }
    .historyTable {
        width: 100%;
        font-size: 16px;
    }
    .historyTable tr {
        min-height: 30px;
    }
`

const parseJobs = () => {
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    if (!!dataWorkerApplication) {
        const [opened, setOpened] = useState(Array(dataWorkerApplication.length).fill(false))
        const [openedHistory, setOpenedHistory] = useState(false)
        const [openedHisJob, setOpenedHisJob] = useState(Array(dataWorkerApplication.length).fill(false))
        let openedButton: boolean

        return (
            <div className="jobBlocks">
                {dataWorkerApplication.map((object, i) => {
                    if (object.isDismissal) return null
                    else
                        return (
                            <div className="block">
                                <div className="label">
                                    {object.jobTitle}

                                    <Button
                                        icon={opened[i] ? <HiChevronUp /> : <HiChevronDown />}
                                        onClick={() => {
                                            setOpened((prevState) =>
                                                prevState.map((opened, idx) => (idx === i ? !opened : opened)),
                                            )
                                            setOpenedHistory(false)
                                        }}
                                        background="transparent"
                                    />
                                </div>
                                <div className="text">
                                    Структурное подразделение: {object.subDivision}
                                    <br />
                                    Ставка: {object.rate}
                                    <br />
                                    Вид места работы: добавим
                                    <br />
                                </div>
                                {
                                    (openedButton =
                                        object?.dismissalApplications[object.dismissalApplications.length - 1]
                                            ?.status == 'Не согласовано' ||
                                        object?.dismissalApplications[object.dismissalApplications.length - 1]
                                            ?.dismissalOrder?.orderStatus == 'Не согласован' ||
                                        object?.dismissalApplications.length == 0
                                            ? true
                                            : false)
                                }

                                <Collapse isOpened={opened[i]} className="collapseс">
                                    <div className="collapsed">
                                        <div className="buttonBlock">
                                            <Collapse isOpened={openedButton}>
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
                                            </Collapse>
                                        </div>
                                        <Collapse isOpened={object.dismissalApplications.length == 0 ? false : true}>
                                            <div>
                                                <div className="text">
                                                    <TableHr
                                                        loading={!object.dismissalApplications}
                                                        columns={getHrApplicationsColumns()}
                                                        data={object.dismissalApplications.map(
                                                            ({
                                                                status,
                                                                signDate,
                                                                dismissalOrder: {
                                                                    orderNumber,
                                                                    orderDate,
                                                                    registrationStatus,
                                                                    orderStatus,
                                                                },
                                                            }) => ({
                                                                status,
                                                                signDate,
                                                                orderNumber,
                                                                orderDate,
                                                                orderStatus,
                                                                registrationStatus,
                                                            }),
                                                        )}
                                                        maxOnPage={10}
                                                    />
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                </Collapse>
                                <div className="moreButton">
                                    <Button
                                        onClick={() => {
                                            setOpened((prevState) =>
                                                prevState.map((opened, idx) => (idx === i ? !opened : opened)),
                                            )
                                            setOpenedHistory(false)
                                        }}
                                        text={opened[i] ? 'Скрыть' : 'Подробнее'}
                                        background="transparent"
                                    />
                                </div>
                            </div>
                        )
                })}
                <div className="jobBlocks block">
                    <div className="label">
                        История должностей:
                        <Button
                            icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                            onClick={() => setOpenedHistory(!openedHistory)}
                            background="transparent"
                        />
                    </div>

                    <Collapse isOpened={openedHistory} className="collapseс">
                        {dataWorkerApplication.map((object, i) => {
                            if (!object.isDismissal) return null
                            else
                                return (
                                    <div>
                                        <div className="config">
                                            <div className="label">
                                                {object.jobTitle}
                                                <Button
                                                    icon={openedHisJob[i] ? <HiChevronUp /> : <HiChevronDown />}
                                                    onClick={() =>
                                                        setOpenedHisJob((prevState) =>
                                                            prevState.map((openedHisJob, idx) =>
                                                                idx === i ? !openedHisJob : openedHisJob,
                                                            ),
                                                        )
                                                    }
                                                    background="transparent"
                                                />
                                            </div>
                                        </div>

                                        <Collapse isOpened={openedHisJob[i]} className="collapseс">
                                            <div className="collapsed">
                                                <div className="text">
                                                    Структурное подразделение: {object.subDivision}
                                                    <br />
                                                    Ставка: {object.rate}
                                                    <br />
                                                    Вид места работы: добавим
                                                    <br />
                                                </div>
                                                <Collapse
                                                    isOpened={object.dismissalApplications.length == 0 ? false : true}
                                                >
                                                    <div className="text">
                                                        <TableHr
                                                            loading={!dataWorkerApplication}
                                                            columns={getHrApplicationsColumns()}
                                                            data={object.dismissalApplications.map(
                                                                ({
                                                                    status,
                                                                    signDate,
                                                                    dismissalOrder: {
                                                                        orderNumber,
                                                                        orderDate,
                                                                        registrationStatus,
                                                                    },
                                                                }) => ({
                                                                    status,
                                                                    signDate,
                                                                    orderNumber,
                                                                    orderDate,
                                                                    registrationStatus,
                                                                }),
                                                            )}
                                                            maxOnPage={10}
                                                        />
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </Collapse>
                                    </div>
                                )
                        })}
                    </Collapse>
                </div>
            </div>
        )
    } else return null
}
const DismissalBufferPage = () => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    // const { open } = useModal()
    // const [applications, setApplications] = useState<Application[] | null>(null)
    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <ApplicationPageWrapper>
                <HrBlock maxWidth="1500px">
                    <div className="block firstBlock">
                        <Title size={2} align="left">
                            Заявление на увольнение
                        </Title>
                        <Message type="info" title="Информация" icon={<FiInfo />}>
                            Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                            (информация о степени готовности) заказанных справок меняется согласно действиям оператора.
                            В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес,
                            куда необходимо приехать за готовым документом.
                        </Message>
                    </div>
                    {parseJobs()}
                </HrBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default DismissalBufferPage
