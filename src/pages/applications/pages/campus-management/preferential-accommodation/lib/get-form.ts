import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const itemsCategory = [
    {
        id: 0,
        title: 'дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей',
    },
    { id: 1, title: 'дети-инвалиды, инвалиды I и II групп, инвалиды с детства' },
    {
        id: 2,
        title: 'подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне',
    },
    {
        id: 3,
        title: 'инвалиды вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветераны боевых действий',
    },
    {
        id: 4,
        title: 'являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» – «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» – «в» пункта 3 статьи 51 Федерального закона от 28.03.1998 N 53-ФЗ «О воинской обязанности и военной службе',
    },
    { id: 5, title: 'получившие государственную социальную помощь' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Контактная информация',
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
                title: 'Отношусь к льготной категории граждан:',
                fieldName: 'category',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: itemsCategory,
            },
        ],
    }
}

export default getForm
