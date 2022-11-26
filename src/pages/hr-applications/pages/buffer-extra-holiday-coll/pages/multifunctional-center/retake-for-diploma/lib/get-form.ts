import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const typeExamOptions = [
    { id: 0, title: 'Экзамен' },
    { id: 1, title: 'Дифференцированный зачет' },
    { id: 2, title: 'Курсовой проект' },
    { id: 3, title: 'Курсовую работу' },
    { id: 4, title: 'Практику' },
]

const semesterNumberOptions = [
    { id: 0, title: '1' },
    { id: 1, title: '2' },
    { id: 2, title: '3' },
    { id: 3, title: '4' },
    { id: 4, title: '5' },
    { id: 5, title: '6' },
    { id: 6, title: '7' },
    { id: 7, title: '8' },
    { id: 8, title: '9' },
    { id: 9, title: '10' },
    { id: 10, title: '11' },
    { id: 11, title: '12' },
    { id: 12, title: '13' },
]

const formTrainingOptions = [
    { id: 0, title: 'Очная' },
    { id: 1, title: 'Заочная' },
    { id: 2, title: 'Очно-заочная' },
]

const receivedAssessmentOptions = [
    { id: 0, title: 'Удовлетворительно' },
    { id: 1, title: 'Хорошо' },
]

const academicYearOfDeliveryOptions = [
    { id: 0, title: '2022/2023' },
    { id: 0, title: '2021/2022' },
    { id: 1, title: '2020/2021' },
    { id: 3, title: '2019/2020' },
    { id: 4, title: '2018/2019' },
    { id: 5, title: '2017/2018' },
    { id: 6, title: '2016/2017' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Заявление на пересдачу для получения диплома с отличием',
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
            {
                title: 'Прошу разрешить мне для получения диплома с отличием пересдать',
                fieldName: 'type_exam',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: typeExamOptions,
            },
            {
                title: 'Дисциплина',
                fieldName: 'name_discipline',
                value: '',
                type: 'text',
                editable: true,
                required: true,
            },
            {
                title: 'Семестр',
                fieldName: 'semester_number',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: semesterNumberOptions,
            },
            {
                title: 'Форма обучения',
                fieldName: 'form_training',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: formTrainingOptions,
            },
            {
                title: 'Учебный год',
                fieldName: 'academic_year_of_delivery',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: academicYearOfDeliveryOptions,
            },
            {
                title: 'Полученная оценка',
                fieldName: 'received_assessment',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: receivedAssessmentOptions,
            },
        ],
        alert: 'В соответствии с положением о проведении текущего контроля успеваемости и промежуточной аттестации обучающихся в Московском политехническом университете в порядке исключения допускается пересдача только одной дисциплины на последнем году обучения с целью получения диплома с отличием.',
    }
}

export default getForm
