import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Произвольный запрос',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Выберите структурное подразделение для обращения',
                type: 'radio',
                fieldName: 'stuctural_subdivision',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: 'Отделение «На Большой Семеновской» Ул.Большая Семеновская, 38; ауд.В - 107. Тел. (495) 223-05 - 23, доб. 1105, 1175; crs- bs@mospolytech.ru',
                    },
                    {
                        id: 1,
                        title: 'Отделение «На Автозаводской» ул.Автозаводская, 16, ауд. 2315. Тел. (495) 223-05 - 23, доб. 2256, 2257, 2285, 2240; crs- av@mospolytech.ru',
                    },
                    {
                        id: 2,
                        title: 'Отделение «На Павла Корчагина» Ул.Павла Корчагина, 22, ауд. 213. Тел. (495) 223-05 - 23, доб. 3230, 3110, 3114, 3043, 3044, 4054, 4068; crs- pk@mospolytech.ru',
                    },
                    {
                        id: 3,
                        title: 'Отделение «На Прянишникова» ул.Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05 - 23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs- pryaniki@mospolytech.ru, crs - mikhalka@mospolytech.ru',
                    },
                    {
                        id: 4,
                        title: 'Договорной отдел г. Москва, ул. Большая Семеновская, д. 38, ауд. А-303, тел. (495) 223-05-40, (495) 223-05-23 доб. 1549, 1562, 1563, 1564, 1550, 1247; e-mail: oplata@mospolytech.ru',
                    },
                    {
                        id: 5,
                        title: 'Мобилизационный отдел г. Москва, ул. Б. Семёновская, д. 38, корп. А, кабинеты А-324, 325. Тел.: (495) 223-05-23, доб. 1225',
                    },
                    {
                        id: 6,
                        title: 'Профсоюзная организация работников и обучающихся 107023, г. Москва, ул. Б. Семеновская, д. 38, аудитория В-202. Тел. 495 223-05-31',
                    },
                    {
                        id: 7,
                        title: 'Центра практик и трудоустройства 107023, г. Москва, ул. Б. Семёновская, д. 38, корпус «А», ауд. А - 319',
                    },
                ],
            },
            {
                title: 'Тематика обращения',
                type: 'textarea',
                fieldName: 'subject_appeal',
                value: '',
                editable: true,
            },
            {
                title: 'Суть обращения',
                type: 'textarea',
                fieldName: 'essence_appeal',
                value: '',
                editable: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
