import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const ReasonProvidingOptions = [
    { id: 0, title: 'медицинские показания' },
    { id: 1, title: 'призыв на военную службу' },
    { id: 2, title: 'обстоятельства личного характера' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Предоставление академического отпуска',
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
                title: 'Срок предоставления c:',
                type: 'date',
                fieldName: 'time-before',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                fieldName: 'time-after',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Причина предоставления',
                type: 'select',
                fieldName: 'reason',
                width: '100',
                value: null,
                required: true,
                editable: true,
                items: ReasonProvidingOptions,
            },
            {
                title: 'Академический отпуск по обстоятельствам личного характера необходим по следующей(-им) причине(-ам):',
                type: 'textarea',
                fieldName: 'pers-cases',
                value: '',
                editable: true,
                placeholder: 'укажите причины личного характера',
                specialType: 'personalNature',
                required: true,
            },
            {
                title: 'Количество листов подтверждающих документов',
                type: 'text',
                fieldName: 'num_sheets',
                value: null,
                editable: true,
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
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
    }
}

export default getForm
