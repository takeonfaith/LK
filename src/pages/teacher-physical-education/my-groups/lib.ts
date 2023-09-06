export const loadGroup = (curatorGuid: string) => {
    return `query groups {
        groups(where: { curatorGuid: {eq: "${curatorGuid}"}}) {
          items {
           visitValue
           groupName 
           curator {
             fullName
           }
          }
        }
      }`
}
