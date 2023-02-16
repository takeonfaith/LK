import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import getExHrApplicationsColumns from '../lib/get-ex-hr-applications-columns'
import { bufferHolidayPlanningModel } from '../model'

const History = () => {
    const [openedHistory, setOpenedHistory] = useState<boolean>(false)

    const { data } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()
    const historyIsEmpty = !!data.every((d) => !d.employeeVacations)

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
                История заявлений отпуск:
                <Button
                    icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => !historyIsEmpty && setOpenedHistory((prev) => !prev)}
                    background="transparent"
                />
            </BlockHeader>
            {openedHistory &&
                data.map((object, index) => {
                    // if (!object.dismissalApplications.length) return null

                    return <StyledTable key={index} columns={getExHrApplicationsColumns()} data={[]} maxOnPage={10} />
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
