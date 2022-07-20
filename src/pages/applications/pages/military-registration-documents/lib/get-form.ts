import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Отправить документы воинского учета',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
        alert: 'Прикрепите сканы документов для воинского учета',
    }
}

export default getForm
