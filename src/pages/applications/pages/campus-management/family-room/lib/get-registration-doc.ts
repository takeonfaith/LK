import { IInputArea } from '@ui/input-area/model'

const getRegistrationDoc = (): IInputArea => {
    return {
        title: 'Регистрация заявителя',
        data: [],
        documents: {
            files: [],
            fieldName: 'registrationApplicant',
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getRegistrationDoc
