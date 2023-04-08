import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import { MethodObtainingOptions } from '@entities/applications/consts'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Копия трудовой книжки',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
            {
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: MethodObtainingOptions,
            },
            ...getTeacherSubdivisions(),
            ...getAddressFields(),
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
