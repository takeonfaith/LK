import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'

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
                value: '',
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
