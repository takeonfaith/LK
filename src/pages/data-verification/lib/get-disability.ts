import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getDisability = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Инвалидность',
        hint: 'Необходимо приложить скан-копию справки об инвалидности',
        data: [],
        optionalCheckbox: {
            fieldName: 'is_not_invalid',
            value: data?.is_not_invalid,
            title: 'Нет документа об инвалидности',
            required: true,
        },
        documents: { files: [], required: true, checkboxCondition: 'reverse', fieldName: 'invalidFiles', maxFiles: 1 },
        confirmed: false,
    }
}

export default getDisability
