import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'
import { getLastYearForPeriod } from '@pages/teachers-applications/lib/get-last-year-for-period'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период',
                type: 'select',
                value: null,
                fieldName: 'period',
                editable: true,
                width: '100',
                required: true,
                items: getLastYearForPeriod(),
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
