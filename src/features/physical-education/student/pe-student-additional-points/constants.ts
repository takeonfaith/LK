import { WorkType } from '@entities/pe-student-additional-points/types'
import { ColumnProps } from '@shared/ui/table/types'

export const selectorData: { id: WorkType; title: string }[] = [
    { id: WorkType.Activist, title: 'Активист' },
    { id: WorkType.ExternalFitness, title: 'Внешний фитнес' },
    { id: WorkType.GTO, title: 'ГТО' },
    { id: WorkType.InternalTeam, title: 'Внутренняя команда' },
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
        render: (data) => selectorData.find(({ id }) => id === data)?.title,
    },
    {
        title: 'Количество баллов',
        field: 'points',
    },
]
