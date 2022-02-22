import { IInputArea } from '@ui/input-area/model'

const getLanguage = (): IInputArea => {
    return {
        title: 'Знание иностранных языков',
        hint: 'Необходимо указать иностранные языки и степень владения ими',
        data: [
            [
                {
                    fieldName: 'language',
                    title: 'Язык',
                    required: true,
                    value: 'Английский',
                },
                {
                    fieldName: 'level',
                    title: 'Уровень владения',
                    value: { id: 'a', title: 'Читаю и перевожу со словарем' },
                    type: 'select',
                    items: [
                        { id: 'a', title: 'Читаю и перевожу со словарем' },
                        { id: 'b', title: 'Читаю и могу объясняться' },
                        { id: 'с', title: 'Владею свободно' },
                    ],
                    width: '100%',
                },
            ],
        ],
        default: [
            [
                {
                    fieldName: '',
                    title: 'Язык',
                    required: true,
                    value: 'Английский',
                },
                // ??
                {
                    fieldName: '',
                    title: 'Уровень владения',
                    value: { id: 'a', title: 'Читаю и перевожу со словарем' },
                    type: 'select',
                    items: [
                        { id: 'a', title: 'Читаю и перевожу со словарем' },
                        { id: 'b', title: 'Читаю и могу объясняться' },
                        { id: 'с', title: 'Владею свободно' },
                    ],
                    width: '100%',
                },
            ],
        ],
        addNew: true,
        confirmed: false,
    }
}

export default getLanguage
