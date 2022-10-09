import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const itemsCategory = [
    {
        id: 0,
        title: 'дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей; ',
    },
    { id: 1, title: 'дети-инвалиды, инвалиды I и II групп, инвалиды с детства;\n' },
    {
        id: 2,
        title: 'подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне;',
    },
    {
        id: 3,
        title: 'инвалиды вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветераны боевых действий;',
    },
    {
        id: 4,
        title:
            'проходившие не менее трех лет военную службу по контракту в рядах Вооруженных Силах России, \n' +
            'во внутренних войсках МВД России, в инженерно-технических, дорожно-строительных воинских формированиях при федеральных органах исполнительной власти и др. органах и службах России \n' +
            'на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, \n' +
            'и уволенных с военной службы по основаниям, предусмотренным подпунктами "б" – "г" пункта 1, подпунктом "а" пункта 2 и подпунктами "а"-"в" пункта 3 статьи 51 Федерального закона от 28 марта 1998 года N 53-ФЗ "О воинской обязанности и военной службе".\n',
    },
    { id: 5, title: 'имеющие право на получение государственной социальной помощи.' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Предоставление права льготного проживания',
        hint: 'Необходимо прикрепить документ, подтверждающий соответствие льготной категории',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: phone,
                editable: true,
                required: true,
            },
            {
                title: 'Причина предоставления (в связи с)',
                width: '100%',
                value: '',
                fieldName: 'reason',
                placeholder: 'укажите причину',
                editable: true,
                required: true,
            },
            {
                title: 'Категория',
                fieldName: 'category',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: itemsCategory,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
    }
}

export default getForm
