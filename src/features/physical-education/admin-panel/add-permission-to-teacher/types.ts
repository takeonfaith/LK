import { PeTeacherAddPermission } from '@entities/pe-teacher/types'

export type AddPermissionToTeacher = {
    teacherGuid: string
    permission: PeTeacherAddPermission
}
