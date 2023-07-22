import { IInputArea } from '@ui/input-area/model'

const getBirthCertificate = (): IInputArea => {
    return {
        title: 'Свидетельство о рождении',
        data: [],
        documents: {
            files: [],
            fieldName: 'birthCertificate',
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getBirthCertificate
