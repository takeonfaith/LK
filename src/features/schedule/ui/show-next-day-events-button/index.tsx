import { scheduleModel } from '@entities/schedule'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'
import { Button } from '@shared/ui/button'
import React from 'react'
import { useModal } from 'widgets'
import { Modal } from './modal'
import capitalizeFirstLetter from '@shared/lib/capitalize-first-letter'
import { Colors } from '@shared/constants'

export const ShowNextDayEventsButton = () => {
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()
    const { open } = useModal()
    const nextDay = getDateInSomeDays(new Date(), 1)
    const modalTitle = capitalizeFirstLetter(
        nextDay.toLocaleDateString('ru-RU', { weekday: 'long', day: '2-digit', month: 'long' }),
    )

    if (!schedule?.week) return null

    const handleClick = () => open(<Modal />, modalTitle)

    return (
        <Button
            text="Посмотреть следующий"
            onClick={handleClick}
            textColor="var(--blue)"
            background="var(--form)"
            hoverBackground={Colors.blue.transparent3}
        />
    )
}
