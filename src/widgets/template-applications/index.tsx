import { Application } from '@api/model'
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

const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`

interface Props {
    isTeachers: boolean
}

const TeachersApplicationsPage = ({ isTeachers }: Props) => {
    const { data, error } = applicationsModel.selectors.useApplications()
    const { open } = useModal()
    const [applications, setApplications] = useState<Application[] | null>(null)

    return (
        <Wrapper load={() => applicationsModel.effects.getApplicationsFx()} loading={!data} error={error} data={data}>
            <ApplicationPageWrapper>
                <FormBlock maxWidth="1500px">
                    <Title size={2} align="left">
                        Заявления
                    </Title>
                    <Message type="info" title="Информация" icon={<FiInfo />}>
                        Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                        (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В
                        колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда
                        необходимо приехать за готовым документом.
                    </Message>
                    <List direction="horizontal" gap={10} scroll={false}>
                        <Button
                            onClick={() => open(<CreateApplicationList isTeachers={isTeachers} />)}
                            text="Подать заявку"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            width={'150px'}
                            minWidth={'150px'}
                            height="36px"
                            fixedInMobile
                        />
                        <LocalSearch<Application[], Application[]>
                            whereToSearch={data ?? []}
                            searchEngine={search}
                            setResult={setApplications}
                            placeholder={'Поиск заявлений'}
                        />
                    </List>
                    <Table
                        loading={!data}
                        columns={getApplicationsColumns()}
                        data={applications ?? data}
                        maxOnPage={7}
                    />
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default TeachersApplicationsPage
