import { IInputArea } from '@ui/input-area/model'

const familyType = [
    { id: 'not-chosen', title: 'Не выбрана' },
    { id: 'mother', title: 'Мать' },
    { id: 'father', title: 'Отец' },
    { id: 'wife', title: 'Жена' },
    { id: 'husband', title: 'Муж' },
    { id: 'sister', title: 'Сестра' },
    { id: 'brother', title: 'Брат' },
    { id: 'son', title: 'Сын' },
    { id: 'daughter', title: 'Дочь' },
]
const getFamily = (): IInputArea => {
    return {
        title: 'Состав семьи',
        hint: 'Необходимо указать актуальную информацию о ближайших родственниках',
        data: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: { id: 'not-chosen', title: 'Не выбрана' },
                    type: 'select',
                    items: familyType,
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
        default: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: { id: 'mother', title: 'Мать' },
                    type: 'select',
                    items: familyType,
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
        optionalCheckbox: {
            fieldName: 'family_none',
            title: 'Близкие родственники отсутствуют',
            value: false,
            required: true,
        },
        confirmed: false,
    }
}

export default getFamily