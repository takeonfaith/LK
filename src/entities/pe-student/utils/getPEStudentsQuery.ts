import { STUDENT_PAGE_SIZE } from '../constants'

export const getPEStudentsQuery = (page: number) => `{
    students (take:${STUDENT_PAGE_SIZE}, skip: ${STUDENT_PAGE_SIZE * page}){
        items {
            fullName
            groupNumber
            healthGroup
            studentGuid
            visits
            additionalPoints
            pointsForStandards
            group {
                visitValue
            }
            course
            department
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        totalCount
    }
}`
