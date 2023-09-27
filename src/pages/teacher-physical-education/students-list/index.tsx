import { STUDENT_PAGE_SIZE } from '@entities/pe-student/constants'
import { pEStudentModel } from '@entities/pe-student/model'
import { PEStudent } from '@entities/pe-student/types'
import { FiltersSelect, PEStudentsFilter } from '@features/pe-students-filter'
import { PEStudentModal } from '@features/physical-education/student/pe-student-modal/ui/modal'
import SearchWithHints from '@features/search-with-hints'
import { studentApi } from '@shared/api'
import Flex from '@shared/ui/flex'
import Pagination from '@shared/ui/pagination'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { useModal } from 'widgets'
import { pEStudentFilterModel, pEStudentIsExamModel, pEStudentSearchModel } from '../model'
import { TableWrapper, Wrapper } from './styled'
import { peStudentColumns, examPeStudentColumns } from './constants'
import { pageLoaded } from './model'

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
    const [filters] = useUnit([pEStudentFilterModel.stores.$filters])
    const [studentSearchValue, setStudentSearchValue] = useState(search ?? '')

    useEffect(() => {
        pageLoaded()
    }, [])

    const handleRequest = async (value: string) => {
        const data = await studentApi.get(value, (filters[FiltersSelect.Group] as string) ?? '', 1, 10)

        return data
    }

    return (
        <Wrapper>
            <TableWrapper>
                <Flex gap="8px">
                    <SearchWithHints
                        width="100%"
                        placeholder="Введите имя студента"
                        value={studentSearchValue}
                        setValue={setStudentSearchValue}
                        onValueEmpty={() => pEStudentSearchModel.events.update('')}
                        onHintClick={(hint) => pEStudentSearchModel.events.update(hint?.id ?? '')}
                        request={handleRequest}
                        transformRequest={(el) => el.fio}
                    />
                    <PEStudentsFilter />
                </Flex>
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
