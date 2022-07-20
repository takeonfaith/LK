import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Произвольный запрос',
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
                title: 'Прошу  внести  изменения в мои персональные данные и в дальнейшем именовать меня:(укажите полностью новые персональные данные - фамилию имя и отчество в именительном падеже)',
                type: 'text',
                fieldName: 'newFIO',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'в связи с (укажите причину)',
                type: 'text',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 10, required: false },
    }
}

export default getForm
