import { Application } from '@api/model'
import { applicationsModel } from '@entities/applications'
import search from '@features/applications/lib/search'
import { ApplicationList } from '@features/applications/ui'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import Select, { SelectPage } from '@features/select'
import { Button, FormBlock, Message, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useState } from 'react'
import { FiCheck, FiClock, FiInfo, FiPlus, FiX } from 'react-icons/fi'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi'
import styled from 'styled-components'
import { useModal } from 'widgets'

const ApplicationPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .search-and-add {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 1000px) {
        align-items: flex-start;
        overflow-y: auto;
        height: 100%;
    }
`

const ApplicationsPage = () => {
    const { data, error } = applicationsModel.selectors.useApplications()
    const { open } = useModal()
    const [selectedFilter, setSelectedFilter] = useState<SelectPage | null>(null)
    const [applications, setApplications] = useState<Application[] | null>(null)
    const { width } = useResize()

    useEffect(() => {
        setTimeout(() => {
            setApplications([
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Куку',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Принято в работу',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Отклонено',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Принято в работу',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Отклонено',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Отклонено',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
                {
                    notes: '',
                    regDate: '31.01.2021',
                    regNumber: '3214141da',
                    requestBody: 'fsfdafsdfdsafsd',
                    requestTitle: 'Запрос о чем-то',
                    status: 'Готово',
                    statusDate: '31.01.2021',
                    structuralSubdivision:
                        'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
                },
            ])
        }, 1000)
    }, [data])

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!applications}
            error={error}
            data={[]}
        >
            <ApplicationPageWrapper>
                <FormBlock maxWidth="1500px">
                    <Message type="info" title="Информация" icon={<FiInfo />}>
                        Данный сервис позволяет заказать необходимую справку, подать заявление, запрос. Статус
                        (информация о степени готовности) заказанных справок меняется согласно действиям оператора. В
                        колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда
                        необходимо приехать за готовым документом.
                    </Message>
                    <div className="search-and-add">
                        <Button
                            onClick={() => open(<CreateApplicationList />)}
                            text="Подать заявку"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            width={'150px'}
                            minWidth={'150px'}
                            fixedInMobile
                        />
                        <LocalSearch<Application[], Application[]>
                            whereToSearch={applications ?? []}
                            searchEngine={search}
                            setResult={setApplications}
                            placeholder={'Поиск заявлений'}
                        />
                        <Select
                            width="200px"
                            placeholder="Фильтры"
                            items={[
                                {
                                    id: 'date',
                                    title: 'По дате',
                                    children: [
                                        { id: 'asc', title: 'Сначала новые', icon: <HiSortAscending /> },
                                        { id: 'desc', title: 'Сначала старые', icon: <HiSortDescending /> },
                                    ],
                                },
                                {
                                    id: 1,
                                    title: 'По статусу',
                                    children: [
                                        { id: 'ready', title: 'Готово', icon: <FiCheck /> },
                                        { id: 'pending', title: 'Принято в работу', icon: <FiClock /> },
                                        { id: 'rejected', title: 'Отклонено', icon: <FiX /> },
                                    ],
                                },
                            ]}
                            setSelected={setSelectedFilter}
                            selected={selectedFilter}
                        />
                    </div>
                    <ApplicationList loading={!applications} list={applications} />
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default ApplicationsPage
