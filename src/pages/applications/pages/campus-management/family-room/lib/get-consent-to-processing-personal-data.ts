import { IInputArea } from '@ui/input-area/model'

const getConsentToProcessingPersonalData = (): IInputArea => {
    return {
        title: 'Согласие на обработку персональных данных членов семьи',
        data: [],
        documents: {
            files: [],
            fieldName: 'consentToProcessingPersonalData',
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getConsentToProcessingPersonalData
