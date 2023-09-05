import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { AssignCurator } from './types'

export const getAssignCuratorToGroup = (model: Omit<AssignCurator, 'cost'>) => {
    return `mutation assignCuratorToGroup {
      assignCuratorToGroup(input: ${jsonStringifyGraphql(model)} {
        success
      }
    }`
}
