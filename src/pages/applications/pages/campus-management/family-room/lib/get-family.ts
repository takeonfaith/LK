import { IInputArea } from '@ui/input-area/model'

const familyType = [
    { id: 'wife', title: 'Жена' },
    { id: 'husband', title: 'Муж' },
    { id: 'son', title: 'Сын' },
    { id: 'daughter', title: 'Дочь' },
]

const getFamily = (): IInputArea => {
    return {
        title: 'Состав семьи',
        hint: 'Необходимо указать актуальную информацию о членах семьи',
        data: [],
        default: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: null,
                    type: 'select',
                    items: familyType,
                    required: true,
                    width: '100%',
                },
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },
                {
                    fieldName: 'bdate',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '30%',
                },
            ],
        ],
        addNew: true,
    }
}

export default getFamily
