import { applicationsModel } from '@entities/applications'
import getApplicationsColumns from '@features/applications/lib/get-applications-columns'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import PageBlock from '@shared/ui/page-block'
import { Button, Message, Wrapper } from '@ui/atoms'
import Table from '@ui/table'
import React from 'react'
import { FiInfo, FiPlus } from 'react-icons/fi'
import { useModal } from 'widgets'

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({ isTeachers }: Props) => {
    const {
        data: { listApplication, dataUserApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const { open } = useModal()

    const handleOpenModal = () => {
        open(
            <CreateApplicationList isTeachers={isTeachers} currentFormEducation={dataUserApplication?.educationForm} />,
            'Создать заявку',
        )
    }

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <PageBlock
                topRightCornerElement={
                    <Button
                        onClick={handleOpenModal}
                        text="Подать заявку"
                        background="var(--reallyBlue)"
                        textColor="#fff"
                        icon={<FiPlus />}
                        minWidth={'35px'}
                        height="36px"
                        shrinkTextInMobile
                    />
                }
            >
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус (информация о
                    степени готовности) заказанных справок меняется согласно действиям оператора. В колонке «Структурное
                    подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за
                    готовым документом.
                </Message>

                <Table
                    loading={!listApplication}
                    columns={getApplicationsColumns()}
                    data={listApplication}
                    maxOnPage={7}
                />
            </PageBlock>
        </Wrapper>
    )
}

export default TeachersHrApplicationsPage
