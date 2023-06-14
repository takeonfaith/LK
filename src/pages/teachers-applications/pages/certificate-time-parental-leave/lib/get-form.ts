import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions(),
            ...getAddressFields(),
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
