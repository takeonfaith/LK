import { UserApplication, WorkerApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
import { IInputArea } from '@ui/input-area/model'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
    startDate: string | null,
    setStartDate: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication

    const holidayStartDate = !!startDate ? startDate : new Date().toISOString()

    return {
        title: 'Заявление о предоставлении отпуска',
        data: [
            {
                title: 'ФИО',
                type: 'simple-text',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                visible: true,
            },
            {
                title: 'Должность',
                type: 'simple-text',
                fieldName: 'post',
                value: dataWorkerApplication[currentIndex].jobTitle.toString(),
                visible: true,
            },
            {
                title: 'Структурное подразделение',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].subDivision.toString(),
                fieldName: 'subDivision',
                visible: true,
            },
            // {
            //     title: 'Период отпуска:',
            //     type: 'date-interval',
            //     value: ['', ''],
            //     fieldName: 'holiday_dates',
            //     editable: true,
            //     mask: true,
            //     required: true,
            //     minValueInput: getDelayInDays(5),
            // },
            {
                title: 'Начало отпуска:',
                type: 'date',
                value: null,
                fieldName: 'holiday_start',
                editable: true,
                mask: true,
                onChange: (value) => {
                    setStartDate(value)
                },
                required: true,
                minValueInput: getDelayInDays(5),
            },
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Окончание отпуска:',
                type: 'date',
                value: null,
                fieldName: 'holiday_end',
                editable: true,
                mask: true,
                required: true,
                maxValueInput: getDelayInDays(5, holidayStartDate),
            },
            // {
            //     title: 'Окончание отпуска:',
            //     type: 'date-interval',
            //     value: ['', ''],
            //     fieldName: 'holiday_end',
            //     editable: true,
            //     mask: true,
            //     required: true,
            //     minValueInput: getDelayInDays(5),
            //     maxValueInput: getDelayInDays(5),
            // },
            {
                title: 'Вид отпуска',
                type: 'select',
                fieldName: 'holiday_type',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Ежегодный (основной) оплачиваемый отпуск',
                    },
                    {
                        id: 1,
                        title: 'Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)',
                    },
                    {
                        id: 2,
                        title: 'Отпуск без сохранения заработной платы',
                    },
                    {
                        id: 3,
                        title: 'Отпуск по коллективному договору',
                    },
                ],
            },
            {
                title: 'Категория для предоставления отпуска',
                type: 'select',
                fieldName: 'holiday_type_coll',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                specialType: 'collDog',
                items: [
                    {
                        id: 0,
                        title: '3 Работникам, имеющим двоих и более детей в возрасте до 14 лет',
                    },
                    {
                        id: 1,
                        title: '5 Работникам, имеющим ребенка-инвалида в возрасте до 18 лет',
                    },
                    {
                        id: 2,
                        title: '5 Работникам, имеющим ребенка-инвалида в возрасте до 18 лет',
                    },
                    {
                        id: 3,
                        title: '3 Работникам в случаях рождения ребенка, регистрации брака, смерти близких родственников',
                    },
                    {
                        id: 4,
                        title: '1 Работникам, сопровождающим детей младшего школьного возраста в школу в первый день учебного года',
                    },
                    {
                        id: 5,
                        title: '1 Работникам, имеющим общий стаж работы в Университете от 20 до 25 лет',
                    },
                    {
                        id: 6,
                        title: '2 Работникам, имеющим общий стаж работы в Университете от 25 до 30 лет',
                    },
                    {
                        id: 7,
                        title: '3 Работникам, имеющим общий стаж работы в Университете от 30 до 35 лет',
                    },
                    {
                        id: 8,
                        title: '4 Работникам, имеющим общий стаж работы в Университете свыше 35 лет',
                    },
                ],
            },
        ],
    }
}

export default getForm
