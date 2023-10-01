export const getCompetitionsQuery = () => {
    return `query loadComp {
        competitions
      }`
}

export const getRemoveCompetitionMutation = (competitionName: string) => {
    return `mutation removeComp {
      deleteCompetition(input: { competitionName: "${competitionName}" }) {
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
