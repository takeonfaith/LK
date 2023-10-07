import Search, { Hint } from '@shared/ui/search'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { $search, $teachers, onSearch, resetTeachers } from './model'

type TeacherSelectProps = {
    onChange: (value: string) => void
    onSearchChange?: (value: string) => void
}

export const TeacherSelect = ({ onChange, onSearchChange }: TeacherSelectProps) => {
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

    useEffect(() => {
        search && onSearchChange?.(search)
    }, [search])

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
