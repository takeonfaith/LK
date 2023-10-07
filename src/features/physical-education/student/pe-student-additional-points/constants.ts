import { WorkType } from '@entities/pe-student-additional-points/types'
import { ColumnProps } from '@shared/ui/table/types'

export const selectorData: { id: WorkType; title: string }[] = [
    { id: WorkType.Activist, title: 'Активист' },
    { id: WorkType.ExternalFitness, title: 'Внешний фитнес' },
    { id: WorkType.Competition, title: 'Соревнование' },
    { id: WorkType.GTO, title: 'ГТО' },
    { id: WorkType.InternalTeam, title: 'Сборная' },
    { id: WorkType.OnlineWork, title: 'Работа в LMS' },
    { id: WorkType.Science, title: 'Научная работа' },
]

export const additionalPointsColumns: ColumnProps[] = [
    {
        title: 'Дата',
        field: 'date',
        type: 'date',
        sort: true,
    },
    {
        title: 'Тип работ',
        field: 'workType',
        render: (data, row) => {
            const workType = selectorData.find(({ id }) => id === data)

            if (workType?.id === WorkType.Competition) {
                return row.comment
            }

            return workType?.title
        },
    },
    {
        title: 'Количество баллов',
        field: 'points',
    },
    {
        title: 'Преподаватель',
        field: 'teacher',
        render: (data) => data.fullName,
    },
    {
        title: 'Комментарий',
        field: 'comment',
        priority: 'five',
    },
]
