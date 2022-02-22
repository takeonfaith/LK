import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getArmy = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Воинская служба',
        hint: 'При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву)',
        data: [],
        documents: {
            files: [],
            required: true,
            checkboxCondition: 'reverse',
            fieldName: 'armyFiles',
        },
        optionalCheckbox: {
            fieldName: 'army_doc_none',
            title: 'Документ о воинской службе отсутствует',
            value: data?.army_doc_none,
            required: true,
        },
        confirmed: false,
    }
}

export default getArmy
