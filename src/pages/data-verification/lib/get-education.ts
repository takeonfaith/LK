import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getEducation = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Образование',
        hint: 'Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения',
        data: [
            // ??
            {
                fieldName: '',
                title: 'Вид документа',
                type: 'select',
                items: [
                    { id: 0, title: 'Аттестат' },
                    { id: 1, title: 'Аттестат с отличием' },
                    { id: 2, title: 'Диплом' },
                    { id: 3, title: 'Диплом дубликат' },
                    { id: 4, title: 'Диплом с отличием' },
                    { id: 5, title: 'Свидетельство' },
                    { id: 6, title: 'Удостоверение' },
                    { id: 7, title: 'Сертификат' },
                ],
                value: { id: 0, title: 'Диплом' },
                width: '100%',
            },
            // ??
            {
                fieldName: '',
                title: 'Уровень образования',
                value: { id: 3, title: 'Высшее образование – бакалавриат' },
                type: 'select',
                width: '100%',
                items: [
                    { id: 0, title: 'Дополнительное профессиональное образование' },
                    { id: 1, title: 'Среднее общее образование' },
                    { id: 2, title: 'Среднее профессиональное образование' },
                    { id: 3, title: 'Высшее образование – бакалавриат' },
                    { id: 4, title: 'Высшее образование - специалитет, магистратура' },
                    { id: 5, title: 'Профессиональное обучение' },
                    { id: 6, title: 'Начальное профессиональное образование' },
                    { id: 7, title: 'Послевузовское образование' },
                ],
            },
            { fieldName: 'edu_org', title: 'Учебное заведение', value: data?.edu_org ?? '', required: true },
            { fieldName: 'edu_level', title: 'Квалификация', value: data?.edu_level ?? '', required: true },
            // { fieldName: 'edu_doc_ser', title: '', value: data?.edu_doc_ser ?? '', required: true },
            { fieldName: 'edu_doc_num', title: 'Серия и номер', value: data?.edu_doc_num ?? '', required: true },
            // TODO: should be year
            {
                fieldName: 'edu_year',
                title: 'Дата выдачи',
                value: data?.edu_year ?? '',
                type: 'date',
                required: false,
            },
        ],
        documents: { files: [], required: true, fieldName: 'educationFiles' },
        confirmed: false,
    }
}

export default getEducation
