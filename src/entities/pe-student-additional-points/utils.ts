import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AddStudentAdditionalPoints } from './types'

export const getAddPEStudentAdditionalPoints = (model: AddStudentAdditionalPoints) => {
    return `mutation addPointsToStudent{
        addPointsToStudent(
          input: ${jsonStringifyGraphql(model, ['workType'])}
        ) {
          success
        }
      }`
}
