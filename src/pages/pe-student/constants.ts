import { ColumnProps } from '@shared/ui/table/types'

export const peStudentVisitsColumns: ColumnProps[] = [
    {
        title: 'Дата',
        field: 'date',
        type: 'date',
        sort: true,
    },
    {
        title: 'Спорт',
        field: 'sport',
    },
    {
        title: 'Преподаватель',
        field: 'teacher',
        render: (data) => data.fullName,
    },
]
