import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
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
                value: '',
                fieldName: 'holiday_start',
                editable: true,
                mask: true,
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
                value: '',
                fieldName: 'holiday_end',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(5),
            },
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
                        title: 'Отпуск по беременности и родам (декретный отпуск)',
                    },
                    {
                        id: 4,
                        title: 'Отпуск по уходу за ребенком',
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
            required: false,
            fieldName: 'holidayFiles',
            maxFiles: 10,
        },
    }
}

export default getForm
