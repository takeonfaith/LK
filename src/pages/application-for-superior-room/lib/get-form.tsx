import { SuperiorRoom } from '@api/model'
import { CheckboxDocs, IInputArea } from '@ui/input-area/model'
import React from 'react'

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
                title: 'Я проживаю в комнате повышенной комфортности в настоящее время',
                value: false,
                fieldName: 'inSuperiorRoom',
                type: 'checkbox',
                editable: true,
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
        alert: 'Подача заявок открыта с 16 марта по 21 марта включительно',
        hint: (
            <>
                Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон
                и адрес электронной почты) и при необходимости внесите изменения.
                <br />
                <br />
                Если Вы уже проживаете в комнате повышенной комфортности и не планируете переселиться, то подавать
                заявку повторно не требуется
            </>
        ),
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
