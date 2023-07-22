import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
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
    isRetirement: boolean,
    setIsRetirement: React.Dispatch<React.SetStateAction<boolean>>,
    getTkAddress: string | null,
    setGetTkAddress: React.Dispatch<React.SetStateAction<string | null>>,
    getTk: any,
    setGetTk: React.Dispatch<React.SetStateAction<any>>,
    reason: string | null,
    setReason: React.Dispatch<React.SetStateAction<string | null>>,
    lastDay: string | null,
    setLastDay: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на увольнение',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                type: 'simple-text',
            },
            {
                title: 'Должность',
                type: 'simple-text',
                fieldName: 'post',
                value: dataWorkerApplication[currentIndex].jobTitle.toString(),
            },
            {
                title: 'Подразделение',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].subDivision.toString(),
                fieldName: 'subDivision',
            },
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
            },
            {
                title: 'Ставка',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].rate.toString(),
                fieldName: 'reate',
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
                value: lastDay,
                fieldName: 'last_day',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(0),
                onChange: (value) => {
                    setLastDay(value)
                },
            },
            {
                title: 'Причина',
                type: 'text',
                value: reason,
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
                maxValueLength: 50,
                onChange: (value) => {
                    setReason(value)
                },
            },
            {
                title: 'В связи с выходом на пенсию',
                type: 'hr-checkbox',
                value: isRetirement,
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
                onChange: (value) => {
                    setIsRetirement(value)
                },
            },
            {
                title: 'Способ получения трудовой книжки',
                type: 'select',
                fieldName: 'get_tk',
                value: getTk,
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
                onChange: (value) => {
                    setGetTk(value)
                },
            },
            {
                title: 'Адрес для отправки трудовой книжки',
                value: getTkAddress,
                fieldName: 'get_tk_address',
                editable: true,
                mask: true,
                required: getTk?.title == 'По почте' ? true : false,
                visible: getTk?.title == 'По почте' ? true : false,
                //specialType: 'Address',
                onChange: (value) => {
                    setGetTkAddress(value)
                },
            },
        ],
    }
}

export default getForm
