import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Отправить документы воинского учета',
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
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
        alert: 'Прикрепите сканы документов для воинского учета',
    }
}

export default getForm
