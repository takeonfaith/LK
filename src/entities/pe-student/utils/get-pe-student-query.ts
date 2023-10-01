import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { STUDENT_PAGE_SIZE } from '../constants'

export const getPEStudentsQuery = (page: number, filters: Record<string, unknown> | null = null) => {
    const stringifyFilters = jsonStringifyGraphql(filters, ['course'])
    return `query {
      students (take:${STUDENT_PAGE_SIZE}, skip: ${
        STUDENT_PAGE_SIZE * page
    }, where: ${stringifyFilters}, order: [{fullName:ASC}]){
        items {
            fullName
            groupNumber
            studentGuid
            visits
            additionalPoints
            pointsForStandards
            group {
                visitValue
            }
            course
            department
            pointsHistory(where: {workType: {eq: ONLINE_WORK}}) {
              points
            }
        }
        totalCount
      }
    }`
}

export const getPEStudentQuery = (studentId: string) => `{
    student(guid: "${studentId}") {
        fullName
        groupNumber
        studentGuid
        visits
        additionalPoints
        pointsForStandards
        course
        department
        standardsHistory {
          id
          points
          standardType
          date
          teacher {
            fullName
          }
        }
        group {
          visitValue
        }
        visitsHistory {
          id
          date
          teacher {
            fullName
          }
        }
        pointsHistory{
          id
          workType
          comment
          date
          points
        }
      }
}`

export const getPEStudentsTotalCountQuery = (filters: Record<string, unknown> | null = null) => {
    const stringifyFilters = jsonStringifyGraphql(filters, ['course'])

    return `{
      students(where: ${stringifyFilters}) {
        totalCount
      }
    }`
}
