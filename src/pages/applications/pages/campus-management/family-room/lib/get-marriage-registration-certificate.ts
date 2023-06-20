import { IInputArea } from '@ui/input-area/model'

const getMarriageRegistrationCertificate = (): IInputArea => {
    return {
        title: 'Свидетельство о регистрации брака',
        data: [],
        documents: {
            files: [],
            fieldName: 'marriageRegistrationCertificate',
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getMarriageRegistrationCertificate
