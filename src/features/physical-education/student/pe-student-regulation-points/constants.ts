import { RegulationType } from '@entities/pe-student-regulation-points/types'
import { ColumnProps } from '@shared/ui/table/types'

export const selectorData: { id: RegulationType; title: string }[] = [
    { id: RegulationType.FlexionAndExtensionOfArms, title: 'Сгибание и разгибание рук' },
    { id: RegulationType.JumpingRopeJumps, title: 'Прыжки со скакалкой' },
    { id: RegulationType.Jumps, title: 'Прыжки' },
    { id: RegulationType.PullUps, title: 'Подтягивания' },
    { id: RegulationType.ShuttleRun, title: 'Челночный бег' },
    { id: RegulationType.Squats, title: 'Приседания' },
    { id: RegulationType.Tilts, title: 'Наклон' },
    { id: RegulationType.TorsoLifts, title: 'Подъемы туловища' },
]

export const regularPointsColumns: ColumnProps[] = [
    {
        title: 'Дата',
        field: 'date',
        type: 'date',
        sort: true,
    },
    {
        title: 'Норматив',
        field: 'standardType',
        render: (data) => selectorData.find(({ id }) => id === data)?.title,
    },
    {
        title: 'Количество баллов',
        field: 'points',
    },
]
