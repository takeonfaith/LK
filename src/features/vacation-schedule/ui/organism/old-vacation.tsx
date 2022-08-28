// import { OldVacation as OldVacationType } from '@api/model/vacation-schedule'
import Table from '@ui/table'
import { ColumnProps } from '@ui/table/types'
import { Title } from '@ui/title'
import { IndexedProperties } from '@utility-types/indexed-properties'
import getCorrectWordForm, { Rules } from '@utils/get-correct-word-form'
import React from 'react'

// interface Props {
//     oldVacations: OldVacationType[]
//     oldAllVacationRest?: number
// }

// const RULES: Rules = {
//     fiveToNine: 'дней',
//     one: 'день',
//     twoToFour: 'дня',
//     zero: 'дней',
// }

// function formFooterField(field?: number) {
//     return `Всего: ${field} ${getCorrectWordForm(field ?? 0, RULES)}`
// }

// const tableColumns: ColumnProps[] = [
//     {
//         title: 'Рабочий период',
//         field: 'workingPeriod',
//         showFull: true,
//     },
//     { title: 'Год', field: 'year', showFull: true },
//     {
//         title: 'Остаток отпуска',
//         field: 'vacationBalance',
//         showFull: true,
//         render: (value) => (value !== '-' ? `${value} ${getCorrectWordForm(value, RULES)}` : value),
//     },
// ]

// const OldVacation = ({ oldVacations, oldAllVacationRest }: Props) => {
//     return (
//         <>
//             <Title size={3} align="left">
//                 Остатки отпусков за предыдущие года
//             </Title>
//             <Table
//                 columns={tableColumns}
//                 data={oldVacations}
//                 footer={() => {
//                     const footer = {
//                         oldAllVacationRest: formFooterField(oldAllVacationRest),
//                     } as IndexedProperties

//                     return footer
//                 }}
//             />
//         </>
//     )
// }

// export default OldVacation
