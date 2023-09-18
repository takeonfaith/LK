import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/calcSummaryPoints'
import { ColumnProps } from '@shared/ui/table/types'

export const peStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'fullName',
        priority: 'one',
        width: '40%',
    },
    {
        title: 'Группа',
        field: 'groupNumber',
        priority: 'three',
    },
    {
        title: 'Посещений',
        field: 'visits',
        priority: 'one',
    },
    {
        title: 'Баллы',
        field: 'pointsCount',
        priority: 'two',
        render: (_, value) => calcSummaryPoints(value as PEStudent),
    },
    // {
    //     title: '',
    //     field: 'addPoints',
    //     render: (_, value) => {
    //         const student = value as PEStudent

    //         const handleClick = () => {
    //             pEStudentVisitModel.events.addVisit({ studentGuid, date: localizeDate(date, 'numeric') })
    //         }

    //         return <Button text={''} />
    //     },
    // },
]

export const examPeStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'name',
        render: (_, value) => {
            return value.fullName
        },
        width: '40%',
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
            return points >= 55 ? 'Зачтено' : 'Не зачтено'
        },
        priority: 'two',
    },
]
