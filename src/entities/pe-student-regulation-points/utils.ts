import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AddStudentRegulationPoints } from './types'

export const getAddPEStudentRegulationPoints = (model: AddStudentRegulationPoints) => {
    return `mutation addRegulationPointsToStudent{
        addPointsForStandardToStudent(
          input: ${jsonStringifyGraphql(model, ['standardType'])}
        ) {
          success
          errors {
            __typename
          }
        }
      }`
}
