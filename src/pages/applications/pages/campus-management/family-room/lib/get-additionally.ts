import { IInputArea } from '@ui/input-area/model'

const getAdditionally = (): IInputArea => {
    return {
        title: 'Файлы',
        data: [],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
        optionalCheckbox: {
            fieldName: 'is_correct_registration',
            value: false,
            title: 'Я подтверждаю, что никто из членов семьи не имеет прописки в пределах трассы А-107',
            required: true,
        },
    }
}

export default getAdditionally
