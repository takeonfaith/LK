export const getStartNewSemesterMutation = (semName: string) => `mutation addSemester {
    startNewSemester (input: {semesterName: "${semName}"}) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }
   
`
