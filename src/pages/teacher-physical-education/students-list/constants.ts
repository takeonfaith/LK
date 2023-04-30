import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { ColumnProps } from '@shared/ui/table/types'

export const peStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'fullName',
    },
    {
        title: 'Группа',
        field: 'groupNumber',
    },
    {
        title: 'Группа здоровья',
        field: 'healthGroup',
    },
    {
        title: 'Посещений',
        field: 'visits',
    },
    {
        title: 'Баллы',
        field: 'pointsCount',
        render: (_, value) => calcSummaryPoints(value as PEStudent),
    },
]
