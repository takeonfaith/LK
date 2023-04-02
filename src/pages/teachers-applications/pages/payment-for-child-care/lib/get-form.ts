import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import { MethodObtainingOptions } from '@entities/applications/consts'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'
import getAddressFields from '@features/applications/lib/get-address-fields'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период справки',
                type: 'date',
                value: '',
                editable: true,
                fieldName: 'period',
                required: true,
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
            {
                title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
                type: 'radio',
                fieldName: 'structural-subdivision',
                value: '',
                editable: true,
                items: getFormattedDivisions(data.divisions_crs),
                isSpecificRadio: true,
                specialType: 'personalMethod',
            },
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
