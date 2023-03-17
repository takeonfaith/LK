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
                title: 'Начало отпуска до переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_old_start',
                editable: true,
                mask: true,
                required: true,
                //minValueInput: getDelayInDays(5),
            },
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Окончание отпуска до переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_old_end',
                editable: true,
                mask: true,
                required: true,
                //minValueInput: getDelayInDays(5),
            },
            {
                title: 'Начало отпуска после переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_new_start',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(5),
            },
            {
                title: 'Окончание отпуска после переноса:',
                type: 'date',
                value: '',
                fieldName: 'holiday_new_end',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(5),
            },
            {
                title: 'Причина',
                value: 'Семейные обстоятельства',
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
            // {
            //     title: 'Окончание отпуска после переноса:',
            //     type: 'date-interval',
            //     value: ['', ''],
            //     fieldName: 'holiday_new_end_test',
            //     editable: true,
            //     required: false,
            //     //minValueInput: getDelayInDays(5),
            // },
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
