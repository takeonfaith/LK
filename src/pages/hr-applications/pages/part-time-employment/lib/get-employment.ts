import { IInputArea } from '@ui/input-area/model'

const getEmployment = (): IInputArea => {
    return {
        title: 'Документы, необходимые для трудоустройства:',
        data: [],
        documents: {
            files: [],
            required: true,
            fieldName: 'employmentFiles',
            maxFiles: 10,
        },
    }
}

export default getEmployment
