import { userModel } from '@entities/user'
import createFullName from '@features/home/lib/create-full-name'
import { SubmitButton, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
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
        background: var(--form);
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
    // Про это написно ниже, в сабмит баттоне
    const [completed, setCompleted] = useState(false)

    if (!user?.id) return <></>

    const [personalData, setPersonalData] = useState<IInputArea>({
        title: 'Личные данные',
        hint: 'Необходимо приложить скан-копию документа, подтверждающего изменения',
        data: [
            {
                title: 'ФИО',
                value: createFullName({ name: user?.name, surname: user?.surname, patronymic: user?.patronymic }),
                required: true,
            },
            {
                title: 'Пол',
                value: transformSex(user.sex),
                required: true,
            },
            {
                title: 'Дата рождения',
                value: user.birthday,
                required: true,
            },
            {
                title: 'Место рождения',
                value: '',
                required: true,
            },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [familyStatus, setFamilyStatus] = useState<IInputArea>({
        title: 'Семейное положение',
        hint: 'Необходимо указать актуальную информацию',
        data: [
            {
                title: '',
                value: { id: 'married', title: 'Замужем/Женат' },
                type: 'select',
                items: [
                    { id: 'single', title: 'Холост/Не замужем' },
                    { id: 'married', title: 'Женат/Замужем' },
                    { id: 'divorced', title: 'Разведен/Разведена' },
                    { id: 'widow', title: 'Вдовец/Вдова' },
                ],
                width: '100%',
            },
        ],
        confirmed: false,
    })

    const [contactInfo, setContactInfo] = useState<IInputArea>({
        title: 'Контактные данные',
        hint: 'Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.',
        data: [
            { title: 'Мобильный телефон (личный)', type: 'tel', value: '', required: true, mask: true },
            { title: 'Мобильный телефон (рабочий)', type: 'tel', value: '' },
            { title: 'Служебный телефон (прямой/дополнительный)', type: 'tel', value: '' },
            { title: 'Личный e-mail', type: 'email', value: '', required: true },
            { title: 'Рабочий e-mail', type: 'email', value: '' },
        ],
        confirmed: false,
    })

    const [family, setFamily] = useState<IInputArea>({
        title: 'Состав семьи',
        hint: 'Необходимо указать актуальную информацию о ближайших родственниках',
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
        optionalCheckbox: { title: 'Близкие родственники отсутствуют', value: false, required: true },
        confirmed: false,
    })

    const [disability, setDisability] = useState<IInputArea>({
        title: 'Инвалидность',
        hint: 'Необходимо приложить скан-копию справки об инвалидности',
        data: [],
        optionalCheckbox: { value: false, title: 'Есть справка об инвалидности', required: false },
        documents: { files: [], required: true, checkboxCondition: 'straight' },
        confirmed: false,
    })

    const [education, setEducation] = useState<IInputArea>({
        title: 'Образование',
        hint: 'Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения',
        data: [
            {
                title: 'Вид документа',
                type: 'select',
                items: [
                    { id: 0, title: 'Аттестат' },
                    { id: 1, title: 'Аттестат с отличием' },
                    { id: 2, title: 'Диплом' },
                    { id: 3, title: 'Диплом дубликат' },
                    { id: 4, title: 'Диплом с отличием' },
                    { id: 5, title: 'Свидетельство' },
                    { id: 6, title: 'Удостоверение' },
                    { id: 7, title: 'Сертификат' },
                ],
                value: { id: 0, title: 'Диплом' },
                width: '100%',
            },
            {
                title: 'Уровень образования',
                value: { id: 3, title: 'Высшее образование – бакалавриат' },
                type: 'select',
                width: '100%',
                items: [
                    { id: 0, title: 'Дополнительное профессиональное образование' },
                    { id: 1, title: 'Среднее общее образование' },
                    { id: 2, title: 'Среднее профессиональное образование' },
                    { id: 3, title: 'Высшее образование – бакалавриат' },
                    { id: 4, title: 'Высшее образование - специалитет, магистратура' },
                    { id: 5, title: 'Профессиональное обучение' },
                    { id: 6, title: 'Начальное профессиональное образование' },
                    { id: 7, title: 'Послевузовское образование' },
                ],
            },
            { title: 'Учебное заведение', value: '', required: true },
            { title: 'Квалификация', value: '', required: true },
            { title: 'Серия', value: '', required: true },
            { title: 'Номер', value: '', required: true },
            {
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                required: true,
            },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [language, setLanguage] = useState<IInputArea>({
        title: 'Знание иностранных языков',
        hint: 'Необходимо указать иностранные языки и степень владения ими',
        data: [
            [
                {
                    title: 'Язык',
                    required: true,
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
                    required: true,
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
        hint: 'Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.',
        data: [
            {
                title: 'Вид документа',
                value: { id: 0, title: 'Паспорт РФ' },
                width: '100%',
                type: 'select',
                items: [
                    { id: 'russian-passport', title: 'Паспорт РФ' },
                    { id: 'foreign-passport', title: 'Иностранный паспорт' },
                    { id: 'resident-card', title: 'Вид на жительство' },
                ],
            },
            { title: 'Серия', value: '', required: true },
            { title: 'Номер', value: '', required: true },
            { title: 'Кем выдан', value: '', required: true },
            { title: 'Дата выдачи', value: '', required: true, type: 'date' },
            { title: 'Код подразделения', value: '', required: true },
            { title: 'Гражданство', value: '', required: true },
        ],
        documents: { files: [], required: true },
        confirmed: false,
    })

    const [driveLicense, setDriveLicense] = useState<IInputArea>({
        title: 'Водительское удостоверение',
        hint: 'При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон',
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
        hint: 'Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.',
        data: [
            { title: 'Страна', value: '', required: true },
            { title: 'Город, населенный пункт', value: '', required: true },
            { title: 'Улица', value: '', required: true },
            { title: 'Дом', value: '', required: true },
            { title: 'Корпус', value: '' },
            { title: 'Квартира', value: '' },
            { title: 'Дата регистрации', value: '', type: 'date', required: true },
            { title: 'Индекс', value: '', type: 'number' },
        ],
        documents: { files: [], required: true },
        optionalCheckbox: {
            title: 'Регистрация отсутствует',
            value: false,
        },
        confirmed: false,
    })

    const [location, setLocation] = useState<IInputArea>({
        title: 'Проживание',
        hint: 'Необходимо указать фактический адрес проживания',
        data: [
            { title: 'Адрес проживания', value: '', required: true },
            { title: 'Дата начала проживания', value: '', type: 'date', required: true },
        ],
        optionalCheckbox: { title: 'Адрес проживания совпадает с адресом регистрации', value: false, required: true },
        confirmed: false,
    })

    const [army, setArmy] = useState<IInputArea>({
        title: 'Воинская служба',
        hint: 'При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву)',
        data: [],
        documents: { files: [], required: true, checkboxCondition: 'reverse' },
        optionalCheckbox: {
            title: 'Документ о воинской службе отсутствует',
            value: false,
            required: true,
        },
        confirmed: false,
    })

    const [confirmAll, setConfirmAll] = useState(false)

    useEffect(() => {
        setConfirmAll(false)
    }, [
        !!army.confirmed,
        !!driveLicense.confirmed,
        !!personalData.confirmed,
        !!location.confirmed,
        !!passport.confirmed,
        !!education.confirmed,
        !!disability.confirmed,
        !!family.confirmed,
        !!familyStatus.confirmed,
        !!registration.confirmed,
        !!language.confirmed,
        !!contactInfo.confirmed,
    ])

    return (
        <DataVerificationPageWrapper>
            <div className="data-verification-block">
                <Title size={3} align="left" bottomGap>
                    Подтвердите корректность указанных данных
                </Title>
                <InputArea {...personalData} setData={setPersonalData} divider />
                <InputArea {...contactInfo} setData={setContactInfo} divider />
                <InputArea {...passport} setData={setPassport} divider />
                <InputArea {...registration} setData={setRegistration} divider />
                <InputArea {...location} setData={setLocation} divider />
                <InputArea {...familyStatus} setData={setFamilyStatus} divider />
                <InputArea {...family} setData={setFamily} divider />
                <InputArea {...education} setData={setEducation} divider />
                <InputArea {...language} setData={setLanguage} divider />
                <InputArea {...driveLicense} setData={setDriveLicense} divider />
                <InputArea {...disability} setData={setDisability} divider />
                <InputArea {...army} setData={setArmy} divider />
                <Checkbox
                    checked={confirmAll}
                    setChecked={setConfirmAll}
                    text={'Я подтверждаю корректность указанных данных'}
                    isActive={
                        !!army.confirmed &&
                        !!driveLicense.confirmed &&
                        !!personalData.confirmed &&
                        !!location.confirmed &&
                        !!passport.confirmed &&
                        !!education.confirmed
                    }
                />
                <SubmitButton
                    text={'Отправить'}
                    // Функция отправки здесь
                    action={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    isLoading={false}
                    completed={false}
                    // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
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
                        !!disability.confirmed &&
                        !!family.confirmed &&
                        !!familyStatus.confirmed &&
                        !!registration.confirmed &&
                        !!language.confirmed &&
                        !!contactInfo.confirmed &&
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
