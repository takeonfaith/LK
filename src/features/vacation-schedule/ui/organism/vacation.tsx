import { Vacation as VacationType, VacationSchedule } from '@api/model/vacation-schedule'
import { ColumnProps } from '@ui/table/types'
import KeyValue from '@ui/atoms/key-value'
import List from '@ui/list'
import Table from '@ui/table'
import { IndexedProperties } from '@utility-types/indexed-properties'
import getCorrectWordForm, { Rules } from '@utils/get-correct-word-form'
import React from 'react'

const RULES: Rules = {
    fiveToNine: 'дней',
    one: 'день',
    twoToFour: 'дня',
    zero: 'дней',
}

const tableColumns: ColumnProps[] = [
    {
        title: 'Плановые периоды отпуска',
        field: 'plannedVacationPeriods',
        showFull: true,
    },
    {
        title: 'Фактические периоды отпуска',
        field: 'actualVacationPeriods',
        showFull: true,
    },
]

export type OldVacationChedule = {
    division: string
    post: string
    vacations?: {
        plannedVacationPeriods?: string
        actualVacationPeriods?: string
    }[]
    allPlannedVacationPeriods?: number
    allActualVacationPeriods?: number
    oldAllVacationRest?: number
}

const Vacation = (props: VacationSchedule) => {
    const { division, post, vacations, allActualVacationPeriods, allPlannedVacationPeriods } = mapper(props)

    return (
        <>
            <List>
                <KeyValue keyStr="Подразделение" value={division} />
                <KeyValue keyStr="Должность" value={post} />
            </List>
            <Table
                columns={tableColumns}
                data={vacations}
                footer={() => {
                    const footer = {
                        allPlannedVacationPeriods: formFooterField(allPlannedVacationPeriods),
                        allActualVacationPeriods: formFooterField(allActualVacationPeriods),
                    } as IndexedProperties

                    return footer
                }}
            />
        </>
    )
}

export default Vacation

function formFooterField(field?: number) {
    return `Всего: ${field} ${getCorrectWordForm(field ?? 0, RULES)}`
}

function mapper(newVacation: VacationSchedule): OldVacationChedule {
    const { fact, plan, division, post } = newVacation

    return {
        division,
        post,
        vacations: getVacations(fact, plan),
        allActualVacationPeriods: fact.reduce<number>((acc, { numdays }) => {
            acc += +numdays

            return acc
        }, 0),
        allPlannedVacationPeriods: plan.reduce<number>((acc, { numdays }) => {
            acc += +numdays

            return acc
        }, 0),
    }
}

function getVacations(fact: VacationType[], plan: VacationType[]) {
    const maxVacationLength = Math.max(fact.length, plan.length)
    const vacations = []

    for (let i = 0; i < maxVacationLength; i++) {
        const factVacation = fact[i]
        const planVacation = plan[i]
        const vacation = { actualVacationPeriods: '', plannedVacationPeriods: '' }

        if (factVacation) {
            vacation.actualVacationPeriods = `${factVacation.from} - ${factVacation.to} (${
                factVacation.numdays
            } ${getCorrectWordForm(Number(factVacation.numdays) || 0, RULES)})`
        }

        if (planVacation) {
            vacation.plannedVacationPeriods = `${planVacation.from} - ${planVacation.to} (${
                planVacation.numdays
            } ${getCorrectWordForm(Number(planVacation.numdays) || 0, RULES)})`
        }
        vacations.push(vacation)
    }

    return vacations
}
