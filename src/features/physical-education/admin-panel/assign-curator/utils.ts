import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AssignCurator } from './types'

export const getAssignCuratorToGroup = (model: Omit<AssignCurator, 'newVisitValue'>) => {
    return `mutation assignCuratorToGroup{
      assignCuratorToGroup(input: ${jsonStringifyGraphql(model)}) {
        success
      }
    }`
}
