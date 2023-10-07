import { STUDENT_PAGE_SIZE } from '@entities/pe-student/constants'
import { pEStudentModel } from '@entities/pe-student/model'
import { PEStudent } from '@entities/pe-student/types'
import { PEStudentsFilter } from '@features/pe-students-filter'
import { PEStudentModal } from '@features/physical-education/student/pe-student-modal/ui/modal'
import Pagination from '@shared/ui/pagination'
import Search from '@shared/ui/search'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'
import { pEStudentIsExamModel, pEStudentSearchModel } from '../model'
import { examPeStudentColumns, peStudentColumns } from './constants'
import { pageLoaded } from './model'
import { FiltersWrapper, TableWrapper, Wrapper } from './styled'

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
        pageLoaded()
    }, [])

    return (
        <Wrapper>
            <TableWrapper>
                <FiltersWrapper>
                    <Search value={search} setValue={pEStudentSearchModel.events.update} size={'big'} />
                    <PEStudentsFilter />
                </FiltersWrapper>
                <Table
                    loading={loading}
                    data={students}
                    columns={!isExam ? peStudentColumns : examPeStudentColumns}
                    onRowClick={(student) => {
                        open(<PEStudentModal student={student as PEStudent} />, (student as PEStudent).fullName)
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
