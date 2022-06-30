import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Запрос на изменение персональных данных',
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
            {
                title: 'Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:',
                fieldName: 'newPersonalData',
                value: '',
                editable: true,
                required: true,
                placeholder: 'Укажите новые фамилия имя и отчество в именительном падеже',
            },
            {
                title: 'По причине',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
            },
        ],
        alert: 'Загрузите документы, подтверждающие изменение персональных данных',
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
    }
}

export default getForm
