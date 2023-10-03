export const loadPeUserPermissions = (userId: string) => {
    return `query {
        teacher(guid: "${userId}") {
          permissions
          fullName
        }
      }`
}
