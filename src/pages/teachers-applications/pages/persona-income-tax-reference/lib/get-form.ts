import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка по форме 2-НДФЛ',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период',
                type: 'date-interval',
                value: ['', ''],
                editable: true,
                fieldName: 'period',
                required: true,
            },
            {
                title: 'Количество копий',
                value: null,
                fieldName: 'number_copies',
                type: 'number',
                editable: true,
                required: true,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions(),
            ...getAddressFields(),
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
