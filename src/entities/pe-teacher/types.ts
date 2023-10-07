export type PETeacher = {
    permissions: PeTeacherPermission[]
    fullName: string
}

export enum PeTeacherPermission {
    AdminAccess = 'AdminAccess',
    DefaultAccess = 'DefaultAccess',
    OnlineCourseAccess = 'OnlineCourseAccess',
    SecretaryAccess = 'SecretaryAccess',
    SuperUser = 'SuperUser',
}

export enum PeTeacherAddPermission {
    AdminAccess = 'ADMIN_ACCESS',
    DefaultAccess = 'DEFAULT_ACCESS',
    OnlineCourseAccess = 'ONLINE_COURSE_ACCESS',
    SecretaryAccess = 'SECRETARY_ACCESS',
    SuperUser = 'SUPER_USER',
}
