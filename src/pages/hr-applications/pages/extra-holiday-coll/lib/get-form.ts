import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление о предоставлении дополнительного оплачиваемого отпуска',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                mask: true,
                editable: true,
                required: true,
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'post',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Наименование структурного подразделения',
                value: null,
                fieldName: 'structure',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Основание для получения дополнительного отпуска',
                type: 'select',
                fieldName: 'reason',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Двое и более детей в возрасте до 14 лет',
                    },
                    {
                        id: 1,
                        title: 'Ребенок-инвалид в возрасте до 18 лет',
                    },
                    {
                        id: 2,
                        title: 'Одиноким матерям/отцам',
                    },
                    {
                        id: 3,
                        title: 'В случаях рождения ребенка, регистрации брака, смерти близких родственников',
                    },
                    {
                        id: 4,
                        title: 'Сопровождение детей младшего школьного возраста в школу в первый день учебного года',
                    },
                    {
                        id: 5,
                        title: 'Стаж работы в Университете от 20 до 25 лет',
                    },
                    {
                        id: 6,
                        title: 'Стаж работы в Университете от 25 до 30 лет',
                    },
                    {
                        id: 7,
                        title: 'Стаж работы в Университете от 30 до 35 лет',
                    },
                    {
                        id: 8,
                        title: 'Стаж работы в Университете свыше 35 лет',
                    },
                ],
            },
            {
                title: 'Период отпуска',
                type: 'date-interval',
                value: ['', ''],
                fieldName: 'coll-holiday1',
                editable: true,
                mask: true,
                required: true,
                diff: 0,
                specialType: 'collHoliday1',
                minValueInput: getDelayInDays(14),
            },
            {
                title: 'Период отпуска',
                type: 'date-interval',
                value: ['', ''],
                fieldName: 'coll-holiday2',
                editable: true,
                mask: true,
                required: true,
                diff: 1,
                specialType: 'collHoliday2',
                minValueInput: getDelayInDays(14),
            },
            {
                title: 'Период отпуска',
                type: 'date-interval',
                value: ['', ''],
                fieldName: 'coll-holiday3',
                editable: true,
                mask: true,
                required: true,
                diff: 2,
                specialType: 'collHoliday3',
                minValueInput: getDelayInDays(14),
            },
            {
                title: 'Период отпуска',
                type: 'date-interval',
                value: ['', ''],
                fieldName: 'coll-holiday4',
                editable: true,
                mask: true,
                required: true,
                diff: 3,
                specialType: 'collHoliday4',
                minValueInput: getDelayInDays(14),
            },
            {
                title: 'Период отпуска',
                type: 'date-interval',
                value: ['', ''],
                fieldName: 'coll-holiday5',
                editable: true,
                mask: true,
                required: true,
                diff: 4,
                specialType: 'collHoliday5',
                minValueInput: getDelayInDays(14),
            },
            {
                title: 'Место работы',
                type: 'select',
                fieldName: 'employment',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Основное',
                    },
                    {
                        id: 1,
                        title: 'По внутреннему совместительству',
                    },
                ],
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'holidayCollFiles',
            maxFiles: 10,
        },
    }
}

export default getForm
