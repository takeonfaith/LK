import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import { Divider, SubmitButton, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area'
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

    const [personalData, setPersonalData] = useState<IInputArea>({
        title: 'Личные данные',
        hint: 'Текст подсказки',
        data: [
            {
                title: 'ФИО',
                value: createFullName({ name: user?.name, surname: user?.surname, patronymic: user?.patronymic }),
            },
            {
                title: 'Пол',
                value: transformSex(user.sex),
            },
            {
                title: 'Дата рождения',
                value: '1990-01-20',
                type: 'date',
            },
            {
                title: 'Место рождения',
                value: 'Москва',
            },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [familyStatus, setFamilyStatus] = useState<IInputArea>({
        title: 'Семейное положение',
        hint: 'Текст подсказки',
        data: [
            {
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
        ],
        confirmed: false,
    })
    const [family, setFamily] = useState<IInputArea>({
        title: 'Состав семьи',
        hint: 'Текст подсказки',
        data: [
            [
                {
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
                    title: 'ФИО',
                    value: '',
                    required: true,
                },
                {
                    title: 'Дата рождения',
                    value: '1990-01-21',
                    type: 'date',
                    required: true,
                },
            ],
        ],
        default: [
            [
                {
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
                    title: 'ФИО',
                    value: '',
                    required: true,
                },
                {
                    title: 'Дата рождения',
                    value: '1990-01-21',
                    type: 'date',
                    required: true,
                },
            ],
        ],
        addNew: true,
        confirmed: false,
    })

    const [education, setEducation] = useState<IInputArea>({
        title: 'Образование',
        hint: 'Текст подсказки',
        data: [
            { title: 'Наименование учебного заведения', value: '', required: true },
            {
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
            { title: 'Направление подготовки', value: '', required: true },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [language, setLanguage] = useState<IInputArea>({
        title: 'Знание иностранных языков',
        hint: 'Текст подсказки',
        data: [
            [
                {
                    title: 'Язык',
                    value: 'Английский',
                },
                {
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
        ],
        default: [
            [
                {
                    title: 'Язык',
                    value: 'Английский',
                },
                {
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
        ],
        addNew: true,
        confirmed: false,
    })

    const [passport, setPassport] = useState<IInputArea>({
        title: 'Паспортные данные',
        hint: 'Текст подсказки',
        data: [
            { title: 'Серия', value: '', required: true },
            { title: 'Номер', value: '', required: true },
            { title: 'Кем выдан', value: '', required: true },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [driveLicense, setDriveLicense] = useState<IInputArea>({
        title: 'Водительское удостоверение',
        hint: 'Текст подсказки',
        data: [],
        optionalCheckbox: {
            title: 'Водительское удостоверение отсутствует',
            value: false,
            required: true,
        },
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [registration, setRegistration] = useState<IInputArea>({
        title: 'Регистрация',
        hint: 'Текст подсказки',
        data: [
            { title: 'Адрес регистрации', value: '' },
            { title: 'Дата регистрации', value: '' },
        ],
        documents: { files: [], required: true },
        optionalCheckbox: {
            title: 'Регистрация отсутствует',
            value: false,
            required: true,
        },
        confirmed: false,
    })

    const [location, setLocation] = useState<IInputArea>({
        title: 'Проживание',
        hint: 'Текст подсказки',
        data: [
            { title: 'Адрес проживания', value: '', required: true },
            { title: 'Дата начала проживания', value: '', required: true },
        ],
        optionalCheckbox: { title: 'Адрес проживания совпадает с адресом регистрации', value: false, required: true },
        confirmed: false,
    })

    const [contactInfo, setContactInfo] = useState<IInputArea>({
        title: 'Контактные данные',
        hint: 'Текст подсказки',
        data: [
            { title: 'Мобильный телефон (личный)', type: 'tel', value: '+79423131231', required: true },
            { title: 'Мобильный телефон (рабочий)', type: 'tel', value: '+79423131231' },
            { title: 'Служебный телефон (прямой/дополнительный)', type: 'tel', value: '+79423131231' },
            { title: 'Личный e-mail', type: 'email', value: 'temp@gmail.com', required: true },
            { title: 'Рабочий e-mail', type: 'email', value: 'temp@gmail.com' },
        ],
        confirmed: false,
    })

    const [army, setArmy] = useState<IInputArea>({
        title: 'Воинская служба',
        hint: 'Текст подсказки',
        data: [],
        documents: { files: [], required: true },
        optionalCheckbox: {
            title: 'Документ о воинской службе отсутствует',
            value: false,
            required: true,
        },
        confirmed: false,
    })

    const [confirmAll, setConfirmAll] = useState(false)

    return (
        <DataVerificationPageWrapper>
            <div className="data-verification-block">
                <Title size={3} align="left" bottomGap>
                    Подтвердите корректность указанных данных
                </Title>
                <InputArea {...personalData} setData={setPersonalData} />
                <Divider />
                <InputArea {...contactInfo} setData={setContactInfo} />
                <Divider />
                <InputArea {...passport} setData={setPassport} />
                <Divider />
                <InputArea {...registration} setData={setRegistration} />
                <Divider />
                <InputArea {...location} setData={setLocation} />
                <Divider />
                <InputArea {...familyStatus} setData={setFamilyStatus} />
                <Divider />
                <InputArea {...family} setData={setFamily} />
                <Divider />
                <InputArea {...education} setData={setEducation} />
                <Divider />
                <InputArea {...language} setData={setLanguage} />
                <Divider />
                <InputArea {...driveLicense} setData={setDriveLicense} />
                <Divider />
                <InputArea {...army} setData={setArmy} />
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
                        !!army.confirmed &&
                        !!driveLicense.confirmed &&
                        !!personalData.confirmed &&
                        !!location.confirmed &&
                        !!passport.confirmed &&
                        !!education.confirmed &&
                        !!confirmAll
                    }
                    popUpFailureMessage="Для отправки формы необходимо, чтобы все поля были подтверждены"
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </div>
        </DataVerificationPageWrapper>
    )
}

export default DataVerificationPage
