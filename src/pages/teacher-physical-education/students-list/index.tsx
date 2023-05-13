import { STUDENT_PAGE_SIZE } from '@entities/pe-student/constants'
import { pEStudentModel } from '@entities/pe-student/model'
import { PEStudent } from '@entities/pe-student/types'
import { PEStudentModal } from '@features/physical-education/pe-student-modal/ui/modal'
import Pagination from '@shared/ui/pagination'
import Search from '@shared/ui/search'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useModal } from 'widgets'
import { pEStudentSearchModel } from '../model'
import { peStudentColumns } from './constants'
import { TableWrapper, Wrapper } from './styled'

export const StudentsList = () => {
    const { open } = useModal()

    const { students, totalCount, page, search, loading } = useUnit({
        students: pEStudentModel.stores.$pEStudents,
        loading: pEStudentModel.stores.$loading,
        totalCount: pEStudentModel.stores.$pEStudentsTotalCount,
        page: pEStudentModel.stores.$pEStudentsPage,
        search: pEStudentSearchModel.stores.$search,
    })

    useEffect(() => {
        pEStudentModel.events.load()
    }, [])

    return (
        <Wrapper>
            <TableWrapper>
                <Search value={search} setValue={pEStudentSearchModel.events.update} />
                <Table
                    loading={loading}
                    data={students}
                    columns={peStudentColumns}
                    onRowClick={({ studentGuid }) => {
                        open(
                            <PEStudentModal
                                student={students.find((d) => d.studentGuid === studentGuid) as PEStudent}
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
