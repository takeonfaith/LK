import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Курьер',
        data: [
            {
                title: 'E-mail',
                type: 'email',
                value: '',
                editable: true,
                fieldName: 'email_private',
                required: true,
            },
            {
                title: 'Личный мобильный телефон',
                type: 'tel',
                value: '',
                fieldName: 'tel_mob_private',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'post',
                editable: true,
                required: true,
            },
            {
                title: 'Наименование организации',
                value: null,
                fieldName: 'NameOrganization',
                editable: true,
                required: true,
            },
            {
                title: 'Полный адрес доставки',
                type: 'textarea',
                fieldName: 'fullDeliveryAddress',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Контактное лицо принимающей стороны',
                value: null,
                fieldName: 'fio_receiving_party',
                editable: true,
                required: true,
            },
            {
                title: 'Контактный телефон принимающей стороны',
                type: 'tel',
                value: '',
                fieldName: 'tel_receiving_party',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Вид документа',
                value: '',
                fieldName: 'type_document',
                editable: true,
                required: true,
            },
            {
                title: 'Количество документов',
                type: 'number',
                value: '',
                fieldName: 'number_document',
                editable: true,
                required: true,
            },
            {
                title: 'Дата доставки',
                type: 'date',
                value: '',
                fieldName: 'delivery_date',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
