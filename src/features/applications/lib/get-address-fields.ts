import { IInputAreaData } from '@ui/input-area/model'

const getAddressFields = (): IInputAreaData[] => {
    return [
        {
            title: 'Название улицы, номер дома, номер квартиры',
            value: '',
            fieldName: 'post_street',
            editable: true,
            required: true,
            specialType: 'postMethod',
        },
        {
            title: 'Название населенного пункта (города, поселка и т.п.)',
            value: '',
            fieldName: 'post_city',
            editable: true,
            required: true,
            specialType: 'postMethod',
        },
        {
            title: 'Название района',
            value: '',
            fieldName: 'post_district',
            editable: true,
            specialType: 'postMethod',
        },
        {
            title: 'Название республики, края, области, автономного округа (области)',
            value: '',
            fieldName: 'post_region',
            editable: true,
            required: true,
            specialType: 'postMethod',
        },
        {
            title: 'Название страны',
            value: '',
            fieldName: 'post_country',
            editable: true,
            required: true,
            specialType: 'postMethod',
        },
        {
            title: 'Индекс',
            value: '',
            fieldName: 'post_index',
            editable: true,
            required: true,
            specialType: 'postMethod',
        },
    ]
}

export default getAddressFields
