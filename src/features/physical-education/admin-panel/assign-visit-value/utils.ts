import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AssignVisitValue } from './types'

export const getAssignVisitValueMutation = (model: AssignVisitValue) => {
    return `mutation assignVisitValue {
      assignVisitValue(input: ${jsonStringifyGraphql(model, ['newVisitValue'])}) {
        success
      }
    }`
}
