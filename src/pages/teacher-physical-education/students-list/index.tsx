import React from 'react'
import { STUDENT_PAGE_SIZE } from '@entities/pe-student/constants'
import { pEStudentModel } from '@entities/pe-student/model'
import { PEStudent } from '@entities/pe-student/types'
import Pagination from '@shared/ui/pagination'
import Search from '@shared/ui/search'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useModal } from 'widgets'
import { pEStudentIsExamModel, pEStudentSearchModel } from '../model'
import { peStudentColumns, examPeStudentColumns } from './constants'
import { TableWrapper, Wrapper } from './styled'
import { PEStudentsFilter } from '@features/pe-students-filter'
import { PEStudentModal } from '@features/physical-education/student/pe-student-modal/ui/modal'

export const StudentsList = () => {
    const { open } = useModal()

    const { students, totalCount, page, search, loading, isExam } = useUnit({
        students: pEStudentModel.stores.$pEStudents,
        loading: pEStudentModel.stores.$loading,
        totalCount: pEStudentModel.stores.$pEStudentsTotalCount,
        page: pEStudentModel.stores.$pEStudentsPage,
        search: pEStudentSearchModel.stores.$search,
        isExam: pEStudentIsExamModel.stores.$isExam,
    })

    useEffect(() => {
        pEStudentModel.events.load()
    }, [])

    return (
        <Wrapper>
            <TableWrapper>
                <Search value={search} setValue={pEStudentSearchModel.events.update} />
                <PEStudentsFilter />
                <Table
                    loading={loading}
                    data={students}
                    columns={!isExam ? peStudentColumns : examPeStudentColumns}
                    onRowClick={({ studentGuid }) => {
                        open(
                            <PEStudentModal
                                student={students.find((s) => s.studentGuid === studentGuid) as PEStudent}
                            />,
                        )
                    }}
                />
                <Pagination
                    condition
                    align="right"
                    pages={Math.floor(totalCount / STUDENT_PAGE_SIZE)}
                    currentPage={page}
                    setCurrentPage={pEStudentModel.events.setPage}
                />
            </TableWrapper>
        </Wrapper>
    )
}
