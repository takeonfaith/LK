import { Application } from '@api/model'
import { applicationsModel } from '@entities/applications'
import search from '@features/applications/lib/search'
import { ApplicationList } from '@features/applications/ui'
import CreateApplicationList from '@features/applications/ui/molecules/create-application-list'
import { Button, FormBlock, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
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
        .search-and-add {
            padding: 13px;
        }
    }
`

const ApplicationsPage = () => {
    const { data, error } = applicationsModel.selectors.useApplications()
    const { open } = useModal()
    const [applications, setApplications] = useState<Application[] | null>([
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

    console.log(applications)

    // useEffect(() => {
    //     if (data) {
    //         setApplications(data)
    //     }
    // }, [data])

    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!applications}
            error={error}
            data={[]}
        >
            <ApplicationPageWrapper>
                <FormBlock maxWidth="1500px">
                    <div className="search-and-add">
                        <Button
                            onClick={() => open(<CreateApplicationList />)}
                            text="Подать заявку"
                            background="var(--reallyBlue)"
                            textColor="#fff"
                            icon={<FiPlus />}
                            width={'200px'}
                            shrinkTextInMobile
                        />
                        <LocalSearch<Application[], Application[]>
                            whereToSearch={applications ?? []}
                            searchEngine={search}
                            setResult={setApplications}
                            placeholder={'Поиск заявлений'}
                        />
                    </div>
                    <ApplicationList loading={!applications} list={applications} />
                </FormBlock>
            </ApplicationPageWrapper>
        </Wrapper>
    )
}

export default ApplicationsPage
