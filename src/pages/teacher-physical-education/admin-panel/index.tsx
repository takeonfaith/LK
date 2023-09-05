import { AddNewTeacher } from '@features/physical-education/admin-panel/add-new-teacher/ui'
import { AssignCurator } from '@features/physical-education/admin-panel/assign-curator/ui'
import { AssignVisitValue } from '@features/physical-education/admin-panel/assign-visit-value/ui'
import { updateStudentsList } from '@features/physical-education/admin-panel/update-students-list/model'
import Block from '@shared/ui/block'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import React from 'react'
import { useModal } from 'widgets'
import { Wrapper } from './styled'

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

    // add loadings
    return (
        <Block>
            <Button onClick={handleOpenTeacherAdd} text={'Добавить нового преподавателя'} />
            <Button onClick={handleUpdateStudentsList} text={'Обновить данные о студентах'} />
            <Button onClick={handleAssignCurator} text={'Назначить куратора'} />
            <Button onClick={handleAssignVisitValue} text={'Назначить стоимость посещения'} />
        </Block>
    )
}
