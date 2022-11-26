import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Уточнение паспортных данных',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: dataUserApplication.phone,
                editable: true,
                required: true,
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
                title: 'Фамилия',
                type: 'text',
                fieldName: 'surname',
                value: dataUserApplication.surname,
                editable: true,
                required: true,
            },
            {
                title: 'Имя',
                type: 'text',
                fieldName: 'name',
                value: dataUserApplication.name,
                editable: true,
                required: true,
            },
            {
                title: 'Отчество',
                type: 'text',
                fieldName: 'patronimyc',
                value: dataUserApplication.patronymic,
                editable: true,
                required: true,
            },
            {
                title: 'Дата рождения',
                type: 'date',
                fieldName: 'birthday',
                value: dataUserApplication.birthday,
                editable: true,
                required: true,
            },
            {
                title: 'Иностранное гражданство',
                type: 'checkbox',
                value: false,
                editable: true,
                fieldName: 'foreigner',
            },
            {
                title: 'Серия',
                type: 'text',
                value: dataUserApplication.passSer,
                editable: true,
                fieldName: 'series',
                required: true,
            },
            {
                title: 'Номер',
                type: 'text',
                value: dataUserApplication.passNum,
                editable: true,
                fieldName: 'number',
                required: true,
            },
            {
                title: 'Кем выдан',
                type: 'textarea',
                value: dataUserApplication.passDiv,
                editable: true,
                fieldName: 'issued_by',
                required: true,
            },
            {
                title: 'Дата выдачи',
                type: 'date',
                value: dataUserApplication.passDate,
                editable: true,
                fieldName: 'date_of_issue',
                required: true,
            },
            // {
            //     title: 'Код подразделения',
            //     type: 'text',
            //     value: dataUserApplication.passSer,
            //     editable: true,
            //     fieldName: 'code',
            //     required: true,
            // },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
        hint: 'Проверьте правильность указанных паспортных данных. Если есть ошибки - исправьте их и отправьте заявку.',
    }
}

export default getForm
