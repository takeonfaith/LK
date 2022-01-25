import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import { Divider, SubmitButton, Title } from '@ui/atoms'
import { InputArea } from '@ui/organisms'
import { IInputArea } from '@ui/organisms/input-area'
import transformSex from '@utils/transform-sex'
import React, { useState } from 'react'
import styled from 'styled-components'

const DataVerificationPageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    .data-verification-block {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 20px;
        border-radius: var(--brLight);
        background: var(--schedule);
        box-shadow: var(--schedule-shadow);
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 1000px) {
        padding: 0;
        .data-verification-block {
            box-shadow: none;
        }
    }
`

const DataVerificationPage = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user?.id) return <></>

    const [personalData, setPersonalData] = useState([
        {
            title: 'ФИО',
            value: createFullName({ name: user?.name, surname: user?.surname, patronymic: user?.patronymic }),
        },
        {
            title: 'Пол',
            value: transformSex(user.sex),
        },
        {
            title: 'Должность(по основному месту работы)',
            value: '',
        },
    ])
    const [personalConfirmed, setPersonalConfirmed] = useState(false)

    const [education, setEducation] = useState<IInputArea[]>([
        { title: 'Наименование учебного заведения', value: '' },
        {
            title: 'Уровень образования',
            value: { id: 'special', title: 'Специалитет' },
            type: 'select',
            items: [
                { id: 'special', title: 'Специалитет' },
                { id: 'asp', title: 'Аспирантура' },
                { id: 'maga', title: 'Магистратура' },
                { id: 'bach', title: 'Бакалавр' },
            ],
        },
        {
            title: 'Год окончания',
            value: { id: 'year', title: '2001' },
            type: 'select',
            items: Array(50)
                .fill(0)
                .map((_, i) => {
                    return { id: i + 1970, title: `${i + 1970}` }
                }),
        },
        { title: 'Направление подготовки', value: '' },
        { title: 'Серия, номер документа об образовании', value: '' },
    ])
    const [educationConfirmed, setEducationConfirmed] = useState(false)

    const [familyStatus, setFamilyStatus] = useState([{ title: '', value: 'холост/незамужем' }])
    const [familyStatusConfirmed, setFamilyStatusConfirmed] = useState(false)

    const [family, setFamily] = useState<IInputArea[]>([
        {
            title: 'Степень родства',
            value: { id: 'mother', title: 'Мать' },
            type: 'select',
            items: [
                { id: 'mother', title: 'Мать' },
                { id: 'father', title: 'Отец' },
                { id: 'brother', title: 'Брат' },
                { id: 'sister', title: 'Сестра' },
                { id: 'grandmother', title: 'Бабушка' },
                { id: 'grandfather', title: 'Дедушка' },
            ],
        },
        {
            title: 'Имя',
            value: '',
        },
        {
            title: 'Год рождения',
            value: { id: 'year', title: '2001' },
            type: 'select',
            items: Array(50)
                .fill(0)
                .map((_, i) => {
                    return { id: i + 1970, title: `${i + 1970}` }
                }),
        },
    ])
    const [familyConfirmed, setFamilyConfirmed] = useState(false)

    const [passport, setPassport] = useState([
        { title: 'Серия', value: '' },
        { title: 'Номер', value: '' },
        { title: 'Кем выдан', value: '' },
    ])
    const [passportConfirmed, setPassportConfirmed] = useState(false)

    const [driveLicense, setDriveLicense] = useState([
        { title: 'Номер', value: '' },
        { title: 'Категория', value: '' },
        { title: 'Дата выдачи', value: '' },
    ])
    const [driveConfirmed, setDriveConfirmed] = useState(false)

    const [location, setLocation] = useState([
        { title: 'Адрес регистрации', value: '' },
        { title: 'Дата регистрации', value: '' },
        { title: 'Адрес проживания', value: '' },
        { title: 'Дата начала проживания', value: '' },
    ])
    const [locationConfirmed, setLocationConfirmed] = useState(false)

    const [army, setArmy] = useState([{ title: 'Военный комиссариат по месту воинского учета', value: '' }])
    const [armyConfirmed, setArmyConfirmed] = useState(false)

    return (
        <DataVerificationPageWrapper>
            <div className="data-verification-block">
                <Title size={3} align="left" bottomGap>
                    Подтвердите корректность указанных данных
                </Title>
                <InputArea
                    confirmed={personalConfirmed}
                    setConfirmed={setPersonalConfirmed}
                    title={'Личные данные'}
                    data={personalData}
                    setData={setPersonalData}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={educationConfirmed}
                    setConfirmed={setEducationConfirmed}
                    title={'Образование'}
                    data={education}
                    setData={setEducation}
                    loadDoc
                />
                {/* Состав семьи */}
                <Divider />
                <InputArea
                    confirmed={familyStatusConfirmed}
                    setConfirmed={setFamilyStatusConfirmed}
                    title={'Семейное положение'}
                    data={familyStatus}
                    setData={setFamilyStatus}
                />
                <Divider />
                <InputArea
                    confirmed={familyConfirmed}
                    setConfirmed={setFamilyConfirmed}
                    title={'Семья'}
                    data={family}
                    setData={setFamily}
                    addNew
                />
                <Divider />
                <InputArea
                    confirmed={passportConfirmed}
                    setConfirmed={setPassportConfirmed}
                    title={'Паспорт'}
                    data={passport}
                    setData={setPassport}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={driveConfirmed}
                    setConfirmed={setDriveConfirmed}
                    title={'Водительское удостоверение'}
                    data={driveLicense}
                    setData={setDriveLicense}
                    optional
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={locationConfirmed}
                    setConfirmed={setLocationConfirmed}
                    title={'Проживание'}
                    data={location}
                    setData={setLocation}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={armyConfirmed}
                    setConfirmed={setArmyConfirmed}
                    title={'Военская служба'}
                    data={army}
                    setData={setArmy}
                />

                <SubmitButton
                    text={'Отправить'}
                    action={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    isLoading={false}
                    completed={false}
                    setCompleted={function (completed: boolean): void {
                        throw new Error('Function not implemented.')
                    }}
                    isActive={
                        armyConfirmed &&
                        driveConfirmed &&
                        personalConfirmed &&
                        locationConfirmed &&
                        passportConfirmed &&
                        educationConfirmed
                    }
                    popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были подтверждены"
                />
            </div>
        </DataVerificationPageWrapper>
    )
}

export default DataVerificationPage
