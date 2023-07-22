import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'ФИО ребенка',
                value: null,
                fieldName: 'child_fio',
                mask: true,
                editable: true,
                required: true,
            },
            {
                title: 'Дата рождения ребенка',
                type: 'date',
                value: '',
                editable: true,
                fieldName: 'birth_child',
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
