import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

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
            {
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: 'На электронную почту',
                    },
                    {
                        id: 1,
                        title: 'Получить в МФЦ/отделе',
                    },
                ],
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
