import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'
import { getIsTutor } from './is-tutor'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
    startDate: string | null,
    setStartDate: React.Dispatch<React.SetStateAction<string | null>>,
    isRetirement: string | null,
    setIsRetirement: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    const firstDayOff = !!startDate ? new Date(startDate) : new Date()
    const secondDayOff = new Date(firstDayOff.getTime() + 24 * 60 * 60 * 1000)
    const isTutor = getIsTutor(dataWorkerApplication[currentIndex].jobGuid.toString()) === 'true' ? true : false
    if (isTutor && firstDayOff.getDay() === 5) {
        secondDayOff.setDate(firstDayOff.getDate() + 1)
    } else if (firstDayOff.getDay() === 5 || firstDayOff.getDay() === 6 || firstDayOff.getDay() === 0) {
        secondDayOff.setDate(firstDayOff.getDate() + ((8 - firstDayOff.getDay()) % 7))
    }

    return {
        title: 'Заявление о диспансеризации',
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
                title: 'Дата прохождения диспансеризации',
                type: 'date',
                value: startDate,
                fieldName: 'extra_examination_date',
                editable: true,
                onChange: (value) => {
                    setStartDate(value)
                },
                mask: true,
                required: true,
                maxValueLength: 1,
                minValueInput: getDelayInDays(0),
            },
            {
                title: 'Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого',
                type: 'hr-checkbox',
                value: !!isRetirement ? isRetirement : '',
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
                onChange: (value) => {
                    setIsRetirement(value)
                },
            },
            {
                title: 'Второй день отдыха',
                type: 'date',
                value: secondDayOff.toISOString().substr(0, 10),
                fieldName: 'extra_examination_date_2',
                editable: false,
                mask: true,
                required: false,
                specialType: 'Compensation2',
                maxValueLength: 1,
            },
            {
                title: '',
                type: 'simple-text',
                value: dataWorkerApplication[currentIndex].jobGuid.toString(),
                fieldName: 'jobGuid',
                visible: false,
            },
        ],
    }
}

export default getForm
