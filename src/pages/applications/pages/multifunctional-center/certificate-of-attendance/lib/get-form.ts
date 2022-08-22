import { IInputArea } from '@ui/input-area/model'
const expelled_uni = [
    {
        title: 'отчислением из',
        type: 'text',
        value: '',
        editable: true,
        fieldName: 'expelled_university',
        required: true,
    },
    {
        title: 'в',
        type: 'text',
        value: '',
        editable: true,
        fieldName: 'year',
        required: true,
    },
    {
        title: 'году',
    },
]
const academic_form = [
    { id: 0, title: 'очная' },
    { id: 1, title: 'заочная' },
    { id: 2, title: 'очно-заочная' },
    { id: 3, title: 'очная сокращённая' },
    { id: 4, title: 'заочная сокращённая' },
    { id: 5, title: 'очно-заочная сокращённая' },
]
const contract = [
    { id: 0, title: 'бюджетная' },
    { id: 1, title: 'с оплатой обучения' },
]
const list = [
    { id: 0, title: 'аттестат о среднем (полном) общем образовании' },
    { id: 1, title: 'диплом о среднем профессиональном образовании' },
    { id: 2, title: 'диплом о начальном профессиональном образовании' },
    { id: 3, title: 'академическая справка или диплом о неполном высшем образовании' },
    { id: 4, title: 'диплом о полном высшем образовании.' },
]

const reasons = [
    {
        id: 0,
        title: 'моим письменным заявлением',
    },
    {
        id: 1,
        title: 'отчислением из',
        items: expelled_uni,
        type: 'text',
        value: 'text',
        editable: true,
        fieldName: 'expelled_university',
        required: true,
    },
]

const getForm = (): IInputArea => {
    return {
        title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: '',
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Прошу выдать мне справку об обучении в связи с:',
                type: 'radio',
                fieldName: 'reason',
                value: null,
                items: reasons,
                //TODO : полностью реализовать вложенные поля
                editable: true,
                required: true,
            },
            {
                title: 'Код направления подготовки',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'specialty_code',
                required: true,
            },
            {
                title: 'Наименование направления подготовки:',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'specialty_name',
                required: true,
            },
            {
                title: 'Форма обучения:',
                type: 'select',
                value: null,
                items: academic_form,
                editable: true,
                width: '100',
                fieldName: 'academic_form',
                required: true,
            },
            {
                title: 'Основа обучения:',
                type: 'select',
                value: null,
                editable: true,
                items: contract,
                width: '100',
                fieldName: 'contract_form',
                required: true,
            },
            {
                title: 'Предыдущий документ об образовании, выданный в году:',
                placeholder: 'Укажите год',
                type: 'number',
                fieldName: 'previous_doc_year',
                value: '',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: '',
                type: 'radio',
                fieldName: 'previous_doc_year_type',
                value: '',
                width: '100%',
                items: list,
                editable: true,
                required: true,
            },
            {
                title: 'В (название вуза в момент зачисления)(укажите тип документа, сданного при зачислении):',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'uni_name',
                required: true,
            },
            {
                title: 'зачислен(а) в году:',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'uni_year',
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        hint: 'При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс',
    }
}

export default getForm
