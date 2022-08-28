import { IInputArea } from '@ui/input-area/model'

const getAdditionally = (): IInputArea => {
    return {
        title: 'Файлы',
        data: [],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
    }
}

export default getAdditionally
