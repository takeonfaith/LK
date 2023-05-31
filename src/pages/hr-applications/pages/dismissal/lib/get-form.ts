import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'
//import { SelectPage } from '@features/select'
//import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
// const parseJobs = (dataWorkerApplication: WorkerApplication[]): SelectPage[] => {
//     return dataWorkerApplication.map((item, key) => {
//         return { id: key, title: item.jobTitle }
//     })
// }
const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на увольнение',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                mask: true,
                editable: false,
                required: true,
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
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Ставка',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].rate.toString(),
                fieldName: 'reate',
                visible: true,
            },
            // {
            //     title: 'Вид места работы',
            //     type: 'simple-text',
            //     //value: dataWorkerApplication[currentIndex].jobType.toString(),
            //     value: dataWorkerApplication[currentIndex].rate.toString(),
            //     fieldName: 'jobType',
            //     visible: true,
            // },
            {
                title: 'Дата увольнения (последний рабочий день)',
                type: 'date',
                value: '',
                fieldName: 'last_day',
                editable: true,
                mask: true,
                required: true,
                //minValueInput: getDelayInDays(14),
            },
            {
                title: 'Причина',
                type: 'text',
                value: 'По собственному желанию',
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
                maxValueLength: 50,
            },
            {
                title: 'В связи с выходом на пенсию',
                type: 'hr-checkbox',
                value: '',
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
            },
            {
                title: 'Способ получения трудовой книжки',
                type: 'select',
                fieldName: 'get_tk',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Очно',
                    },
                    {
                        id: 1,
                        title: 'По почте',
                    },
                ],
            },
            {
                title: 'Адрес для отправки трудовой книжки',
                value: '',
                fieldName: 'get_tk_address',
                editable: true,
                mask: true,
                required: true,
                specialType: 'Address',
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm
