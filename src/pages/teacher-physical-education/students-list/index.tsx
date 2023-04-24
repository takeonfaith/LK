import { pEStudentModel } from '@entities/pe-student/model'
import { STUDENT_PAGE_SIZE } from '@entities/pe-student/utils'
import Pagination from '@shared/ui/pagination'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useModal } from 'widgets'
import { columns } from './constants'
import { TableWrapper, Wrapper } from './styled'

export const StudentsList = () => {
    const { open } = useModal()

    const { students, totalCount, page } = useUnit({
        students: pEStudentModel.stores.$pEStudents,
        totalCount: pEStudentModel.stores.$pEStudentsTotalCount,
        page: pEStudentModel.stores.$pEStudentsPage,
    })

    useEffect(() => {
        pEStudentModel.events.load()
    }, [])

    return (
        <Wrapper>
            <TableWrapper>
                <Table
                    data={students}
                    columns={columns}
                    onRowClick={(value) => {
                        open(<div style={{ width: 300, height: 500 }}>{JSON.stringify(value)}</div>)
                    }}
                />
                <Pagination
                    condition
                    pages={Math.floor(totalCount / STUDENT_PAGE_SIZE)}
                    currentPage={page}
                    setCurrentPage={pEStudentModel.events.setPage}
                />
            </TableWrapper>
        </Wrapper>
    )
}
