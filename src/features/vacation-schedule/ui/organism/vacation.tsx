import { Vacation as VacationType, VacationSchedule } from '@api/model/vacation-schedule'
import { ColumnProps } from '@ui/table/types'
import KeyValue from '@ui/atoms/key-value'
import List from '@ui/list'
import Table from '@ui/table'
import { IndexedProperties } from '@utility-types/indexed-properties'
import getCorrectWordForm, { Rules } from '@utils/get-correct-word-form'
import React from 'react'
import localizeDate from '@shared/lib/localize-date'

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
        const factFrom = localizeDate(factVacation?.from, 'numeric')
        const factTo = localizeDate(factVacation?.to, 'numeric')
        const planFrom = localizeDate(planVacation?.from, 'numeric')
        const planTo = localizeDate(planVacation?.to, 'numeric')

        if (factVacation) {
            vacation.actualVacationPeriods = `${factFrom} - ${factTo} (${factVacation.numdays} ${getCorrectWordForm(
                Number(factVacation.numdays) || 0,
                RULES,
            )})`
        }

        if (planVacation) {
            vacation.plannedVacationPeriods = `${planFrom} - ${planTo} (${planVacation.numdays} ${getCorrectWordForm(
                Number(planVacation.numdays) || 0,
                RULES,
            )})`
        }
        vacations.push(vacation)
    }

    return vacations
}
