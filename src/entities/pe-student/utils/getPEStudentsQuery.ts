import { STUDENT_PAGE_SIZE } from '../constants'

export const getPEStudentsQuery = (page: number, filters: Record<string, unknown> | null = null) => {
    const stringifyFilters = JSON.stringify(filters).replace(/"([^"]+)":/g, '$1:')

    return `{
    students (take:${STUDENT_PAGE_SIZE}, skip: ${STUDENT_PAGE_SIZE * page}, where: ${stringifyFilters}){
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
        totalCount
    }
}`
}

export const getPEStudentQuery = (studentId: string) => `{
    student(guid: "${studentId}") {
        fullName
        groupNumber
        healthGroup
        studentGuid
        visits
        additionalPoints
        pointsForStandards
        course
        department
        group {
          visitValue
        }
        visitsHistory {
          id
          date
          sport
          teacher {
            fullName
          }
        }
      }
}`
