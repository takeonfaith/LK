import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/cals-summary-points'
import { ColumnProps } from '@shared/ui/table/types'

export const peStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'fullName',
        priority: 'one',
        showFull: true,
    },
    {
        title: 'Группа',
        field: 'groupNumber',
        priority: 'one',
    },
    {
        title: 'Посещений',
        field: 'visits',
        priority: 'two',
    },
    {
        title: 'Баллы',
        field: 'pointsCount',
        priority: 'one',
        render: (_, value) => calcSummaryPoints(value as PEStudent),
    },
    {
        title: 'Нормативы',
        field: 'pointsStandardsCount',
        priority: 'two',
        render: (_, value) => (value as PEStudent).pointsForStandards,
    },
    {
        title: 'ЛМС',
        field: 'pointsLMSCount',
        priority: 'two',
        render: (_, value) => (value as PEStudent).pointsHistory.reduce((sum, d) => sum + d.points, 0),
    },
]

export const examPeStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'name',
        render: (_, value) => {
            return value.fullName
        },
        showFull: true,
        priority: 'one',
    },
    {
        title: 'Группа',
        field: 'group',
        render: (_, value) => {
            return value.groupNumber
        },
        priority: 'three',
    },
    {
        title: 'Баллы',
        field: 'points',
        render: (_, value) => calcSummaryPoints(value as PEStudent),
        priority: 'two',
    },
    {
        title: 'Зачтено',
        field: 'isDone',
        render: (_, value) => {
            const points = calcSummaryPoints(value as PEStudent)
            return points >= 50 ? 'Зачтено' : 'Не зачтено'
        },
        priority: 'one',
    },
]
