import { ColumnProps } from '@shared/ui/table/types'
import { PEStudentVisits } from '.'
import { PEStudentAdditionalPoints } from '../pe-student-additional-points'
import { PEStudentRegulationPoints } from '../pe-student-regulation-points'

export const peStudentVisitsColumns: ColumnProps[] = [
    {
        title: 'Дата',
        field: 'date',
        type: 'date',
        sort: true,
    },
    {
        title: 'Преподаватель',
        field: 'teacher',
        render: (data) => data.fullName,
    },
]

export const sliderData = [
    { title: 'Посещения', content: <PEStudentVisits /> },
    { title: 'Нормативы ', content: <PEStudentRegulationPoints /> },
    { title: 'Дополнительные баллы ', content: <PEStudentAdditionalPoints /> },
]
