import { HrBlock, Message, Title, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { FiInfo } from 'react-icons/fi'
import styled from 'styled-components'
import { bufferHolidayPlanningModel } from './model'
import Content from './ui/content'

const HolidayPlanningBufferPage = () => {
    const { data, loading } = bufferHolidayPlanningModel.selectors.useBufferHolidayPlanning()

    useEffect(() => {
        bufferHolidayPlanningModel.events.loadBufferHolidayPlanning()
    }, [])

    return (
        <Wrapper
            load={bufferHolidayPlanningModel.events.loadBufferHolidayPlanning}
            loading={loading}
            error={null}
            data={data}
        >
            <ApplicationPageWrapper>
                <HrBlock maxWidth="1500px">
                    <HrHeader>
                        <Title size={2} align="left">
                            Заявление на отпуск
                        </Title>
                        <Message type="info" title="Информация" icon={<FiInfo />}>
                            Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                            (информация о степени готовности) заказанных справок меняется согласно действиям оператора.
                            В колонке «Подразделение, адрес» указывается название подразделения и адрес, куда необходимо
                            приехать за готовым документом.
                        </Message>
                        <p>
                            График отпусков вы можете посмотреть по{' '}
                            <a target="_blank" href="#/vacation" rel="noreferrer">
                                ссылке
                            </a>
                            .{' '}
                        </p>
                    </HrHeader>
                    <Content />
                </HrBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default HolidayPlanningBufferPage

const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    color: var(--text);
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`

const HrHeader = styled.div`
    // block
    border-radius: var(--brSemi);
    background: var(--block);
    box-shadow: var(--block-shadow);
    height: fit-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-bottom: 30px;

    padding-bottom: 40px;
    margin-bottom: 10px;
`
