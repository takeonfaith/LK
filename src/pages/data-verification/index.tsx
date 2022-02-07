import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import { Divider, SubmitButton, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import { InputArea } from '@ui/organisms'
import { IComplexInputArea, IInputArea } from '@ui/organisms/input-area'
import transformSex from '@utils/transform-sex'
import React, { useEffect, useState } from 'react'
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

    const [personalData, setPersonalData] = useState<IInputArea[]>([
        {
            id: 0,
            title: 'ФИО',
            value: createFullName({ name: user?.name, surname: user?.surname, patronymic: user?.patronymic }),
        },
        {
            id: 1,
            title: 'Пол',
            value: transformSex(user.sex),
        },
        {
            id: 2,
            title: 'Дата рождения',
            value: '1990-01-20',
            type: 'date',
        },
        {
            id: 3,
            title: 'Место рождения',
            value: 'Москва',
        },
    ])
    const [personalConfirmed, setPersonalConfirmed] = useState(false)

    const [education, setEducation] = useState<IInputArea[]>([
        { id: 0, title: 'Наименование учебного заведения', value: '' },
        {
            id: 1,
            title: 'Уровень образования',
            value: { id: 'special', title: 'Специалитет' },
            type: 'select',
            width: '100%',
            items: [
                { id: 'special', title: 'Специалитет' },
                { id: 'asp', title: 'Аспирантура' },
                { id: 'maga', title: 'Магистратура' },
                { id: 'bach', title: 'Бакалавр' },
            ],
        },
        {
            id: 2,
            title: 'Год окончания',
            value: { id: 'year', title: '2001' },
            type: 'select',
            width: '100%',
            items: Array(50)
                .fill(0)
                .map((_, i) => {
                    return { id: i + 1970, title: `${i + 1970}` }
                }),
        },
        { id: 3, title: 'Направление подготовки', value: '' },
    ])
    const [educationConfirmed, setEducationConfirmed] = useState(false)

    const [language, setLanguage] = useState<IComplexInputArea>([
        [
            {
                id: 0,
                title: 'Язык',
                value: 'Английский',
            },
            {
                id: 1,
                title: 'Уровень владения',
                value: { id: 'a', title: 'Читаю и перевожу со словарем' },
                type: 'select',
                items: [
                    { id: 'a', title: 'Читаю и перевожу со словарем' },
                    { id: 'b', title: 'Читаю и могу объясняться' },
                    { id: 'с', title: 'Владею свободно' },
                ],
                width: '100%',
            },
        ],
    ])
    const [languageConfirmed, setLanguageConfirmed] = useState(false)

    const [familyStatus, setFamilyStatus] = useState<IInputArea[]>([
        {
            id: 0,
            title: '',
            value: { id: 'married', title: 'Замужем/Женат' },
            type: 'select',
            items: [
                { id: 'single', title: 'Холост/Не замужем' },
                { id: 'married', title: 'Замужем/Женат' },
                { id: 'divorced', title: 'Разведен/Разведена' },
                { id: 'widow', title: 'Вдовец/Вдова' },
            ],
            width: '100%',
        },
    ])
    const [familyStatusConfirmed, setFamilyStatusConfirmed] = useState(false)

    const [family, setFamily] = useState<IComplexInputArea>([
        [
            {
                id: 0,
                title: 'Степень родства',
                value: { id: 'mother', title: 'Мать' },
                type: 'select',
                items: [
                    { id: 'mother', title: 'Мать' },
                    { id: 'father', title: 'Отец' },
                    { id: 'wife', title: 'Жена' },
                    { id: 'husband', title: 'Муж' },
                    { id: 'sister', title: 'Сестра' },
                    { id: 'brother', title: 'Брат' },
                    { id: 'son', title: 'Сын' },
                    { id: 'daughter', title: 'Дочь' },
                ],
            },
            {
                id: 1,
                title: 'ФИО',
                value: '',
            },
            {
                id: 2,
                title: 'Дата рождения',
                value: '1990-01-21',
                type: 'date',
            },
        ],
    ])
    const [familyConfirmed, setFamilyConfirmed] = useState(false)

    const [passport, setPassport] = useState<IInputArea[]>([
        { id: 0, title: 'Серия', value: '' },
        { id: 1, title: 'Номер', value: '' },
        { id: 2, title: 'Кем выдан', value: '' },
    ])
    const [passportConfirmed, setPassportConfirmed] = useState(false)

    const [driveLicense, setDriveLicense] = useState<IInputArea[]>([
        { id: 0, title: 'Номер', value: '' },
        {
            id: 1,
            title: 'Категория',
            value: '',
        },
        { id: 2, title: 'Дата выдачи', value: '' },
    ])
    const [driveConfirmed, setDriveConfirmed] = useState(false)
    const [noDriveLicense, setNoDriveLicense] = useState(false)

    const [registration, setRegistration] = useState<IInputArea[]>([
        { id: 0, title: 'Адрес регистрации', value: '' },
        { id: 1, title: 'Дата регистрации', value: '' },
    ])
    const [registrationConfirmed, setRegistrationConfirmed] = useState(false)
    const [noRegistration, setNoRegistration] = useState(false)

    const [location, setLocation] = useState<IInputArea[]>([
        { id: 0, title: 'Адрес проживания', value: '' },
        { id: 1, title: 'Дата начала проживания', value: '' },
    ])
    const [locationConfirmed, setLocationConfirmed] = useState(false)

    const [contactInfo, setContactInfo] = useState<IInputArea[]>([
        { id: 0, title: 'Мобильный телефон (личный)', type: 'tel', value: '+79423131231' },
        { id: 1, title: 'Мобильный телефон (рабочий)', type: 'tel', value: '+79423131231' },
        { id: 2, title: 'Служебный телефон (прямой/дополнительный)', type: 'tel', value: '+79423131231' },
        { id: 3, title: 'Личный e-mail', type: 'email', value: 'temp@gmail.com' },
        { id: 4, title: 'Рабочий e-mail', type: 'email', value: 'temp@gmail.com' },
    ])
    const [contactConfirmed, setContactConfirmed] = useState(false)

    const [army, setArmy] = useState<IInputArea[]>([])
    const [armyConfirmed, setArmyConfirmed] = useState(false)
    const [noArmyDocument, setNoArmyDocument] = useState(false)

    const [confirmAll, setConfirmAll] = useState(false)

    useEffect(() => {
        window.onbeforeunload = function () {
            window.alert('Точно?')
        }
    }, [])

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
                    hint={'Текст подсказки'}
                    data={personalData}
                    setData={setPersonalData}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={familyStatusConfirmed}
                    setConfirmed={setFamilyStatusConfirmed}
                    title={'Семейное положение'}
                    hint={'Текст подсказки'}
                    data={familyStatus}
                    setData={setFamilyStatus}
                />
                <Divider />
                <InputArea
                    confirmed={familyConfirmed}
                    setConfirmed={setFamilyConfirmed}
                    title={'Состав семьи'}
                    hint={'Текст подсказки'}
                    data={family}
                    setData={setFamily}
                    addNew
                />
                <Divider />
                <InputArea
                    confirmed={educationConfirmed}
                    setConfirmed={setEducationConfirmed}
                    title={'Образование'}
                    hint={'Текст подсказки'}
                    data={education}
                    setData={setEducation}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={languageConfirmed}
                    setConfirmed={setLanguageConfirmed}
                    title={'Знание иностранных языков'}
                    hint={'Текст подсказки'}
                    data={language}
                    setData={setLanguage}
                    addNew
                />
                <Divider />
                <InputArea
                    confirmed={passportConfirmed}
                    setConfirmed={setPassportConfirmed}
                    title={'Паспортные данные'}
                    hint={'Текст подсказки'}
                    data={passport}
                    setData={setPassport}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={driveConfirmed}
                    setConfirmed={setDriveConfirmed}
                    title={'Водительское удостоверение'}
                    hint={'Текст подсказки'}
                    data={driveLicense}
                    setData={setDriveLicense}
                    optionalCheckbox={{
                        title: 'Водительское удостоверение отсутствует',
                        value: noDriveLicense,
                        setValue: setNoDriveLicense,
                    }}
                    loadDoc
                />
                <Divider />
                <InputArea
                    confirmed={registrationConfirmed}
                    setConfirmed={setRegistrationConfirmed}
                    title={'Регистрация'}
                    hint={'Текст подсказки'}
                    data={registration}
                    setData={setRegistration}
                    loadDoc
                    optionalCheckbox={{
                        title: 'Регистрация отсутствует',
                        value: noRegistration,
                        setValue: setNoRegistration,
                        fileNeeded: true,
                    }}
                />
                <Divider />
                <InputArea
                    confirmed={locationConfirmed}
                    setConfirmed={setLocationConfirmed}
                    title={'Проживание'}
                    hint={'Текст подсказки'}
                    data={location}
                    setData={setLocation}
                />
                <Divider />
                <InputArea
                    confirmed={contactConfirmed}
                    setConfirmed={setContactConfirmed}
                    title={'Контактные данные'}
                    hint={'Текст подсказки'}
                    data={contactInfo}
                    setData={setContactInfo}
                />
                <Divider />
                <InputArea
                    confirmed={armyConfirmed}
                    setConfirmed={setArmyConfirmed}
                    title={'Воинская служба'}
                    hint={'Текст подсказки'}
                    data={army}
                    setData={setArmy}
                    loadDoc
                    optionalCheckbox={{
                        title: 'Документ о воинской службе отсутствует',
                        value: noArmyDocument,
                        setValue: (value) => setNoArmyDocument(value),
                    }}
                />

                <Checkbox
                    checked={confirmAll}
                    setChecked={setConfirmAll}
                    text={'Я подтверждаю корректность указанных данных'}
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
                        educationConfirmed &&
                        confirmAll
                    }
                    popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были подтверждены"
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </div>
        </DataVerificationPageWrapper>
    )
}

export default DataVerificationPage
