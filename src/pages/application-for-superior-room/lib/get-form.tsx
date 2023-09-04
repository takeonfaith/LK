import React from 'react'
import { SuperiorRoom } from '@api/model'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'
import { SelectPage } from '@features/select'

const mAllocationTypes = [
    { id: 0, title: 'Один в комнате' },
    { id: 1, title: 'Двое в комнате' },
]

const bgAllocationTypes = [
    { id: 1, title: 'Двое в комнате' },
    { id: 2, title: 'Трое в комнате' },
]

const dormLocations = [
    { id: 0, title: 'ул. Михалковская, д. 7, корп. 3' },
    { id: 1, title: 'ул. Бориса Галушкина, д. 9' },
]

// const extracurricularActivities: CheckboxDocs[] = [
//     {
//         value: false,
//         title: 'Общественная',
//         files: [],
//         maxFiles: 10,
//         required: false,
//         fieldName: 'society',
//         checkboxCondition: 'straight',
//     },
//     {
//         value: false,
//         title: 'Научная',
//         files: [],
//         maxFiles: 10,
//         required: false,
//         fieldName: 'science',
//         checkboxCondition: 'straight',
//     },
//     {
//         value: false,
//         title: 'Спортивная',
//         files: [],
//         maxFiles: 10,
//         required: false,
//         fieldName: 'sport',
//         checkboxCondition: 'straight',
//     },
//     {
//         value: false,
//         title: 'Творческая',
//         files: [],
//         maxFiles: 10,
//         required: false,
//         fieldName: 'creativity',
//         checkboxCondition: 'straight',
//     },
// ]

const getForm = (data: SuperiorRoom, form: IInputArea | null): IInputArea => {
    const { fio, phone, email } = data
    const dormId = ((form?.data[3] as IInputAreaData)?.value as SelectPage)?.id
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
                value: (form?.data[1] as IInputAreaData)?.value ?? phone,
                fieldName: 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                required: true,
                mask: true,
            },
            {
                title: 'Email',
                value: (form?.data[2] as IInputAreaData)?.value ?? email,
                fieldName: 'email',
                type: 'email',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес общежития',
                value: (form?.data[3] as IInputAreaData)?.value ?? null,
                fieldName: 'address',
                type: 'select',
                items: dormLocations,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Приоритетный тип размещения',
                value: null,
                fieldName: 'allocation',
                type: 'select',
                items: dormId === 1 ? bgAllocationTypes : mAllocationTypes,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Альтернативный тип размещения',
                value: null,
                fieldName: 'alternative-allocation',
                type: 'select',
                items: dormId === 1 ? bgAllocationTypes : mAllocationTypes,
                width: '100%',
                editable: true,
                required: true,
            },
            // {
            //     title: 'Я проживаю в комнате повышенной комфортности в настоящее время',
            //     value: false,
            //     fieldName: 'inSuperiorRoom',
            //     type: 'checkbox',
            //     editable: true,
            // },
            // {
            //     title: 'Участие во внеучебной деятельности',
            //     value: null,
            //     fieldName: 'extracurricular',
            //     type: 'checkbox-docs',
            //     items: extracurricularActivities,
            //     width: '100%',
            //     editable: true,
            // },
            {
                title: 'Дополнительная информация',
                value: (form?.data[6] as IInputAreaData)?.value ?? '',
                fieldName: 'info',
                type: 'textarea',
                editable: true,
                placeholder: 'Желание проживать с другом и т.д.',
            },
        ],
        alert: <>Подача заявок открыта с 12:00 6 сентября до 12:00 7 сентября!</>,
        hint: 'Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.',
        optionalCheckbox: {
            title: `С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)`,
            value: false,
            fieldName: '',
            editable: true,
        },
        links: [
            {
                title: 'Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)',
                link: 'https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf',
                type: 'document',
            },
            {
                title: 'Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)',
                link: 'https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf',
                type: 'document',
            },
        ],
    }
}

export default getForm
