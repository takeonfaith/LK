import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Запрос на изменение персональных данных',
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
                title: 'Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:',
                fieldName: 'new_personal_data',
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
