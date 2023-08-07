import { AddStudentVisits } from '../types/add-student-visits'

export const getAddVisitMutation = ({ studentGuid, date }: AddStudentVisits) => `mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${studentGuid}", date: "${date}" }) {
      success
    }
  }  
`
