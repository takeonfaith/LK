import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { MethodObtainingOptions } from '@entities/applications/consts'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'
import getAddressFields from '@features/applications/lib/get-address-fields'

const documentOptions = [
    { id: 0, title: 'Лицензия на право ведения образовательной деятельности' },
    { id: 1, title: 'Свидетельство о государственной аккредитации' },
    {
        id: 3,
        title: 'Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации',
    },
]

const universityOptions = [
    { id: 0, title: 'Московский государственный машиностроительный университет» (МАМИ)' },
    { id: 1, title: 'Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)' },
    { id: 2, title: 'Московский государственный вечерний металлургический институт» (МГВМИ)' },
    { id: 3, title: 'Московский государственный университет инженерной экологии» (МГУИЭ)' },
    { id: 4, title: 'Московский государственный индустриальный университет» (МГИУ)' },
    { id: 5, title: 'Московский государственный университет печати имени Ивана Фёдорова» (МГУП)' },
]

const NumberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
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
                title: 'Документ',
                type: 'select',
                width: '100',
                fieldName: 'document',
                value: null,
                editable: true,
                required: true,
                items: documentOptions,
            },
            {
                title: 'Университет',
                type: 'select',
                fieldName: 'university',
                value: null,
                editable: true,
                required: true,
                width: '100',
                items: universityOptions,
            },
            {
                title: 'Период',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'period',
                required: true,
            },
            {
                title: 'Количество копий',
                type: 'select',
                width: '100',
                fieldName: 'number_copies',
                value: null,
                editable: true,
                required: true,
                items: NumberOfCopiesOptions,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
