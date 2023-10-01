import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AddTeacher } from './types'

export const getAddNewTeacherMutation = (model: AddTeacher) => {
    return `mutation createTeacher{
        createTeacher(
          input: ${jsonStringifyGraphql(model)}
        ) {
          errors {
            ... on Error {
              message
            }
          }
        }
      }`
}
