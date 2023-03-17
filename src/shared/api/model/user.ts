import { Sex } from '@utility-types/sex'

export type UserStatus = 'stud' | 'staff'

type EducationFormT = 'Очная' | 'Очно-заочная' | 'Заочная' | 'Недоступен'

type TechicalAccount = {
    token: string
    jwt: string
    jwt_refresh: string
}

type GeneralAccountFields = {
    user_status: UserStatus
    fio: string
    avatar: string
}

export type StudentAccount = {
    status?: string
    group?: string
    course?: number
    educationForm?: EducationFormT
    finance?: string
    degreeLevel?: string
}

export type StaffAccount = {
    work_place?: string
}

export type GeneralAccount = GeneralAccountFields & StudentAccount & StaffAccount & TechicalAccount

export type User = StudentAccount & {
    id: string
    guid: string
    name: string
    fullName: string
    avatar: string
    surname: string
    birthday: string
    patronymic: string
    email?: string
    phone?: string
    orders: string[]
    hasAlerts: boolean
    sex: Sex
    code: string
    faculty: string
    specialty: string
    specialization: string
    degreeLength: number
    enterYear: string
    subdivisions?: Subdivision[]
    user_status: UserStatus
    lastaccess: string
    accounts?: GeneralAccount[]
    authorIDs?: AuthorIDs
}

interface Subdivision {
    categoty: string
    jobType?: string
    status?: string
    subdivision?: string
    wage?: string
    post?: string
}

interface AuthorIDs {
    wosReasearcher?: string
    scopus?: string
    eLibrary?: string
}
