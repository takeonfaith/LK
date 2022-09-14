import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Произвольный запрос',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            // TODO Подразделения брать из divisions_all и отправлять id подразделения
            {
                title: 'Выберите структурное подразделение для обращения',
                type: 'radio',
                fieldName: 'structural_subdivision',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: 'Договорной отдел г. Москва, ул. Большая Семеновская, д. 38, ауд. А-303, тел. (495) 223-05-40, (495) 223-05-23 доб. 1549, 1562, 1563, 1564, 1550, 1247; e-mail: oplata@mospolytech.ru',
                    },
                    {
                        id: 1,
                        title: 'Мобилизационный отдел г. Москва, ул. Б. Семёновская, д. 38, корп. А, кабинеты А-324, 325. Тел.: (495) 223-05-23, доб. 1225',
                    },
                    {
                        id: 2,
                        title: 'Отделение «На Автозаводской» центра по работе со студентами ул. Автозаводская, 16, ауд. 2315. Тел. (495) 223-05-23, доб. 2256, 2257, 2285, 2240; crs-av@mospolytech.ru',
                    },
                    {
                        id: 3,
                        title: 'Отделение «На Большой Семеновской» центра по работе со студентами Ул. Большая Семеновская, 38; ауд. В-107. Тел. (495) 223-05-23, доб. 1105, 1175; crs-bs@mospolytech.ru',
                    },
                    {
                        id: 4,
                        title: 'Отделение «На Павла Корчагина» центра по работе со студентами Ул. Павла Корчагина, 22, ауд. 213. Тел. (495) 223-05-23, доб. 3230, 3110, 3114, 3043, 3044, 4054, 4068; crs-pk@mospolytech.ru',
                    },
                    {
                        id: 5,
                        title: 'Отделение «На Прянишникова» центра по работе со студентами ул. Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05-23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs-pryaniki@mospolytech.ru, crs-mikhalka@mospolytech.ru',
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
                type: 'text',
                fieldName: 'subject_appeal',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Суть обращения',
                type: 'textarea',
                fieldName: 'essence ',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
        alert: 'Данный запрос позволит отправить Ваш запрос в любое доступное структурное подразделение. Используйте эту функцию только при крайней необходимости.',
        hint: 'При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс.',
    }
}

export default getForm
