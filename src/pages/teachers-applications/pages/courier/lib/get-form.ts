import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Курьер',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
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
                fieldName: 'full_delivery_address',
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
                fieldName: 'phone_receiving_party',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Вид документа',
                value: '',
                fieldName: 'type_document',
                placeholder: '(конверт, пакет, коробка и т.п.) и ее примерные размеры',
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
                title: 'Интервал доставки',
                value: '',
                fieldName: 'type_document',
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
