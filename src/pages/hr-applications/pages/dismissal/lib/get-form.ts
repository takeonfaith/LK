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
            // {
            //     title: 'Должность',
            //     value: dataWorkerApplication[currentIndex].jobTitle.toString(),
            //     fieldName: 'post',
            //     mask: true,
            //     editable: false,
            //     required: true,
            // },
            // {
            //     title: 'Структурное подразделение',
            //     value: dataWorkerApplication[currentIndex].subDivision.toString(),
            //     fieldName: 'subDivision',
            //     mask: true,
            //     editable: false,
            //     required: true,
            // },
            // {
            //     title: 'Ставка',
            //     value: dataWorkerApplication[currentIndex].rate.toString(),
            //     fieldName: 'reate',
            //     mask: true,
            //     editable: false,
            //     required: true,
            // },
            // {
            //     title: 'Вид места работы',
            //     value: dataWorkerApplication[currentIndex].jobType.toString(),
            //     fieldName: 'jobType',
            //     mask: true,
            //     editable: false,
            //     required: true,
            //},
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
                title: 'Ставка',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].rate.toString(),
                fieldName: 'reate',
                visible: true,
            },
            {
                title: 'Вид места работы',
                type: 'simple-text',
                //value: dataWorkerApplication[currentIndex].jobType.toString(),
                value: dataWorkerApplication[currentIndex].rate.toString(),
                fieldName: 'jobType',
                visible: true,
            },
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
                title: 'Причина (В связи с...)',
                type: 'text',
                value: null,
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
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
                required: false,
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
