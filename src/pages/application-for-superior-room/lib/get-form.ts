import { SuperiorRoom } from '@api/model'
import { CheckboxDocs, IInputArea } from '@ui/input-area/model'

const allocationTypes = [
    { id: 0, title: 'Один в комнате' },
    { id: 1, title: 'Двое в комнате' },
    { id: 2, title: 'Один в блоке' },
]

const dormLocations = [
    { id: 0, title: 'ул. Михалковская, д. 7, корп. 3' },
    { id: 1, title: 'ул. Малая Семеновская, д. 12' },
]

const extracurricularActivities: CheckboxDocs[] = [
    {
        value: false,
        title: 'Общественная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'society',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Научная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'science',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Спортивная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'sport',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Творческая',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'creativity',
        checkboxCondition: 'straight',
    },
]

const getForm = (data: SuperiorRoom): IInputArea => {
    const { fio, phone, email } = data

    return {
        title: 'Заявка на комнату повышенной комфортности',
        data: [
            {
                title: 'ФИО',
                value: fio,
                fieldName: 'fio',
                width: '100%',
                editable: false,
            },
            {
                title: 'Телефон',
                value: phone,
                fieldName: 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                required: true,
                mask: true,
            },
            {
                title: 'Email',
                value: email,
                fieldName: 'email',
                type: 'email',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Приоритетный тип размещения',
                value: null,
                fieldName: 'allocation',
                type: 'select',
                items: allocationTypes,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес общежития',
                value: null,
                fieldName: 'address',
                type: 'select',
                items: dormLocations,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Участие во внеучебной деятельности',
                value: null,
                fieldName: 'extracurricular',
                type: 'checkbox-docs',
                items: extracurricularActivities,
                width: '100%',
                editable: true,
            },
            {
                title: 'Дополнительная информация',
                value: '',
                fieldName: 'info',
                type: 'textarea',
                editable: true,
                placeholder: 'Желание проживать с другом и т.д.',
            },
        ],
        hint: 'Загрузите документы(допускаются файлы pdf размером не больше 10мб каждый',
        optionalCheckbox: { title: 'С приказом об оплате ознакомлен', value: false, fieldName: '', editable: true },
    }
}

export default getForm
