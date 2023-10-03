import { peStudentCompetitionModel } from '@entities/pe-student/model'
import { AddCompetition } from '@features/physical-education/admin-panel/add-competition/ui'
import { AddNewTeacher } from '@features/physical-education/admin-panel/add-new-teacher/ui'
import { AssignCurator } from '@features/physical-education/admin-panel/assign-curator/ui'
import { AssignVisitValue } from '@features/physical-education/admin-panel/assign-visit-value/ui'
import { StartNewSemester } from '@features/physical-education/admin-panel/start-new-semester/ui'
import { updateStudentsList } from '@features/physical-education/admin-panel/update-students-list/model'
import { Button } from '@shared/ui/button'
import Table from '@shared/ui/table'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'
import { columns } from './constants'
import { Actions, CompWrapper, Wrapper } from './styled'

export const AdminPanel = () => {
    const [handleUpdateStudentsList, competitions] = useUnit([
        updateStudentsList,
        peStudentCompetitionModel.stores.$competitions,
    ])

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

    const handleAddCompetition = () => {
        open(<AddCompetition />)
    }

    const handleStartNewSemester = () => {
        open(<StartNewSemester />)
    }

    useEffect(() => {
        peStudentCompetitionModel.events.load()
    }, [])

    return (
        <Wrapper>
            <Actions>
                <Button onClick={handleOpenTeacherAdd} text={'Добавить нового преподавателя'} />
                <Button onClick={handleUpdateStudentsList} text={'Обновить данные о студентах'} />
                <Button onClick={handleAssignCurator} text={'Назначить куратора'} />
                <Button onClick={handleAssignVisitValue} text={'Назначить стоимость посещения'} />
                <Button onClick={handleStartNewSemester} text={'Начать новый семестр'} />
            </Actions>
            <CompWrapper>
                <Title align="left" size={4}>
                    Соревнования
                </Title>
                <Button onClick={handleAddCompetition} text={'Добавить соревнование'} />
                <Table
                    data={competitions.map((c) => ({
                        name: c,
                    }))}
                    columns={columns}
                    onRowClick={() => {}}
                />
            </CompWrapper>
        </Wrapper>
    )
}
