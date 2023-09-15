import Search, { Hint } from '@shared/ui/search'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { $search, $teachers, onSearch, resetTeachers } from './model'

type TeacherSelectProps = {
    onChange: (value: string) => void
}

export const TeacherSelect = ({ onChange }: TeacherSelectProps) => {
    const [teachers, search] = useUnit([$teachers, $search])

    const handleHintClick = (hint: Hint | undefined) => {
        if (hint?.id) {
            onChange(hint.id)
        }
    }

    useEffect(() => {
        onSearch('')

        return resetTeachers
    }, [])

    return (
        <>
            <Title size={5} align="left" visible>
                Преподаватель
            </Title>
            <Search
                value={search ?? ''}
                setValue={onSearch}
                hints={teachers.map((t) => ({ id: t.guid, title: t.fullName, value: t.guid }))}
                onHintClick={handleHintClick}
            />
        </>
    )
}
