import { TeacherDataVerification } from '@api/model'
import findCurrentInSelect from '@ui/input-area/lib/find-current-in-select'
import { IInputArea, IInputAreaData } from '@ui/input-area/model'

const languageItems = [
    { id: 'a', title: 'Читаю и перевожу со словарем' },
    { id: 'b', title: 'Читаю и могу объясняться' },
    { id: 'с', title: 'Владею свободно' },
]

const getLanguage = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Знание иностранных языков',
        hint: 'Необходимо указать иностранные языки и степень владения ими',
        data: [
            ...(data.languages?.map((field): IInputAreaData[] => {
                return [
                    {
                        fieldName: 'language',
                        title: 'Язык',
                        required: true,
                        value: field.language,
                    },
                    {
                        fieldName: 'level',
                        title: 'Уровень владения',
                        value: findCurrentInSelect(languageItems, field.level),
                        type: 'select',
                        items: languageItems,
                        width: '100%',
                    },
                ]
            }) ?? []),
        ],
        default: [
            [
                {
                    fieldName: 'language',
                    title: 'Язык',
                    required: true,
                    value: 'Английский',
                },
                // ??
                {
                    fieldName: 'level',
                    title: 'Уровень владения',
                    value: languageItems[0],
                    type: 'select',
                    items: languageItems,
                    width: '100%',
                },
            ],
        ],
        addNew: true,
        confirmed: false,
    }
}

export default getLanguage
