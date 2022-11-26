import { Application, WorkerApplication } from '@api/model'
import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import search from '@features/applications/lib/search'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { Button, FormBlock, Message, Title, Wrapper, HrBlock } from '@ui/atoms'
import List from '@ui/list'
import { LocalSearch } from '@ui/molecules'
import TableHr from '@ui/table-hr'
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
const dataForTable = [
    {
        title: '7d5eda96-6d83-11ed-90f8-d00d1e7ca9da',
        status: 'На согласовании',
        signDate: '0001-01-01T00:00:00',
        employeeSigningStatus: '',
        orderNumber: '1',
        orderDate: '0001-01-01T00:00:00',
        statusOrder: 'Согласовано',
        file: '',
        registrationStatus: 'На региcтрации',
    },
    {
        title: '2',
        status: 'На согласовании',
        signDate: '0001-01-01T00:00:00',
        employeeSigningStatus: '',
        orderNumber: '2',
        orderDate: '0001-01-01T00:00:00',
        statusOrder: 'Согласовано',
        file: '',
        registrationStatus: 'На региcтрации',
    },
]
interface Props {
    isTeachers: boolean
}
const parseJobs = () => {
    const {
        data: { dataWorkerApplication },
    } = applicationsModel.selectors.useApplications()
    console.log(dataWorkerApplication)
    if (!!dataWorkerApplication) {
        const [opened, setOpened] = useState(Array(dataWorkerApplication.length).fill(false))
        const [openedHistory, setOpenedHistory] = useState(false)
        const [openedHisJob, setOpenedHisJob] = useState(Array(dataWorkerApplication.length).fill(false))

        return (
            <div className="jobBlocks">
                {dataWorkerApplication.map((object, i) => {
                    if (!object.isDismissal) return null
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

                                        <div>
                                            <div className="text">
                                                <TableHr
                                                    loading={!dataWorkerApplication}
                                                    columns={getHrApplicationsColumns()}
                                                    data={object.dismissalApplications}
                                                    maxOnPage={10}
                                                />
                                                {console.log(object.dismissalApplications.flat())}
                                                
                                                {object.dismissalApplications.map((object2, i2) => {
                                                    if (!object2.display) return null
                                                    else
                                                        return (
                                                            <div>
                                                                <div>Заявление на увольнение</div>
                                                                {object2.displayDate ? (
                                                                    <div>Дата заявления: {object2.displayDate}</div>
                                                                ) : (
                                                                    ''
                                                                )}
                                                                {object2.status ? (
                                                                    <div>Статус: {object2.status}</div>
                                                                ) : (
                                                                    ''
                                                                )}
                                                                <div>Дата подписи: {object2.signDate}</div>

                                                                <div className="order">
                                                                    {object2.dismissalOrder.display ? (
                                                                        <div>
                                                                            <div>
                                                                                Номер приказа:{' '}
                                                                                {object2.dismissalOrder.orderNumber}
                                                                            </div>
                                                                            {object2.dismissalOrder.displayDate ? (
                                                                                <div>
                                                                                    Дата приказа:{' '}
                                                                                    {object2.dismissalOrder.orderDate}
                                                                                </div>
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                            {object2.dismissalOrder.status ? (
                                                                                <div>
                                                                                    Статус приказа:{' '}
                                                                                    {object2.dismissalOrder.status}
                                                                                </div>
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            Статус приказа:{' '}
                                                                            {object2.dismissalOrder.registrationStatus}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                })}
                                            </div>
                                        </div>
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
                                                    <br />
                                                    <table className="historyTable">
                                                        <tr>
                                                            <td>Название</td>
                                                            <td>Статус заявления</td>
                                                            <td>Дата подписи</td>
                                                            <td>Номер приказа</td>
                                                            <td>Дата приказа</td>
                                                            <td>Статус приказа</td>
                                                        </tr>
                                                        {object.dismissalApplications.map((object2, i2) => {
                                                            if (!object2.display) return null
                                                            else
                                                                return (
                                                                    <tr>
                                                                        <td>Заявление на увольнение</td>
                                                                        <td>
                                                                            {object2.displayDate ? (
                                                                                <div>{object2.displayDate}</div>
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                        </td>
                                                                        <td>
                                                                            {object2.status ? (
                                                                                <div>{object2.status}</div>
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                        </td>
                                                                        <td>{object2.signDate}</td>
                                                                        <td>
                                                                            {object2.dismissalOrder.orderNumber
                                                                                ? object2.dismissalOrder.orderNumber
                                                                                : ''}
                                                                        </td>
                                                                        <td>
                                                                            {object2.dismissalOrder.displayDate
                                                                                ? object2.dismissalOrder.displayDate
                                                                                : ''}
                                                                        </td>
                                                                        <td>
                                                                            {object2.dismissalOrder.status
                                                                                ? object2.dismissalOrder.status
                                                                                : ''}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                        })}
                                                    </table>
                                                </div>
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
function getWorkerPosts(): any {
    throw new Error('Function not implemented.')
}
