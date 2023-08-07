import { PEStudent } from '../types'

export const calcSummaryPoints = ({ group, visits, additionalPoints, pointsForStandards }: PEStudent): number => {
    return Math.round(group.visitValue * visits + additionalPoints + pointsForStandards)
}
