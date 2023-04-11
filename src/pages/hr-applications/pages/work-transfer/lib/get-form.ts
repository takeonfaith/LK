import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на перевод',
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
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Текущее место работы',
                type: 'text-header',
                fieldName: 'post',
                value: '',
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
            {
                title: 'Cтавка',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].rate.toString(),
                fieldName: 'currentRate',
                visible: true,
            },
            {
                title: 'Новое место работы',
                type: 'text-header',
                fieldName: 'post',
                value: '',
                visible: true,
            },
            {
                title: 'Подразделение',
                value: '',
                fieldName: 'newPlaceOfWork',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Должность',
                value: '',
                fieldName: 'newPost',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'newRate',
                value: '',
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: '0.25',
                    },
                    {
                        id: 1,
                        title: '0.5',
                    },
                    {
                        id: 2,
                        title: '1',
                    },
                ],
            },
            {
                title: 'Дата перевода',
                type: 'date',
                value: '',
                fieldName: 'transferDate',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Тип занятости',
                type: 'select',
                fieldName: 'employment',
                value: '',
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
                        title: 'По совместительству',
                    },
                ],
            },
            {
                title: 'Тип совместительства',
                type: 'select',
                fieldName: 'parttime_type',
                value: '',
                editable: true,
                required: false,
                specialType: 'PartTime',
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Внутреннее',
                    },
                    {
                        id: 1,
                        title: 'Внешнее',
                    },
                ],
            },
        ],
    }
}

export default getForm
