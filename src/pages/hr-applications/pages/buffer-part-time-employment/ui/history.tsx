import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import React, { useState, useEffect } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import styled from 'styled-components'
import getPartTimeEmploymentHistoryColumns from '../../buffer-holiday-transfer/lib/get-holiday-work-history-columns'
import { bufferPartTimeEmploymentModel } from '../model'

const History = () => {
    const [openedHistory, setOpenedHistory] = useState<boolean>(false)
    useEffect(bufferPartTimeEmploymentModel.events.loadBufferPartTimeEmployment, [])
    const { data } = bufferPartTimeEmploymentModel.selectors.useBufferPartTimeEmployment()
    const historyIsEmpty = !!data.every((d) => !d)
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
                История заявлений по трудоустройствоству по совместительству:
                <Button
                    icon={openedHistory ? <HiChevronUp /> : <HiChevronDown />}
                    onClick={() => !historyIsEmpty && setOpenedHistory((prev) => !prev)}
                    background="transparent"
                />
            </BlockHeader>
            {openedHistory && (
                // if (!object.dismissalApplications.length) return null

                <StyledTable
                    columns={getPartTimeEmploymentHistoryColumns()}
                    data={data.map((object) => {
                        return {
                            ...object,
                        }
                    })}
                    maxOnPage={5}
                />
            )}
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
