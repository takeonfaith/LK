import { VacationSchedule } from '@api/model/vacation-schedule'
import { getTableComuns } from '@features/vacation-schedule/lib/get-table-columns'
import KeyValue from '@ui/atoms/key-value'
import List from '@ui/list'
import Table from '@ui/table'
import { Title } from '@ui/title'
import { IndexedProperties } from '@utility-types/indexed-properties'
import getCorrectWordForm, { Rules } from '@utils/get-correct-word-form'
import React from 'react'

const RULES: Rules = {
    fiveToNine: 'дней',
    one: 'день',
    twoToFour: 'дня',
    zero: 'дней',
}

function formFooterField(field?: number) {
    return `Всего: ${field} ${getCorrectWordForm(field ?? 0, RULES)}`
}

const Vacation = (props: VacationSchedule) => {
    const {
        subdivision,
        post,
        jobType,
        wage,
        vacations,
        allActualVacationPeriods,
        allPlannedVacationPeriods,
        allVacationRest,
    } = props

    return (
        <>
            <List>
                <KeyValue keyStr="Подразделение" value={subdivision} />
                <KeyValue keyStr="Должность" value={post} />
                <KeyValue keyStr="Занятость" value={jobType} />
                <KeyValue keyStr="Ставка" value={wage} />
            </List>
            <Table
                columns={getTableComuns()}
                data={vacations}
                footer={() => {
                    const footer = {
                        allPlannedVacationPeriods: formFooterField(allPlannedVacationPeriods),
                        allActualVacationPeriods: formFooterField(allActualVacationPeriods),
                        allVacationRest: formFooterField(allVacationRest),
                    } as IndexedProperties

                    return footer
                }}
            />
        </>
    )
}

export default Vacation
