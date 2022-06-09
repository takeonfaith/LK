import { ColumnProps } from '@ui/table/types'

export function getTableComuns(): ColumnProps[] {
    return [
        { title: 'Плановые периоды отпуска', field: 'plannedVacationPeriods', showFull: true },
        { title: 'Фактические периоды отпуска', field: 'actualVacationPeriods', showFull: true },
        { title: 'Остаток отпуска', field: 'vacationRest', showFull: true },
    ]
}
