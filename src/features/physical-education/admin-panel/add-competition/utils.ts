import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AddCompetition } from './types'

export const getAddCompetition = (model: AddCompetition) => {
    return `mutation addNewComp{
      createCompetition(input: ${jsonStringifyGraphql(model)}) {
        success
          errors{
            ... on Error{
                message
            }
          }
      }
    }`
}
