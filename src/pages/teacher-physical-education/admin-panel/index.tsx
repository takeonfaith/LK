import { AddNewTeacher } from '@features/physical-education/admin-panel/add-new-teacher/ui'
import { AssignCurator } from '@features/physical-education/admin-panel/assign-curator/ui'
import { AssignVisitValue } from '@features/physical-education/admin-panel/assign-visit-value/ui'
import { updateStudentsList } from '@features/physical-education/admin-panel/update-students-list/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

export const AdminPanel = () => {
    const [handleUpdateStudentsList] = useUnit([updateStudentsList])
    const { open } = useModal()

    const handleOpenTeacherAdd = () => {
        open(<AddNewTeacher />)
    }

    const handleAssignCurator = () => {
        open(<AssignCurator />)
    }

    const handleAssignVisitValue = () => {
        open(<AssignVisitValue />)
    }

    return (
        <WrapperBlock>
            <Button onClick={handleOpenTeacherAdd} text={'Добавить нового преподавателя'} />
            <Button onClick={handleUpdateStudentsList} text={'Обновить данные о студентах'} />
            <Button onClick={handleAssignCurator} text={'Назначить куратора'} />
            <Button onClick={handleAssignVisitValue} text={'Назначить стоимость посещения'} />
        </WrapperBlock>
    )
}

const WrapperBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;
    gap: 12px;
    background-color: var(--schedule);
    height: 100%;
    border-radius: 10px;
`
