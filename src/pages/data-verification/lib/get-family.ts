import { TeacherDataVerification } from '@api/model'
import findCurrentInSelect from '@ui/input-area/lib/find-current-in-select'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'

const familyType = [
    { id: 'mother', title: 'Мать' },
    { id: 'father', title: 'Отец' },
    { id: 'wife', title: 'Жена' },
    { id: 'husband', title: 'Муж' },
    { id: 'sister', title: 'Сестра' },
    { id: 'brother', title: 'Брат' },
    { id: 'son', title: 'Сын' },
    { id: 'daughter', title: 'Дочь' },
]

const getFamily = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Состав семьи',
        hint: 'Необходимо указать актуальную информацию о ближайших родственниках',
        data: [
            ...(data.family?.map((field): IInputAreaData[] => {
                return [
                    {
                        fieldName: 'relation',
                        title: 'Степень родства',
                        value: findCurrentInSelect(familyType, field.relation),
                        type: 'select',
                        items: familyType,
                        width: '100%',
                    },
                    {
                        fieldName: 'fio',
                        title: 'ФИО',
                        value: field.fio,
                        required: true,
                        width: '40%',
                    },
                    {
                        fieldName: 'bdate',
                        title: 'Дата рождения',
                        value: field.bdate,
                        type: 'date',
                        required: true,
                        width: '30%',
                    },
                ]
            }) ?? []),
        ],
        default: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: null,
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
            value: data.family_none,
            required: true,
        },
        confirmed: false,
    }
}

export default getFamily
