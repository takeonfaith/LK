import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getPassport = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Паспортные данные',
        hint: 'Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.',
        data: [
            // ??
            {
                fieldName: '',
                title: 'Вид документа',
                value: data?.pass_type,
                width: '100%',
            },
            { fieldName: 'pass_ser', title: 'Серия', value: data?.pass_ser ?? '', required: true },
            { fieldName: 'pass_num', title: 'Номер', value: data?.pass_num ?? '', required: true },
            { fieldName: 'pass_div', title: 'Кем выдан', value: data?.pass_div ?? '', required: true },
            {
                fieldName: 'pass_date',
                title: 'Дата выдачи',
                value: data?.pass_date ?? '',
                required: true,
                type: 'date',
            },
            {
                fieldName: 'pass_div_code',
                title: 'Код подразделения',
                value: data?.pass_div_code ?? '',
                required: true,
            },
            {
                fieldName: 'pass_citizenship',
                title: 'Гражданство',
                value: data?.pass_citizenship ?? '',
                required: false,
            },
        ],
        documents: { files: [], required: true, fieldName: 'passportFiles', maxFiles: 1 },
        confirmed: false,
    }
}

export default getPassport
