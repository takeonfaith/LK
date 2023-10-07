import { AddPermissionToTeacher } from './types'

export const addPermissionToTeacherMutation = (model: AddPermissionToTeacher) => {
    return `mutation addRole {
      givePermissionsToTeacher(
        input: { permissions: ${model.permission}, teacherGuid: "${model.teacherGuid}"  }
      ) {
        success
        errors {
          ... on Error {
            message
          }
        }
      }
    }
    `
}
