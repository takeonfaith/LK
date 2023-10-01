export const getUpdateStudentsListMutation = () => {
    return `mutation {
      updateStudentsInfo {
        success

        errors {
          ... on Error {
            message
          }
        }
      }
     }`
}
