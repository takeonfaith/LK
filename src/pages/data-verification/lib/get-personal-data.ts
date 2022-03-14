import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getPersonalData = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Личные данные',
        hint: 'Необходимо приложить скан-копию документа, подтверждающего изменения',
        data: [
            {
                fieldName: 'fio',
                title: 'ФИО',
                value: data?.fio ?? '',
                required: true,
            },
            {
                fieldName: 'sex',
                title: 'Пол',
                value: data?.sex ?? '',
                required: true,
            },
            {
                fieldName: 'bdate',
                title: 'Дата рождения',
                value: data?.bdate ?? '',
                required: true,
                type: 'date',
            },
            {
                fieldName: 'bplace',
                title: 'Место рождения',
                value: data?.bplace ?? '',
                required: true,
            },
        ],
        documents: { files: [], required: true, fieldName: 'personalFiles', maxFiles: 2 },
        confirmed: false,
    }
}

export default getPersonalData
