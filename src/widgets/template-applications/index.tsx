import React from 'react'
import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { Button, FormBlock, Message, Title, Wrapper } from '@ui/atoms'
import Table from '@ui/table'
import { FiInfo, FiPlus } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'

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

const CustomList = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({ isTeachers }: Props) => {
    const {
        data: { listApplication, dataUserApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const { open } = useModal()

    // eslint-disable-next-line no-console
    console.log(listApplication)

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <ApplicationPageWrapper>
                <FormBlock maxWidth="1450px">
                    <Title size={2} align="left">
                        Цифровые сервисы
                    </Title>
                    <Message type="info" title="Информация" icon={<FiInfo />}>
                        Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                        (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В
                        колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда
                        необходимо приехать за готовым документом.
                    </Message>
                    <CustomList>
                        <Button
                            onClick={() =>
                                open(
                                    <CreateApplicationList
                                        isTeachers={isTeachers}
                                        currentFormEducation={dataUserApplication?.educationForm}
                                    />,
                                )
                            }
                            text="Подать заявку"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            width={'150px'}
                            minWidth={'150px'}
                            height="36px"
                            fixedInMobile={false}
                        />
                    </CustomList>
                    <Table
                        loading={!listApplication}
                        columns={getApplicationsColumns()}
                        data={listApplication}
                        maxOnPage={7}
                    />
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default TeachersHrApplicationsPage
