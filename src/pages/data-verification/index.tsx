import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { userModel } from '@entities/user'
import { SubmitButton, Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import InputArea from '@ui/input-area'
import { IInputArea } from '@ui/input-area/model'
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

//TODO: remove default values from this component
//TODO: нужно переписать на формах, а то глаза могут выпасть (примерные пояснения, как нужно, находятся в inputs-area)

const DataVerificationPage = () => {
    const { data } = teacherDateVerificationModel.selectors.useTeacherDataVerification()

    useEffect(() => {
        teacherDateVerificationModel.effects.getTeacherDataVerificationFx()
    }, [])

    console.log(data)

    const {
        data: { user },
    } = userModel.selectors.useUser()
    // Про это написно ниже, в сабмит баттоне
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)

    if (!user?.id) return <></>

    const [personalData, setPersonalData] = useState<IInputArea>({
        title: 'Личные данные',
        hint: 'Необходимо приложить скан-копию документа, подтверждающего изменения',
        data: [
            {
                fieldName: 'fio',
                title: 'ФИО',
                value: data?.fio ?? '',
                required: true,
            },
            {
                fieldName: 'sex',
                title: 'Пол',
                value: data?.sex ?? '',
                required: true,
            },
            {
                fieldName: 'bdate',
                title: 'Дата рождения',
                value: data?.bdate ?? '',
                required: true,
                type: 'date',
            },
            {
                fieldName: 'bplace',
                title: 'Место рождения',
                value: data?.bplace ?? '',
                required: true,
            },
        ],
        documents: { files: [], required: true, fieldName: 'personalFiles' },
        confirmed: false,
    })

    const [familyStatus, setFamilyStatus] = useState<IInputArea>({
        title: 'Семейное положение',
        hint: 'Необходимо указать актуальную информацию',
        data: [
            {
                // TODO: ??
                fieldName: '',
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
            {
                fieldName: 'tel_mob_private',
                title: 'Мобильный телефон (личный)',
                type: 'tel',
                value: data?.tel_mob_private ?? '',
                required: true,
                mask: true,
            },
            {
                fieldName: 'tel_mob_staff',
                title: 'Мобильный телефон (рабочий)',
                type: 'tel',
                value: data?.tel_mob_staff ?? '',
            },
            {
                fieldName: 'tel_staff',
                title: 'Служебный телефон (прямой/дополнительный)',
                type: 'tel',
                value: data?.tel_staff ?? '',
            },
            {
                fieldName: 'email_private',
                title: 'Личный e-mail',
                type: 'email',
                value: data?.email_private ?? '',
                required: true,
            },
            { fieldName: 'email_staff', title: 'Рабочий e-mail', type: 'email', value: data?.email_staff ?? '' },
        ],
        confirmed: false,
    })

    const familyType = [
        { id: 'mother', title: 'Мать' },
        { id: 'father', title: 'Отец' },
        { id: 'wife', title: 'Жена' },
        { id: 'husband', title: 'Муж' },
        { id: 'sister', title: 'Сестра' },
        { id: 'brother', title: 'Брат' },
        { id: 'son', title: 'Сын' },
        { id: 'daughter', title: 'Дочь' },
    ]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // const userFamilyData: IInputAreaData[] =
    //     [
    //         data?.family?.map((item) => [
    //             {
    //                 fieldName: 'familyRelationDegree',
    //                 title: 'Степень родства',
    //                 value: familyType.find((t) => t.title === item.relation) ?? { id: 'mother', title: 'Мать' },
    //                 type: 'select',
    //                 items: familyType,
    //             },
    //             {
    //                 fieldName: 'familyFullName',
    //                 title: 'ФИО' ?? '',
    //                 value: item?.relation,
    //                 required: true,
    //             },
    //             {
    //                 fieldName: 'familyBirthDate',
    //                 title: 'Дата рождения',
    //                 value: item?.bdate ?? '',
    //                 type: 'date',
    //                 required: true,
    //             },
    //         ]),
    //     ].filter(Boolean) ?? []

    const [family, setFamily] = useState<IInputArea>({
        title: 'Состав семьи',
        hint: 'Необходимо указать актуальную информацию о ближайших родственниках',
        // data: !!t?.length
        //     ? [t]
        //     : [
        //           [
        //               {
        //                   fieldName: 'familyRelationDegree',
        //                   title: 'Степень родства',
        //                   value: { id: 'mother', title: 'Мать' },
        //                   type: 'select',
        //                   items: familyType,
        //               },
        //               {
        //                   fieldName: 'familyFullName',
        //                   title: 'ФИО',
        //                   value: '',
        //                   required: true,
        //               },
        //               {
        //                   fieldName: 'familyBirthDate',
        //                   title: 'Дата рождения',
        //                   value: '1990-01-21',
        //                   type: 'date',
        //                   required: true,
        //               },
        //           ],
        //       ],
        data: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: { id: 'mother', title: 'Мать' },
                    type: 'select',
                    items: familyType,
                },
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                },
                {
                    fieldName: 'bdate',
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
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: { id: 'mother', title: 'Мать' },
                    type: 'select',
                    items: familyType,
                },

                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                },

                {
                    fieldName: 'bdate',
                    title: 'Дата рождения',
                    value: '1990-01-21',
                    type: 'date',
                    required: true,
                },
            ],
        ],
        addNew: true,
        optionalCheckbox: {
            fieldName: 'family_none',
            title: 'Близкие родственники отсутствуют',
            value: false,
            required: true,
        },
        confirmed: false,
    })

    const [disability, setDisability] = useState<IInputArea>({
        title: 'Инвалидность',
        hint: 'Необходимо приложить скан-копию справки об инвалидности',
        data: [],
        optionalCheckbox: {
            fieldName: 'is_invalid',
            value: false,
            title: 'Есть справка об инвалидности',
            required: false,
        },
        documents: { files: [], required: true, checkboxCondition: 'straight', fieldName: 'invalidFiles' },
        confirmed: false,
    })

    const [education, setEducation] = useState<IInputArea>({
        title: 'Образование',
        hint: 'Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения',
        data: [
            // ??
            {
                fieldName: '',
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
            // ??
            {
                fieldName: '',
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
            { fieldName: 'edu_org', title: 'Учебное заведение', value: data?.edu_org ?? '', required: true },
            { fieldName: 'edu_level', title: 'Квалификация', value: data?.edu_level ?? '', required: true },
            { fieldName: 'edu_doc_ser', title: 'Серия', value: data?.edu_doc_ser ?? '', required: true },
            { fieldName: 'edu_doc_num', title: 'Номер', value: data?.edu_doc_num ?? '', required: true },
            // TODO: should be year
            {
                fieldName: 'edu_year',
                title: 'Дата выдачи',
                value: data?.edu_year ?? '',
                type: 'date',
                required: true,
            },
        ],
        documents: { files: [], required: true, fieldName: 'educationFiles' },
        confirmed: false,
    })

    const [language, setLanguage] = useState<IInputArea>({
        title: 'Знание иностранных языков',
        hint: 'Необходимо указать иностранные языки и степень владения ими',
        data: [
            [
                {
                    fieldName: 'language',
                    title: 'Язык',
                    required: true,
                    value: 'Английский',
                },
                {
                    fieldName: 'level',
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
                    fieldName: '',
                    title: 'Язык',
                    required: true,
                    value: 'Английский',
                },
                // ??
                {
                    fieldName: '',
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
            // ??
            {
                fieldName: '',
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
            { fieldName: 'pass_ser', title: 'Серия', value: data?.pass_ser ?? '', required: true },
            { fieldName: 'pass_num', title: 'Номер', value: data?.pass_num ?? '', required: true },
            { fieldName: 'pass_div', title: 'Кем выдан', value: data?.pass_div ?? '', required: true },
            {
                fieldName: 'pass_date',
                title: 'Дата выдачи',
                value: data?.pass_date ?? '',
                required: true,
                type: 'date',
            },
            {
                fieldName: 'pass_div_code',
                title: 'Код подразделения',
                value: data?.pass_div_code ?? '',
                required: true,
            },
            { fieldName: 'pass_type', title: 'Гражданство', value: data?.pass_type ?? '', required: true },
        ],
        documents: { files: [], required: true, fieldName: 'passportFiles' },
        confirmed: false,
    })

    const [driveLicense, setDriveLicense] = useState<IInputArea>({
        title: 'Водительское удостоверение',
        hint: 'При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон',
        data: [],
        optionalCheckbox: {
            fieldName: 'dr_lic_none',
            title: 'Водительское удостоверение отсутствует',
            value: false,
            required: true,
        },
        documents: { files: [], required: true, fieldName: 'driveLicenseFiles' },
        confirmed: false,
    })

    const [registration, setRegistration] = useState<IInputArea>({
        title: 'Регистрация',
        hint: 'Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.',
        data: [
            { fieldName: 'reg_country', title: 'Страна', value: data?.reg_country ?? '', required: true },
            {
                fieldName: 'reg_city',
                title: 'Город, населенный пункт',
                value: data?.reg_city ?? '',
                required: true,
            },
            {
                fieldName: 'reg_street',
                title: 'Улица',
                value: data?.reg_street ?? '',
                required: true,
            },
            {
                fieldName: 'reg_house',
                title: 'Дом',
                value: data?.reg_house ?? '',
                required: true,
            },
            {
                fieldName: 'reg_corpus',
                title: 'Корпус',
                value: data?.reg_corpus ?? '',
            },
            {
                fieldName: 'reg_flat',
                title: 'Квартира',
                value: data?.reg_flat ?? '',
            },
            {
                fieldName: 'reg_date',
                title: 'Дата регистрации',
                value: data?.reg_date ?? '',
                type: 'date',
                required: true,
            },
            {
                fieldName: 'reg_index',
                title: 'Индекс',
                value: data?.reg_index ?? '',
                type: 'number',
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'personalDataFiles',
        },
        optionalCheckbox: {
            fieldName: 'reg_none',
            title: 'Регистрация отсутствует',
            value: false,
        },
        confirmed: false,
    })

    const [location, setLocation] = useState<IInputArea>({
        title: 'Проживание',
        hint: 'Необходимо указать фактический адрес проживания',
        data: [
            { fieldName: 'loc_addr', title: 'Адрес проживания', value: data?.loc_addr ?? '', required: true },
            {
                fieldName: 'loc_date',
                title: 'Дата начала проживания',
                value: data?.loc_date ?? '',
                type: 'date',
                required: true,
            },
        ],
        optionalCheckbox: {
            // ???
            fieldName: '',
            title: 'Адрес проживания совпадает с адресом регистрации',
            value: false,
            required: true,
        },
        confirmed: false,
    })

    const [army, setArmy] = useState<IInputArea>({
        title: 'Воинская служба',
        hint: 'При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву)',
        data: [],
        documents: {
            files: [],
            required: true,
            checkboxCondition: 'reverse',
            fieldName: 'armyFiles',
        },
        optionalCheckbox: {
            fieldName: 'army_doc_none',
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
                    action={(): void => {
                        setLoading(true)
                        const inputAreas = [
                            army,
                            driveLicense,
                            personalData,
                            location,
                            passport,
                            education,
                            disability,
                            family,
                            familyStatus,
                            registration,
                            language,
                            contactInfo,
                        ]

                        const form = inputAreas
                            .map((t) => {
                                if (!Array.isArray(t.data[0])) {
                                    return t.data.map((t) => {
                                        const obj = {}
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        if (!!t?.fieldName) obj[t?.fieldName ?? ''] = t?.value
                                        return obj
                                    })
                                } else {
                                    const r = t.data.map((c) => {
                                        return Object.assign(
                                            {},
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-ignore
                                            ...c?.map((r) => {
                                                const obj = {}
                                                if (!!r?.fieldName)
                                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                    // @ts-ignore
                                                    obj[r?.fieldName] = !!r?.value?.title ? r?.value?.title : r?.value
                                                return obj
                                            }),
                                        )
                                    })
                                    const obj = {} as any

                                    const name = t.title == 'Состав семьи' ? 'family' : 'langs'

                                    obj[name] = r

                                    return obj
                                }
                            })
                            .flat()

                        const files = inputAreas.map((area) => {
                            const obj = {}
                            if (area.documents?.fieldName) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                obj[area.documents?.fieldName] = area.documents.files
                            }

                            return obj
                        })

                        const checkboxes = inputAreas.map((area) => {
                            const obj = {}
                            if (area.optionalCheckbox?.fieldName) {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                obj[area.optionalCheckbox?.fieldName] = area.optionalCheckbox.value
                            }

                            return obj
                        })

                        const result = Object.assign({}, ...form, ...files, ...checkboxes)

                        console.log(result)

                        teacherDateVerificationModel.events.postTeacherDataVerification(result)
                        setLoading(false)
                        setCompleted(true)
                    }}
                    isLoading={loading}
                    completed={completed}
                    // Здесь должен быть setCompleted, он нужен для анимации. В функции отправки формы после успешного завершения его нужно сделать true
                    setCompleted={setCompleted}
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
