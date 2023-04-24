export const STUDENT_PAGE_SIZE = 10

export const getPEStudentsQuery = (page: number) => `{
    students (take:${STUDENT_PAGE_SIZE}, skip: ${STUDENT_PAGE_SIZE * page}){
        items {
            fullName
            groupNumber
            healthGroup
            studentGuid
            visits
            additionalPoints
        }
        pageInfo {
            hasNextPage
            hasPreviousPage
        }
        totalCount
    }
}`

export const getPEStudentsTotalCountQuery = () => `{
    students (){
        totalCount
    }
}`
