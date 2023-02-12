import { WorkerApplication } from '@shared/api/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import getExHrApplicationsColumns from '../lib/get-ex-hr-applications-columns'

interface Props {
    historyIsEmpty: boolean
    historyDataWorkerApplication: WorkerApplication[]
}

const History: React.FC<Props> = ({ historyIsEmpty, historyDataWorkerApplication }) => {
    const [openedHistory, setOpenedHistory] = useState<boolean>(false)

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
                История заявлений на выход в выходной день:
                <Button
                    icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => !historyIsEmpty && setOpenedHistory((prev) => !prev)}
                    background="transparent"
                />
            </BlockHeader>
            {openedHistory &&
                historyDataWorkerApplication.map((object, index) => {
                    if (!object.dismissalApplications.length) return null

                    return (
                        <StyledTable
                            key={index}
                            columns={getExHrApplicationsColumns()}
                            data={object.dismissalApplications.map((item) => {
                                return {
                                    ...item,
                                    ...object,
                                    jobDivision: object.jobTitle + ', ' + object.subDivision,
                                }
                            })}
                            maxOnPage={10}
                        />
                    )
                })}
            <Button
                onClick={() => {
                    !historyIsEmpty && setOpenedHistory((prev) => !prev)
                }}
                text={historyIsEmpty ? 'История пуста' : openedHistory ? 'Скрыть' : 'Подробнее'}
                background="transparent"
            />
        </Block>
    )
}

export default History

const BlockHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const StyledTable = styled(Table)`
    width: 100%;
`
