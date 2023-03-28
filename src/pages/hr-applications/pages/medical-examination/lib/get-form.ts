import { IInputArea } from '@ui/input-area/model'
import { UserApplication, WorkerApplication } from '@api/model'
import { useState } from 'react'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    currentIndex: number,
): IInputArea => {
    const { surname, name, patronymic, birthday } = dataUserApplication
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
                value: null,
                fieldName: 'medical-examination-date',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Я являюсь пенсионером',
                type: 'hr-checkbox',
                value: '',
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
            },
            // {
            //     title: 'Компенсация',
            //     type: 'select',
            //     fieldName: 'compensation',
            //     value: null,
            //     editable: true,
            //     required: true,
            //     width: '100%',
            //     items: [
            //         {
            //             id: 0,
            //             title: 'Оплатить работу в выходной день в двойном размере',
            //         },
            //         {
            //             id: 1,
            //             title: 'Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха',
            //         },
            //     ],
            // },
            {
                title: 'Выберите день отдыха',
                type: 'date',
                value: '',
                fieldName: 'extra_examination_date',
                editable: true,
                mask: true,
                required: false,
                maxValueLength: 1,
            },
            {
                title: 'Выберите второй день отдыха',
                type: 'date',
                value: '',
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
            // {
            //     title: '',
            //     type: 'number',
            //     value: getAgeMed(birthday).toString(),
            //     fieldName: 'age-of-employee',
            //     visible: false,
            // },
        ],
    }
}

export default getForm
