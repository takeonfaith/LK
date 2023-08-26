import { UserApplication } from '@shared/api/model'
import { IInputArea, IInputAreaData } from '@shared/ui/input-area/model'

const maritalStatus = [
    { id: 0, title: 'Холост' },
    { id: 1, title: 'Женат' },
    { id: 2, title: 'Замужем' },
    { id: 3, title: 'Не замужем' },
]

const familyMembers = [
    { id: 0, title: 'Мать' },
    { id: 1, title: 'Отец' },
    { id: 2, title: 'Жена' },
    { id: 3, title: 'Муж' },
    { id: 2, title: 'Ребенок' },
    { id: 3, title: 'Билзкие родственники отсутствуют' },
]

const militaryObligationCategory = [
    { id: 0, title: 'Военнослужащий' },
    { id: 1, title: 'Военнообязанный' },
    { id: 2, title: 'Невоеннообязанный' },
    { id: 3, title: 'Призывник' },
]

const militaryRank = [
    { id: 0, title: 'Адмирал' },
    { id: 1, title: 'Адмирал флота' },
    { id: 2, title: 'Вице-адмирал' },
    { id: 3, title: 'Генерал армии' },
    { id: 4, title: 'Генерал-лейтенант' },
    { id: 5, title: 'Генерал-майор' },
    { id: 6, title: 'Генерал-полковник' },
    { id: 7, title: 'Главный корабельный старшина' },
    { id: 8, title: 'Главный старшина' },
    { id: 9, title: 'Ефрейтор' },
    { id: 10, title: 'Капитан' },
    { id: 11, title: 'Капитан 1 ранга' },
    { id: 12, title: 'Капитан 2 ранга' },
    { id: 13, title: 'Капитан 3 ранга' },
    { id: 14, title: 'Капитан юстиции' },
    { id: 15, title: 'Капитан-лейтенант' },
    { id: 16, title: 'Контр-адмирал' },
    { id: 17, title: 'Лейтенант' },
    { id: 18, title: 'Майор' },
    { id: 19, title: 'Маршал Российской Федерации' },
    { id: 20, title: 'Матрос' },
    { id: 21, title: 'Мичман' },
    { id: 22, title: 'Младший лейтенант' },
    { id: 23, title: 'Младший сержант' },
    { id: 24, title: 'Подполковник' },
    { id: 25, title: 'Полковник' },
    { id: 26, title: 'Прапорщик' },
    { id: 27, title: 'Рядовой' },
    { id: 28, title: 'Сержант' },
    { id: 29, title: 'Старший лейтенант' },
    { id: 30, title: 'Старший матрос' },
    { id: 31, title: 'Старший мичман' },
    { id: 32, title: 'Старший прапорщик' },
    { id: 33, title: 'Старший сержант' },
    { id: 34, title: 'Старшина' },
    { id: 35, title: 'Старшина 1 статьи' },
    { id: 36, title: 'Старшина 2 статьи' },
]

const specialization = [
    { id: 0, title: 'Ветеринарный' },
    { id: 1, title: 'Военно-гуманитарный' },
    { id: 2, title: 'Высшие офицеры' },
    { id: 3, title: 'Инженерно-технический' },
    { id: 4, title: 'Командный' },
    { id: 5, title: 'Медицинский' },
    { id: 6, title: 'Младшие офицеры' },
    { id: 7, title: 'Педагогический' },
    { id: 8, title: 'Прапорщики и мичманы' },
    { id: 9, title: 'Сержанты' },
    { id: 10, title: 'Солдаты' },
    { id: 11, title: 'Солдаты, матросы, сержанты, старшины' },
    { id: 12, title: 'Старшие офицеры' },
    { id: 13, title: 'Юридический' },
]

const reserveCategory = [
    { id: 0, title: '1' },
    { id: 1, title: '2' },
]

const militaryServiceFitness = [
    { id: 0, title: 'А - годен к военной службе' },
    { id: 1, title: 'Б - годен к военной службе с незначительными ограничениями' },
    { id: 2, title: 'В - ограниченно годен к военной службе' },
    { id: 3, title: 'Г - временно не годен к военной службе' },
    { id: 4, title: 'Д - не годен к военной службе' },
]

const militaryEnlistmentOffice = [{ id: 0, title: 'В разработке..' }]

const documentType = [
    { id: 0, title: 'Военный билет офицера запаса' },
    { id: 1, title: 'Военный билет солдата (матроса, сержанта, старшины)' },
    { id: 2, title: 'Временное удостоверение, выданное взамен военного билета' },
    { id: 3, title: 'Временное удостоверение, выданное взамен военного билета офицера запасам' },
    { id: 4, title: 'Персональная электронная карта' },
    { id: 5, title: 'Справка взамен военного билета' },
    { id: 6, title: 'Удостоверение гражданина, подлежащего призыву на военную службу' },
    { id: 7, title: 'Удостоверение личности военнослужащего Российской Федерации' },
    { id: 8, title: 'Удостоверение личности офицера' },
]

const vehicleCategory = [
    { id: 0, title: 'A (мотоциклы)' },
    { id: 1, title: 'B (легковые автомобили)' },
    { id: 2, title: 'C (грузовые автомобили)' },
    { id: 3, title: 'D (автобусы)' },
    { id: 4, title: 'M (мопеды)' },
    { id: 5, title: 'Tb (троллейбусы)' },
    { id: 6, title: 'Tm (трамваи)' },
]

export const getGeneralData = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Персональные данные',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: dataUserApplication.phone,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Фамилия',
                type: 'text',
                fieldName: 'surname',
                value: dataUserApplication.surname,
                editable: true,
                required: true,
            },
            {
                title: 'Имя',
                type: 'text',
                fieldName: 'name',
                value: dataUserApplication.name,
                editable: true,
                required: true,
            },
            {
                title: 'Отчество',
                type: 'text',
                fieldName: 'patronimyc',
                value: dataUserApplication.patronymic,
                editable: true,
                required: true,
            },
        ],
    }
}

export const getMaritalStatusForm = (): IInputArea => {
    return {
        title: 'Семейное положение',
        data: [
            {
                title: 'Состояние в браке',
                value: null,
                fieldName: 'maritalStatus',
                type: 'select',
                items: maritalStatus,
                width: '100%',
                editable: true,
                required: true,
            },
        ],
    }
}

export const getFamilyCompositionForm = (): IInputArea => {
    return {
        title: 'Состав семьи',
        data: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: null,
                    type: 'select',
                    items: familyMembers,
                    width: '100%',
                },
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },
                {
                    fieldName: 'bdate',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '30%',
                },
            ],
        ],
        default: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: null,
                    type: 'select',
                    items: familyMembers,
                    width: '100%',
                },

                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },

                {
                    fieldName: 'bdate',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '30%',
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
    }
}

export const getMilitaryRegistrationDataForm = (): IInputArea => {
    return {
        title: 'Сведения воинского учета',
        data: [
            {
                fieldName: 'militaryObligationCategory',
                title: 'Отношение к воинской обязанности',
                value: null,
                type: 'select',
                items: militaryObligationCategory,
                width: '100%',
                required: true,
            },
            {
                fieldName: 'military id details',
                title: 'Данные военного билета',
                type: 'text-header',
                visible: true,
                value: 'Данные военного билета',
            },
            {
                fieldName: 'militaryRank',
                title: 'Воинское звание',
                value: null,
                type: 'select',
                items: militaryRank,
                width: '100%',
                required: true,
            },
            {
                fieldName: 'specialization',
                title: 'Состав (профиль)',
                value: null,
                type: 'select',
                items: specialization,
                width: '100%',
                required: true,
            },
            {
                fieldName: 'specialization',
                title: 'Категория запаса',
                value: null,
                type: 'select',
                items: reserveCategory,
                width: '100%',
                required: true,
            },
            {
                fieldName: 'moc',
                title: 'ВУС',
                value: '',
                required: true,
                width: '40%',
            },
            {
                fieldName: 'militaryServiceFitness',
                title: 'Годность к воинской службе',
                value: null,
                type: 'select',
                items: militaryServiceFitness,
                width: '100%',
                required: true,
            },
            {
                fieldName: 'militaryEnlistmentOffice',
                title: 'Военкомат',
                value: null,
                type: 'select',
                items: militaryEnlistmentOffice,
                width: '100%',
                required: true,
            },
        ],
    }
}

export const getMilitaryRegistrationDocument = (): IInputArea => {
    return {
        title: 'Документ воинского учета',
        data: [
            {
                fieldName: 'documentType',
                title: 'Вид документа',
                value: null,
                type: 'select',
                items: documentType,
                width: '100%',
                required: true,
                editable: true,
            },
            {
                fieldName: 'series',
                title: 'Серия',
                value: '',
                required: true,
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'number',
                title: 'Номер',
                value: '',
                required: true,
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'issuedBy',
                title: 'Кем выдан',
                value: null,
                type: 'select',
                items: militaryEnlistmentOffice,
                width: '100%',
                required: true,
                editable: true,
            },
            {
                fieldName: 'dateOfIssue',
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                required: true,
                editable: true,
                width: '30%',
            },
        ],
        documents: {
            files: [],
            fieldName: 'Документ воинского учета',
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}
export interface DriversLicenseData {
    documentType: [{ id: 0; title: 'Водительское удостоверение' }]
    series: string
    number: string
    vehicleCategory: string
    dateOfIssue: string
}

export const getDriversLicenseData = (driversLicenseData: IInputArea | null): IInputArea => {
    const documentSelected = (driversLicenseData?.data[0] as IInputAreaData)?.value !== null

    return {
        title: 'Данные водительского удостоверения',
        data: [
            {
                fieldName: 'documentType',
                title: 'Вид документа',
                value: null,
                type: 'select',
                items: [{ id: 0, title: 'Водительское удостоверение' }],
                width: '100%',
                required: false,
                editable: true,
            },
            {
                fieldName: 'series',
                title: 'Серия',
                value: '',
                required: documentSelected,
                visible: documentSelected,
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'number',
                title: 'Номер',
                value: '',
                required: documentSelected,
                visible: documentSelected,
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'vehicleCategory',
                title: 'Категория ТС',
                value: null,
                type: 'select',
                items: vehicleCategory,
                width: '100%',
                required: documentSelected,
                visible: documentSelected,
                editable: true,
            },
            {
                fieldName: 'dateOfIssue',
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                required: documentSelected,
                visible: documentSelected,
                editable: true,
                width: '30%',
            },
        ],
        documents: {
            files: [],
            fieldName: 'Водительское удостоверение',
            required: documentSelected,
            visible: documentSelected,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}
