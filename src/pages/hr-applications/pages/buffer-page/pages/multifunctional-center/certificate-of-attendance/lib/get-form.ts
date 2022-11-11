import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import findCurrentInSelect from '@ui/input-area/lib/find-current-in-select'
import { MethodObtainingOptions } from '@entities/applications/consts'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'
import getAddressFields from '@features/applications/lib/get-address-fields'
// const expelled_uni = [
//     {
//         title: 'отчислением из',
//         type: 'text',
//         value: '',
//         editable: true,
//         fieldName: 'expelled_university',
//         required: true,
//     },
//     {
//         title: 'в',
//         type: 'text',
//         value: '',
//         editable: true,
//         fieldName: 'year',
//         required: true,
//     },
//     {
//         title: 'году',
//     },
// ]
const academic_form = [
    { id: 0, title: 'Очная' },
    { id: 1, title: 'Заочная' },
    { id: 2, title: 'Очно-заочная' },
    { id: 3, title: 'Очная сокращённая' },
    { id: 4, title: 'Заочная сокращённая' },
    { id: 5, title: 'Очно-заочная сокращённая' },
]
const contract = [
    { id: 0, title: 'Бюджетная' },
    { id: 1, title: 'С оплатой обучения' },
]
const listPreviousDoc = [
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
    },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
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
                value: dataUserApplication.phone,
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
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: MethodObtainingOptions,
            },
            {
                title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
                type: 'radio',
                fieldName: 'structural-subdivision',
                value: null,
                editable: true,
                items: getFormattedDivisions(dataUserApplication.divisions_crs),
                isSpecificRadio: true,
                specialType: 'personalMethod',
            },
            ...getAddressFields(),
            {
                title: 'Прошу выдать мне справку об обучении в связи с:',
                type: 'select',
                width: '100',
                fieldName: 'reason',
                value: null,
                items: reasons,
                editable: true,
                required: true,
            },
            {
                title: 'Код направления подготовки',
                type: 'text',
                value: dataUserApplication.specialty_code,
                editable: true,
                fieldName: 'specialty_code',
                required: true,
            },
            {
                title: 'Наименование направления подготовки:',
                type: 'text',
                value: dataUserApplication.specialty_name,
                editable: true,
                fieldName: 'specialty_name',
                required: true,
            },
            {
                title: 'Форма обучения:',
                type: 'select',
                value: findCurrentInSelect(academic_form, dataUserApplication.educationForm),
                items: academic_form,
                editable: true,
                width: '100',
                fieldName: 'academic_form',
                required: true,
            },
            {
                title: 'Основа обучения:',
                type: 'select',
                value: findCurrentInSelect(contract, dataUserApplication.finance),
                editable: true,
                items: contract,
                width: '100',
                fieldName: 'contract_form',
                required: true,
            },
            {
                title: 'Предыдущий документ об образовании',
                placeholder: 'Укажите год выдачи',
                type: 'number',
                fieldName: 'previous_doc_year',
                value: '',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Тип документа об образовании',
                type: 'select',
                fieldName: 'previous_doc_year_type',
                value: '',
                width: '100%',
                items: listPreviousDoc,
                editable: true,
                required: true,
            },
            {
                title: 'Наименование вуза в момент зачисления',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'uni_name',
                required: true,
            },
            {
                title: 'Год зачисления',
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
    }
}

export default getForm
